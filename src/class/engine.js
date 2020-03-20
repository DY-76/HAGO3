/*u
 * @fileoverview This manage control state and control bar.
 */
'use strict';

import { GEHelper } from '../graphicEngine/GEHelper';



var i = 'off';
var test;
export var test;
export var i;


/**
 * Class for a engine.
 * This have view for control running state.
 * @constructor
 */
Entry.Engine = class Engine {
    constructor() {
        this.state = 'stop';
        this.popup = null;
        this.isUpdating = true;
        this.speeds = [1, 15, 30, 45, 60];

        this.attachKeyboardCapture();

        const _addEventListener = Entry.addEventListener.bind(Entry);




        _addEventListener('canvasClick', () => this.fireEvent('mouse_clicked'));
        _addEventListener('canvasClickCanceled', () => this.fireEvent('mouse_click_cancled'));
        _addEventListener('entityClick', (entity) =>
            this.fireEventOnEntity('when_object_click', entity)
        );
        _addEventListener('entityClickCanceled', (entity) =>
            this.fireEventOnEntity('when_object_click_canceled', entity)
        );

        if (Entry.type !== 'phone') {
            _addEventListener(
                'stageMouseMove',
                _.throttle(this.updateMouseView.bind(this), 100, {
                    leading: false,
                })
            );
            _addEventListener('stageMouseOut', this.hideMouseView.bind(this));
        }

        const $win = $(window);
        _addEventListener('run', () => $win.bind('keydown', arrowHandler));
        _addEventListener('stop', () => $win.unbind('keydown', arrowHandler));

        function arrowHandler(e) {
            const code = e.keyCode || e.which;
            const input = Entry.stage.inputField;

            if (code === 32 && input && input.hasFocus()) {
                return;
            }

            if (_.includes([37, 38, 39, 40, 32], code)) {
                e.preventDefault();
            }
        }

        Entry.message = new Entry.Event(window);
    }

    /**
     * Control bar view generator.
     * @param {!Element} controlView controlView from Entry.
     * @param {?string} option for choose type of view.
     */
    generateView(controlView, option = 'workspace') {
        this.option = option;
        if (option == 'workspace') {
            /** @type {!Element} */
            this.view_ = controlView;
            this.view_.addClass('entryEngine_w').addClass('entryEngineWorkspace_w');

           /* this.speedButton = Entry.createElement('button')
                .addClass(
                    'entrySpeedButtonWorkspace',
                    'entryEngineTopWorkspace',
                    'entryEngineButtonWorkspace_w'
                )
                .appendTo(this.view_)
                .bindOnClick(function(e) {
                    Entry.engine.toggleSpeedPanel();
                    this.blur();
                }); */

            this.maximizeButton = Entry.createElement('button')
                .addClass(
                    'entryEngineButtonWorkspace_w',
                    'entryEngineTopWorkspace',
                    'entryMaximizeButtonWorkspace_w'
                )
                .appendTo(this.view_)
                .bindOnClick(function(e) {
                    Entry.engine.toggleFullScreen();
                    this.blur();
                }); 

           /* this.coordinateButton = Entry.createElement('button')
                .addClass(
                    'entryEngineButtonWorkspace_w',
                    'entryEngineTopWorkspace',
                    'entryCoordinateButtonWorkspace_w'
                )
                .appendTo(this.view_)
                .bindOnClick(function(e) {
                    if (this.hasClass('toggleOn')) {
                        this.removeClass('toggleOn');
                    } else {
                        this.addClass('toggleOn');
                    }

                    this.blur();
                    Entry.stage.toggleCoordinator();
                });  */ //바둑판 보이는거

            this.mouseView = Entry.createElement('div')
                .addClass('entryMouseViewWorkspace_w')
                .addClass('entryHide')
                .appendTo(this.view_);

            this.mouseViewInput = Entry.createElement('input').appendTo(this.mouseView);
            $(this.mouseViewInput).html('readonly', 'readonly'); 

            this.buttonWrapper = Entry.createElement('div')
                .addClass('entryEngineButtonWrapper')
                .appendTo(this.view_); 
            this.addButton = Entry.createElement('button')
                .addClass('entryEngineButtonWorkspace_w')
                .addClass('entryAddButtonWorkspace_w')

                .bindOnClick(function() {
                    Entry.do('addObjectButtonClick');
                    
                    /* + 클릭시 실행되는 부분 */
                    this.blur();
                })
                .appendTo(this.buttonWrapper);
            this.addButton.innerHTML = Lang.Workspace.add_object;
            if (!Entry.objectAddable) {
                this.addButton.addClass('entryRemove');
            }  //이거는 오브젝트 추가 버튼

            this.runButton = Entry.createElement('button')
                .addClass('entryEngineButtonWorkspace_w')
                .addClass('entryRunButtonWorkspace_w')
                .bindOnClick(() => Entry.do('toggleRun', 'runButton'))
                .appendTo(this.buttonWrapper);
            this.runButton.innerHTML = Lang.Workspace.run;

            this.runButton2 = Entry.createElement('button')
                .addClass('entryEngineButtonWorkspace_w')
                .addClass('entryRunButtonWorkspace_w2')
                .appendTo(this.buttonWrapper)
                .bindOnClick(() => Entry.engine.toggleRun());

            this.pauseButton = Entry.createElement('button')
                .addClass('entryEngineButtonWorkspace_w')
                .addClass('entryPauseButtonWorkspace_w')
                .addClass('entryRemove')
                .appendTo(this.buttonWrapper)
                .bindOnClick(function(e) {
                    this.blur();
                    Entry.engine.togglePause();
                });

            this.pauseButtonFull = Entry.createElement('button')
                .addClass('entryEngineButtonWorkspace_w')
                .addClass('entryPauseButtonWorkspace_full')
                .addClass('entryRemove')
                .appendTo(this.buttonWrapper)
                .bindOnClick(function() {
                    this.blur();
                    Entry.engine.togglePause();
                });

            this.stopButton = Entry.createElement('button')
                .addClass('entryEngineButtonWorkspace_w')
                .addClass('entryStopButtonWorkspace_w')
                .addClass('entryRemove')
                .bindOnClick(() => Entry.do('toggleStop', 'stopButton'))
                .appendTo(this.buttonWrapper);
            this.stopButton.innerHTML = Lang.Workspace.stop;

            this.stopButton2 = Entry.createElement('button')
                .addClass('entryEngineButtonWorkspace_w')
                .addClass('entryStopButtonWorkspace_w2')
                .addClass('entryRemove')
                .bindOnClick(function() {
                    this.blur();
                    Entry.engine.toggleStop();
                })
                .appendTo(this.buttonWrapper);
            this.stopButton2.innerHTML = Lang.Workspace.stop;
        } else if (option == 'minimize') {
            /** @type {!Element} */
            this.view_ = controlView;
            this.view_.addClass('entryEngine');
            this.view_.addClass('entryEngineMinimize');

            this.maximizeButton = Entry.createElement('button');
            this.maximizeButton.addClass('entryEngineButtonMinimize');
            this.maximizeButton.addClass('entryMaximizeButtonMinimize');
            this.view_.appendChild(this.maximizeButton);
            this.maximizeButton.bindOnClick((e) => {
                Entry.engine.toggleFullScreen();
            });

            this.coordinateButton = Entry.createElement('button');
            this.coordinateButton.addClass('entryEngineButtonMinimize');
            this.coordinateButton.addClass('entryCoordinateButtonMinimize');
            this.view_.appendChild(this.coordinateButton);
            this.coordinateButton.bindOnClick(function(e) {
                if (this.hasClass('toggleOn')) {
                    this.removeClass('toggleOn');
                } else {
                    this.addClass('toggleOn');
                }
                Entry.stage.toggleCoordinator();
            });

            this.stopButton = Entry.createElement('button');
            this.stopButton.addClass('entryEngineButtonMinimize');
            this.stopButton.addClass('entryStopButtonMinimize');
            this.stopButton.addClass('entryRemove');
            this.stopButton.innerHTML = Lang.Workspace.stop;
            this.view_.appendChild(this.stopButton);


            this.stopButton.bindOnClick(function(e) {
                this.blur();
                Entry.engine.toggleStop();
            });

            this.pauseButton = Entry.createElement('button');
            this.pauseButton.innerHTML = Lang.Workspace.pause;
            this.pauseButton.addClass('entryEngineButtonMinimize');
            this.pauseButton.addClass('entryPauseButtonMinimize');
            this.pauseButton.addClass('entryRemove');
            this.view_.appendChild(this.pauseButton);
            this.pauseButton.bindOnClick(function(e) {
                this.blur();
                Entry.engine.togglePause();
            });

            this.mouseView = Entry.createElement('div');
            this.mouseView.addClass('entryMouseViewMinimize');
            this.mouseView.addClass('entryHide');

            this.mouseViewInput = Entry.createElement('input').appendTo(this.mouseView);
            $(this.mouseViewInput).attr('readonly', 'readonly');
            $(this.mouseViewInput).attr(
                'style',
                'border: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;line-height: normal'
            );

            this.view_.appendChild(this.mouseView);

            Entry.addEventListener('loadComplete', () => {
                this.runButton = Entry.Dom('div', {
                    class: 'entryRunButtonBigMinimize',
                    parent: $('#entryCanvasWrapper'),
                });
                this.runButton.bindOnClick(() => Entry.engine.toggleRun());
            });
        } else if (option == 'phone') {
            this.view_ = controlView;
            this.view_.addClass('entryEngine', 'entryEnginePhone');

            this.headerView_ = Entry.createElement('div', 'entryEngineHeader');
            this.headerView_.addClass('entryEngineHeaderPhone');
            this.view_.appendChild(this.headerView_);

            this.maximizeButton = Entry.createElement('button');
            this.maximizeButton.addClass('entryEngineButtonPhone', 'entryMaximizeButtonPhone');
            this.headerView_.appendChild(this.maximizeButton);
            this.maximizeButton.bindOnClick((e) => {
                Entry.engine.footerView_.addClass('entryRemove');
                Entry.engine.headerView_.addClass('entryRemove');
                Entry.launchFullScreen(Entry.engine.view_);
            });
            document.addEventListener('fullscreenchange', (e) => {
                Entry.engine.exitFullScreen();
            });
            document.addEventListener('webkitfullscreenchange', (e) => {
                Entry.engine.exitFullScreen();
            });
            document.addEventListener('mozfullscreenchange', (e) => {
                Entry.engine.exitFullScreen();
            });

            this.footerView_ = Entry.createElement('div', 'entryEngineFooter');
            this.footerView_.addClass('entryEngineFooterPhone');
            this.view_.appendChild(this.footerView_);

            this.runButton = Entry.createElement('button');
            this.runButton.addClass('entryEngineButtonPhone', 'entryRunButtonPhone');
            if (Entry.objectAddable) {
                this.runButton.addClass('small');
            }
            this.runButton.innerHTML = Lang.Workspace.run;

            this.footerView_.appendChild(this.runButton);
            this.runButton.bindOnClick((e) => {
                Entry.engine.toggleRun();
            });

            this.stopButton = Entry.createElement('button');
            this.stopButton.addClass(
                'entryEngineButtonPhone',
                'entryStopButtonPhone',
                'entryRemove'
            );
            if (Entry.objectAddable) {
                this.stopButton.addClass('small');
            }
            this.stopButton.innerHTML = Lang.Workspace.stop;

            this.footerView_.appendChild(this.stopButton);
            this.stopButton.bindOnClick((e) => {
                Entry.engine.toggleStop();
            });
        }
    }

    toggleSpeedPanel() {
        if (this.speedPanelOn) {
            this.speedPanelOn = false;
            this.speedButton.removeClass('on');

            $(this.speedLabel_)
                .parent()
                .remove();
            delete this.speedLabel_;
            $(this.speedProgress_).fadeOut(null, function(e) {
                $(this).remove();
                delete this.speedProgress_;
            });
            $(this.speedHandle_).remove();
            delete this.speedHandle_;
        } else {
            this.speedPanelOn = true;
            this.speedButton.addClass('on');

            const speedBox = Entry.createElement('div', 'entrySpeedBox');
            speedBox.addClass('entrySpeedBox');
            this.view_.insertBefore(speedBox, Entry.stage.canvas.canvas);

            this.speedLabel_ = Entry.createElement('div', 'entrySpeedLabelWorkspace');
            this.speedLabel_.innerHTML = Lang.Workspace.speed;
            speedBox.appendChild(this.speedLabel_);

            this.speedProgress_ = Entry.createElement('table', 'entrySpeedProgressWorkspace');
            const tr = Entry.createElement('tr').appendTo(this.speedProgress_);

            this.speeds.forEach((speed, i) => {
                Entry.createElement('td', `progressCell${i}`)
                    .addClass('progressCell')
                    .bindOnClick(() => {
                        this.setSpeedMeter(speed);
                    })
                    .appendTo(tr);
            });

            speedBox.appendChild(this.speedProgress_);
            this.setSpeedMeter(Entry.FPS);
        }
    }

    setSpeedMeter(FPS) {
        let level = this.speeds.indexOf(FPS);
        if (level < 0) {
            return;
        }
        level = Math.min(4, level);
        level = Math.max(0, level);
        if (this.speedPanelOn) {
            const elements = document.querySelectorAll(`.progressCell`);
            Array.from(elements).forEach((element, i) => {
                if (level === i) {
                    element.className = 'progressCell on';
                } else if (element.className.indexOf('on') > -1) {
                    element.className = 'progressCell';
                }
            });
        }
        if (Entry.FPS == FPS) {
            return;
        }
        clearInterval(this.ticker);
        this.ticker = setInterval(this.update, Math.floor(1000 / FPS));
        Entry.FPS = FPS;
    }

    /**
     * Start engine
     * @param {number} FPS
     */
    start(FPS) {
        /** @type {!number} */
        GEHelper.Ticker.setFPS(Entry.FPS);

        if (!this.ticker) {
            this.ticker = setInterval(this.update, Math.floor(1000 / Entry.FPS));
        }
    }

    /**
     * Stop engine
     */
    stop() {
        GEHelper.Ticker.reset();
        clearInterval(this.ticker);
        this.ticker = null;
    }

    /**
     * Update canvas and object.
     */
    update() {
        if (Entry.engine.isState('run')) {
            Entry.engine.computeObjects();
            Entry.hw.update();
        }
    }

    /**
     * compute each object with runningScript on entity.
     */
    computeObjects() {
        Entry.container.mapObjectOnScene(this.computeFunction);
    }

    /**
     * Compute function for map.
     * @param {Entry.EntryObject} object
     */
    computeFunction({ script }) {
        script.tick();
    }

    /**
     * Check this state is same with argument
     * @param {string} state
     * @return {boolean}
     */
    isState(state) {
        return this.state.indexOf(state) > -1;
    }

    /**
     * Execute this function when click start button
     */
    run() {
        if (this.isState('run')) {
            this.toggleStop();
        } else if (this.isState('stop') || this.isState('pause')) {
            this.toggleRun();
        }
    }

    /**
     * toggle this engine state run
     */
    toggleRun(disableAchieve) {
        const variableContainer = Entry.variableContainer;
        const container = Entry.container;
        const WS = Entry.getMainWS();

        if (this.state === 'pause') {
            return this.togglePause();
        }

        Entry.Utils.blur();

        WS && WS.syncCode();

        Entry.addActivity('run');

        if (this.state == 'stop') {
            container.mapEntity((entity) => {
                entity.takeSnapshot();
            });
            variableContainer.mapVariable((variable) => {
                variable.takeSnapshot();
            });
            variableContainer.mapList((variable) => {
                variable.takeSnapshot();
            });
            this.projectTimer.takeSnapshot();
            container.inputValue.takeSnapshot();

            container.takeSequenceSnapshot();
            Entry.scene.takeStartSceneSnapshot();
            this.state = 'run';
            this.fireEvent('start');
            this.achieveEnabled = !(disableAchieve === false);
        }
        this.state = 'run';
        if (Entry.type == 'mobile') {
            this.view_.addClass('entryEngineBlueWorkspace');
        }

        if (this.runButton) {
            this.setPauseButton(this.option);
            this.runButton.addClass('run');
            this.runButton.addClass('entryRemove');
            this.stopButton.removeClass('entryRemove');
            if (this.addButton) {
                this.addButton.addClass('entryRemove');
                if (Entry.objectAddable) {
                    this.pauseButton.removeClass('entryRemove');
                }
            }
            if (this.pauseButton && (Entry.type === 'minimize' || Entry.objectAddable)) {
                this.pauseButton.removeClass('entryRemove');
            }

            if (this.runButton2) {
                this.runButton2.addClass('entryRemove');
            }
            if (this.stopButton2) {
                this.stopButton2.removeClass('entryRemove');
            }
            if (this.pauseButtonFull) {
                this.pauseButtonFull.removeClass('entryRemove');
            }
        }

        if (!this.isUpdating) {
            this.update();
            this.isUpdating = true;
        }

        this.setEnableInputField(true);

        this.selectedObject = Entry.stage.selectedObject;
        Entry.stage.selectObject();
        Entry.dispatchEvent('run');
    }

    /**
     * toggle this engine state stop
     */
    toggleStop() {
        const container = Entry.container;
        const variableContainer = Entry.variableContainer;

        Entry.Utils.blur();

        Entry.addActivity('stop');

        container.mapEntity((entity) => {
            entity.loadSnapshot();
            entity.object.filters = [];
            entity.resetFilter();
            if (entity.dialog) {
                entity.dialog.remove();
            }
            if (entity.brush) {
                entity.removeBrush();
            }
        });

        variableContainer.mapVariable((variable) => {
            variable.loadSnapshot();
        });
        variableContainer.mapList((variable) => {
            variable.loadSnapshot();
        });
        this.stopProjectTimer();
        if (Entry.timerInstances) {
            Entry.timerInstances.forEach((instance) => {
                instance.destroy();
            });
        }
        container.clearRunningState();
        container.loadSequenceSnapshot();
        this.projectTimer.loadSnapshot();
        container.inputValue.loadSnapshot();
        Entry.scene.loadStartSceneSnapshot();
        Entry.Func.clearThreads();
        Entry.Utils.setVolume(1);
        createjs.Sound.setVolume(1);
        createjs.Sound.stop();
        Entry.soundInstances = [];
        Entry.targetChecker && Entry.targetChecker.clearListener();

        this.view_.removeClass('entryEngineBlueWorkspace');
        if (this.runButton) {
            this.runButton.removeClass('entryRemove');
            this.stopButton.addClass('entryRemove');
            if (this.pauseButton) {
                this.pauseButton.addClass('entryRemove');
            }
            if (this.pauseButtonFull) {
                this.pauseButtonFull.addClass('entryRemove');
            }
            if (this.addButton && Entry.objectAddable) {
                this.addButton.removeClass('entryRemove');
            }

            if (this.runButton2) {
                this.runButton2.removeClass('entryRemove');
            }
            if (this.stopButton2) {
                this.stopButton2.addClass('entryRemove');
            }
        }

        this.state = 'stop';
        this.setEnableInputField(false);
        Entry.dispatchEvent('stop');
        Entry.stage.hideInputField();
        (function(w) {
            w && w.getMode() === Entry.Workspace.MODE_VIMBOARD && w.codeToText();
        })(Entry.getMainWS());
        Entry.dispatchEvent('dispatchEventDidToggleStop');
        Entry.stage.selectObject(this.selectedObject);
    }

    setEnableInputField(on) {
        const inputField = Entry.stage.inputField;
        if (inputField) {
            inputField._readonly = !on;
            if (!inputField._isHidden) {
                on ? inputField.focus() : inputField.blur();
            }
        }
    }

    /**
     * toggle this engine state pause
     */
    togglePause() {
        const timer = Entry.engine.projectTimer;
        if (this.state == 'pause') {
            this.setEnableInputField(true);
            timer.pausedTime += new Date().getTime() - timer.pauseStart;
            if (timer.isPaused) {
                timer.pauseStart = new Date().getTime();
            } else {
                delete timer.pauseStart;
            }
            this.state = 'run';
            Entry.Utils.recoverSoundInstances();
            if (this.runButton) {
                this.setPauseButton(this.option);
                if (this.runButton2) {
                    this.runButton2.addClass('entryRemove');
                } else {
                    this.runButton.addClass('entryRemove');
                }
            }

            if (Entry.timerInstances) {
                Entry.timerInstances.forEach((instance) => {
                    instance.resume();
                });
            }
        } else {
            this.state = 'pause';
            this.setEnableInputField(false);
            if (!timer.isPaused) {
                timer.pauseStart = new Date().getTime();
            } else {
                timer.pausedTime += new Date().getTime() - timer.pauseStart;
                timer.pauseStart = new Date().getTime();
            }
            Entry.Utils.pauseSoundInstances();
            if (this.runButton) {
                this.setPauseButton(this.option);
                this.stopButton.removeClass('entryRemove');
                if (this.runButton2) {
                    this.runButton2.removeClass('entryRemove');
                } else {
                    this.runButton.removeClass('entryRemove');
                }
            }

            if (Entry.timerInstances) {
                Entry.timerInstances.forEach((instance) => {
                    instance.pause();
                });
            }
        }
        Entry.dispatchEvent('dispatchEventDidTogglePause');
    }

    setPauseButton(option) {
        if (this.state == 'pause') {
            if (this.pauseButton) {
                this.pauseButton.innerHTML = Lang.Workspace.restart;
                if (this.option !== 'minimize') {
                    this.pauseButton.removeClass('entryPauseButtonWorkspace_w');
                    this.pauseButton.addClass('entryRestartButtonWorkspace_w');
                }
            }
            if (this.pauseButtonFull) {
                this.pauseButtonFull.innerHTML = Lang.Workspace.restart;
                if (this.option !== 'minimize') {
                    this.pauseButtonFull.removeClass('entryPauseButtonWorkspace_full');
                    this.pauseButtonFull.addClass('entryRestartButtonWorkspace_full');
                }
            }
        } else {
            if (this.pauseButton) {
                this.pauseButton.innerHTML = Lang.Workspace.pause;
                if (this.option !== 'minimize') {
                    this.pauseButton.addClass('entryPauseButtonWorkspace_w');
                    this.pauseButton.removeClass('entryRestartButtonWorkspace_w');
                }
            }
            if (this.pauseButtonFull) {
                this.pauseButtonFull.innerHTML = Lang.Workspace.pause;
                if (this.option !== 'minimize') {
                    this.pauseButtonFull.addClass('entryPauseButtonWorkspace_full');
                    this.pauseButtonFull.removeClass('entryRestartButtonWorkspace_full');
                }
            }
        }
    }

    /**
     * @param {string} eventName
     */
    fireEvent(eventName) {
        if (this.state !== 'run') {
            return;
        }
        Entry.container.mapEntityIncludeCloneOnScene(this.raiseEvent, eventName);
    }

    /**
     * this is callback function for map.
     * @param {Entry.EntryObject} object
     * @param {string} eventName
     */
    raiseEvent(entity, eventName) {
        entity.parent.script.raiseEvent(eventName, entity);
    }

    /**
     * @param {string} eventName
     * @param {Entry.EntityObject} entity
     */
    fireEventOnEntity(eventName, entity) {
        if (this.state == 'run') {
            Entry.container.mapEntityIncludeCloneOnScene(this.raiseEventOnEntity, [
                entity,
                eventName,
            ]);
        }
    }

    /**
     * this is callback function for map.
     * @param {Entry.EntryObject} object
     * @param {Array} param
     */
    raiseEventOnEntity(entity, param) {
        if (entity !== param[0]) {
            return;
        }
        const eventName = param[1];
        entity.parent.script.raiseEvent(eventName, entity);
    }

    /**
     * capture keyboard press input
     * @param {keyboard event} e
     */
    captureKeyEvent(e, isForce) {
        const keyCode = e.keyCode;
        const isWorkspace = Entry.type === 'workspace';

        if (Entry.Utils.isInInput(e) && !isForce) {
            return;
        }

        //mouse shortcuts
        if (keyCode !== 17 && e.ctrlKey && isWorkspace) {
            if (keyCode == 83) {
                e.preventDefault();
                Entry.dispatchEvent(e.shiftKey ? 'saveAsWorkspace' : 'saveWorkspace');
            } else if (keyCode == 82) {
                e.preventDefault();
                Entry.engine.run();
            } else if (keyCode == 90) {
                e.preventDefault();
                Entry.dispatchEvent(e.shiftKey ? 'redo' : 'undo');
            }
        } else if (Entry.engine.isState('run')) {
            e.preventDefault && e.preventDefault();
            Entry.container.mapEntityIncludeCloneOnScene(Entry.engine.raiseKeyEvent, [
                'keyPress',
                keyCode,
            ]);
        }

        if (Entry.engine.isState('stop')) {
            if (isWorkspace && (keyCode >= 37 && keyCode <= 40)) {
                Entry.stage.moveSprite(e);
            }
        }
    }

    /**
     * this is callback function for map.
     * @param {Entry.EntryObject} object
     * @param {Array} param
     */
    raiseKeyEvent(entity, [eventName, keyCode]) {
        return entity.parent.script.raiseEvent(eventName, entity, String(keyCode));
    }

    /**
     * Update mouse coordinate
     */
    updateMouseView() {
        const { x, y } = Entry.stage.mouseCoordinate;
        this.mouseViewInput.value = `X : ${x}, Y : ${y}`;
        this.mouseView.removeClass('entryHide');
    }

    /**
     * hide mouse coordinate
     */
    hideMouseView() {
        this.mouseView.addClass('entryHide');
    }

    /**
     * Toggle full screen of canvas
     */

// 엔트리속 팝업 test하던거
/*

    testcanvas(popupClassName){
        i = 'off';
        console.log(i);
        if (!this.popup) {
            this.popup = new Entry.Popup(popupClassName);
            //console.log('testcanvas_if_test01');

            //var test_btn = document.createElement( 'button' );

            var link = document.createElement('div');
            link.id = 'contents';
            this.popup.window_.append(link);

            console.log(window.location.href.slice(0,23)+'stage=');




            //$("#contents").load("test_local/test_HM.html");

            
            
            
            //popup.window_.appendChild(Entry.engine.testview_);
            
            console.log('testcanvas_if_test03');

            //this.popup.window_.remove();
            //console.log('testcanvas_if_test03_text01remove');

        } else {
            //console.log('testcanvas_else_test');
            this.popup.removeaddBTN();
            this.popup = null;
        }
        
    }

*/

addobjectproject(){
  var
   addobject = Entry.exportProject();
    Entry.Utils.addNewObject(addobject);
}
saveobjectproject(){
    test = Entry.exportProject();
    var test_array = JSON.stringify(test);

    var blobObj = new Blob([test_array], {type:'application/json'});
       var obj_LINK = URL.createObjectURL(blobObj)
       const LINK = document.createElement('a');
       LINK.setAttribute('href', obj_LINK);
       LINK.setAttribute('download', 'test.HAGO');
       LINK.click();
       //window.open(window.URL.createObjectURL(blobObj))
       
}
fileinfo(){
    var file = document.getElementById("file").files[0];
document.getElementById("table").innerHTML += "<tr><td>파일이름</td><td>"+file.name+"</td></tr>";
document.getElementById("table").innerHTML += "<tr><td>파일크기</td><td>"+file.size+"</td></tr>";
document.getElementById("table").innerHTML += "<tr><td>파일타입</td><td>"+file.type+"</td></tr>";
document.getElementById("table").innerHTML += "<tr><td>파일수정날짜</td><td>"+file.lastModifiedDate+"</td></tr>";


}

fileread(){
    var file = document.getElementById("file").files[0];
    var reader = new FileReader();
    console.log(reader);
    reader.readAsText(file, "utf-8");
    reader.onload=function(){
        var view=document.getElementById("content");
        view.textContent = reader.result;
        
        var load_data = JSON.parse(reader.result);
        Entry.clearProject();
        
       Entry.loadProject(load_data);

    };
    var load_data = JSON.parse(reader.result);
        Entry.loadProject(load_data);
    reader.onerror = function(event){
        switch(event.target.error.code){
            case error.NOT_FOUND_ERR:
                alert("읽을 파일을 찾지 못하였습니다..");break;
            case error.SECURITY_ERR:
                alert("보안상 안전하지 않습니다..");break;
            case error.ABORT_ERR:
                alert("읽기가 중지되었습니다."); break;
            case error.NOT_READABLE_ERR:
                alert("읽기 권한이 없습니다."); break;
            case error.ENCODING_ERR:
                alert("파일 용량이 상한을 초과하였습니다."); break;

        }
   
    };
 }
loadobjectproject(){
   
    fileread();
 
}

    toggleFullScreen(popupClassName) {
        //var rawFile = new XMLHttpRequest();
        //rawFile.open("GET", file, false);
        i = 'on';
       test = Entry.exportProject();
      /* test = Entry.addobjectProject();
      console.log(test);
      Entry.Utils.addNewObject(test); */
       var test_array = JSON.stringify(test);
      
      
       var blobObj = new Blob([test_array], {type:'application/json'});
       var obj_LINK = URL.createObjectURL(blobObj)
       const LINK = document.createElement('a');
       LINK.setAttribute('href', obj_LINK);
       LINK.setAttribute('download', 'test.HAGO');
       LINK.click();
       window.open(window.URL.createObjectURL(blobObj)) 
       
       //atob(test_array);
      // var load_data = JSON.parse(test_array);
      // Entry.loadProject(load_data);
        
     
        //var save = require('../test/save_test.js');
        //save.save_test(); 


        
        if (!this.popup) {
            this.popup = new Entry.Popup(popupClassName);
            //console.log('FullSC_start1');
            if (Entry.engine.speedPanelOn) {

                //console.log('FullSC_speed1');

                Entry.engine.toggleSpeedPanel();

                //console.log('FullSC_speed2');
            }
            if (Entry.type != 'workspace') {
                //console.log('FullSC_work1');

                const $doc = $(document);
                const body = $(this.popup.body_);
                body.css('top', $doc.scrollTop());
                $('body').css('overflow', 'hidden');

                //console.log('FullSC_work2');

                popup.window_.appendChild(Entry.stage.canvas.canvas);
                popup.window_.appendChild(Entry.engine.runButton[0]);
                
            }
            //console.log('FullSC_start2');
            popup.window_.appendChild(Entry.engine.view_);

            if (Entry.type === 'workspace' && Entry.targetChecker) {
                //console.log('FullSC_view');
                popup.window_.appendChild(Entry.targetChecker.getStatusView()[0]);
            }
        } else {
            //console.log('fullSC_else_test');

            this.popup.remove();
            this.popup = null;
        }
        Entry.windowResized.notify();
    }

    closeFullScreen() {
        if (this.popup) {
            this.popup.remove();
            this.popup = null;
        }

        Entry.windowResized.notify();
    }

    exitFullScreen() {
        //console.log('exit_test');
        if (document.webkitIsFullScreen || document.mozIsFullScreen || document.isFullScreen) {
            //console.log('exit_test');
        } else {
            //console.log('exit_test');
            Entry.engine.footerView_.removeClass('entryRemove');
            Entry.engine.headerView_.removeClass('entryRemove');
        }
        //console.log('exit_test');
        Entry.windowResized.notify();
    }

    //projectTimer to show
    showProjectTimer() {
        const timer = Entry.engine.projectTimer;
        if (!timer) {
            return;
        }
        this.projectTimer.setVisible(true);
    }

    //decide Entry.engine.projectTimer to show
    hideProjectTimer(removeBlock, notIncludeSelf) {
        const timer = this.projectTimer;
        if (!timer || !timer.isVisible() || this.isState('run')) {
            return;
        }
        const objects = Entry.container.getAllObjects();

        const timerTypes = [
            'get_project_timer_value',
            'reset_project_timer',
            'set_visible_project_timer',
            'choose_project_timer_action',
        ];

        for (let i = 0, len = objects.length; i < len; i++) {
            const code = objects[i].script;
            for (let j = 0; j < timerTypes.length; j++) {
                const blocks = code.getBlockList(false, timerTypes[j]);
                if (notIncludeSelf) {
                    const index = blocks.indexOf(removeBlock);
                    if (index > -1) {
                        blocks.splice(index, 1);
                    }
                }
                if (blocks.length > 0) {
                    return;
                }
            }
        }
        timer.setVisible(false);
    }

    clearTimer() {
        clearInterval(this.ticker);
        clearInterval(this.projectTimer.tick);
    }

    startProjectTimer() {
        const timer = this.projectTimer;

        if (!timer) {
            return;
        }

        timer.start = new Date().getTime();
        timer.isInit = true;
        timer.isPaused = false;
        timer.pausedTime = 0;
        timer.tick = setInterval((e) => {
            Entry.engine.updateProjectTimer();
        }, 1000 / 60);
    }

    stopProjectTimer() {
        const timer = this.projectTimer;
        if (!timer) {
            return;
        }
        this.updateProjectTimer(0);
        timer.isPaused = false;
        timer.isInit = false;
        timer.pausedTime = 0;
        clearInterval(timer.tick);
    }

    resetTimer() {
        const timer = this.projectTimer;
        if (!timer.isInit) {
            return;
        }
        const isPaused = timer.isPaused;

        delete timer.pauseStart;

        this.updateProjectTimer(0);
        timer.pausedTime = 0;

        timer.isPaused = isPaused;

        if (!isPaused) {
            return;
        }

        clearInterval(timer.tick);
        timer.isInit = false;
        delete timer.start;
    }

    updateProjectTimer(value) {
        const engine = Entry.engine;
        const timer = engine.projectTimer;
        if (!timer) {
            return;
        }
        const current = new Date().getTime();
        if (typeof value == 'undefined') {
            if (!timer.isPaused && !engine.isState('pause')) {
                timer.setValue(
                    Math.max((current - (timer.start || current) - timer.pausedTime) / 1000, 0)
                );
            }
        } else {
            timer.setValue(value);
            timer.pausedTime = 0;
            timer.start = current;
        }
    }

    raiseMessage(value) {
        Entry.message.notify(Entry.variableContainer.getMessage(value));
        return Entry.container.mapEntityIncludeCloneOnScene(this.raiseKeyEvent, [
            'when_message_cast',
            value,
        ]);
    }

    getDom(query) {
        if (query.length >= 1) {
            switch (query.shift()) {
                case 'runButton':
                    return this.runButton;
                case 'stopButton':
                    return this.stopButton;
                case 'objectAddButton':
                    return this.addButton;
            }
        } else {
        }
    }

    attachKeyboardCapture() {
        if (Entry.keyPressed) {
            this._keyboardEvent && this.detachKeyboardCapture();
            this._keyboardEvent = Entry.keyPressed.attach(this, this.captureKeyEvent);
        }
    }

    detachKeyboardCapture() {
        if (Entry.keyPressed && this._keyboardEvent) {
            this._keyboardEvent.destroy();
            delete this._keyboardEvent;
        }
    }

    applyOption() {
        const SMALL = 'small';

        if (Entry.objectAddable) {
            this.runButton.addClass(SMALL);
            this.stopButton.addClass(SMALL);
            this.addButton.removeClass('entryRemove');
        } else {
            this.runButton.removeClass(SMALL);
            this.stopButton.removeClass(SMALL);
            this.addButton.addClass('entryRemove');
        }
    }

    destroy() {
        //console.log('exit_test');
        // 우선 interface 만 정의함.
    }
};

Entry.Engine.computeThread = function(entity, script) {
    Entry.engine.isContinue = true;
    let isSame = false;
    while (script && Entry.engine.isContinue && !isSame) {
        Entry.engine.isContinue = !script.isRepeat;
        const newScript = script.run();
        isSame = newScript && newScript === script;
        script = newScript;
    }
    return script;
};

