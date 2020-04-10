/**
 * @fileoverview PropertyPanel shows project's property
 */
'use strict';


Entry.PropertyPanel = function() {
    this.modes = {};
    this.selected = null;
};

(function(p) {
    /**
     * Generate View
     */
    p.generateView = function(parentDom, option) {
        const container = $(parentDom);
      //* 이거 주석처리해서 밑에 안나옴 밑 파티션
        this._view = Entry.Dom('div', {
            class: 'propertyPanel',
            id: 'stagedisplaypanel',
            parent: container,
        }); 
        var now_link = window.location.href.split("stage=")

        if(Number(now_link[1]) == 10){
            document.getElementById("stagedisplaypanel").style.display="block";
        }
        else{
            document.getElementById("stagedisplaypanel").style.display="none";
        }
     
      

        this._tabView = Entry.Dom('div', {
            class: 'propertyTab',
            parent: this._view,
        }); 

         this._contentView = Entry.Dom('div', {
            class: 'propertyContent',
            parent: this._view,
        });  

        this._cover = Entry.Dom('div', {
            classes: ['propertyPanelCover','entryRemove'],
            parent: this._view,
        });
        

        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

        $('.propertyPanel').each(function() { 
            
            var win_H = $(window).height()*0.7;
            $(window).resize(function() {
                
                $('.help_size').height($(window).height()-750);
           });
           

            switch (Number(getParameterByName('stage'))){
                case 1:
                    
                    $(this).before($('<span>').html("<style st> @import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Do+Hyeon&display=swap');</style><font size=\"6\" color=\"#DE6449\" face=\"Black Han Sans\"> 성취기준:<br> 정보[9정03-01], [9정04-04]</font><br/>"));
            
                    $(this).before($('<span>').html("<br/><style> @import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Do+Hyeon&display=swap');</style><font size=\"5\" color=\"#754F44\" face=\"Do Hyeon\">▶'앞으로 한칸'블록을 블록 꾸러미에서<br> 블록 조립소로 옮기셈</font><br/>"));

                    $(this).before($('<span>').html("<br/><style> @import url('https://fonts.googleapis.com/css?family=Black+Han+Sans|Do+Hyeon&display=swap');</style><font size=\"5\" color=\"#754F44\" face=\"Do Hyeon\">▶블록을 완성시켜, 바구니에 넣으셈</font><br/>"));

                    break;
                case 2 :
                    $(this).before($('<div>').html("<div class='help_size' style='overflow:auto; width:800px; top:500px; bottom:0;';><font size='6'> test1<br>test<br>test3<br>test<br>test<br>test6<br>test </font></div>"));
                    
                    break;
                case 3 :
                    console.log(getParameterByName('stage'));
                    break;
                case 4 :
                    console.log(getParameterByName('stage'));
                    break;
                case 5 :
                    console.log(getParameterByName('stage'));
                    break;
                case 0 :

                    break;
                default :
                    console.log("도움말 case파트 현 번호 찾을 수 없음");
            }

            
        
            
        });

    

        /*  $('.propertyPanelCover').each(function() {
           
            $(this).before($('<span>').text('골드버그란 명칭은 미국의 만화가,  루브 골드버그의 이름에서 유래되었습니다.'));
            $(this).text().replace(/\r?\n/g, '<br />'); 
           
           
             $(this).before($('<text2>').text("간단한 결과에 도달하기까지의 과정을 다양하고 복잡하게 창의적으로 설계하여 끊어짐 없이 연속된 동작을 만들어내는 장치를 골드버그 장치라고 할 수 있습니다."));
             
           }); */
        

        const splitter = Entry.Dom('div', {
            class: ''/*'entryObjectSelectedImgWorkspace'*/,
            parent: container,
        }); 
        this.initializeSplitter(splitter);
    }; 
    

    p.addMode = function(mode, contentObj) {
        if (this.modes[mode]) {
            this.removeMode(mode);
        }

        let contentDom = contentObj.getView();
        // will be removed after apply new Dom class
        contentDom = Entry.Dom(contentDom, {
            parent: this._contentView,
        });

        const tabDom = Entry.Dom(`<div>${Lang.Menus[mode]}</div>`, {
            classes: ['propertyTabElement', `propertyTab${mode}`],
            parent: this._tabView,
        });
        const that = this;
        tabDom.bind('click', () => {
            that.select(mode);
        });

        if (mode == 'console') {
            contentObj.codeMirror.refresh();
        }

        if (this.modes[mode]) {
            this.modes[mode].tabDom.remove();
            this.modes[mode].contentDom.remove();
            if (mode == 'hw') {
                $(this.modes).removeClass('.propertyTabhw');
                $('.propertyTabhw').unbind('dblclick');
            }
        }

        this.modes[mode] = {
            obj: contentObj,
            tabDom,
            contentDom,
        };

        if (mode == 'hw') {
            $('.propertyTabhw').bind('dblclick', () => {
                Entry.dispatchEvent('hwModeChange');
            });
        }
    };

    p.removeMode = function(mode) {
        if (this.modes[mode]) {
            this.modes[mode].tabDom.remove();
            this.modes[mode].contentDom.remove();
            if (mode == 'hw') {
                $(this.modes).removeClass('.propertyTabhw');
                $('.propertyTabhw').unbind('dblclick');
            }
        }

        const keys = Object.keys(this.modes);
        if (keys && keys.length > 0) {
            this.select(keys[0]);
        }
    };

    p.resize = function(canvasSize) {
        const selected = this.selected;
        if (!selected) {
            return;
        }
        const canvasHeight = (canvasSize * 9) / 16;
        this._view.css({
            width: `${canvasSize}px`,
            top: `${canvasHeight + 35 + 40 + 48 - 22}px`,
        });
        if (canvasSize >= 430) {
            this._view.removeClass('collapsed');
        } else {
            this._view.addClass('collapsed');
        }

        Entry.dispatchEvent('windowResized');

        const obj = this.modes[selected].obj;
        if (selected == 'hw') {
            if (this.modes.hw.obj.listPorts) {
                obj.resizeList();
            } else {
                obj.resize && obj.resize();
            }
        } else {
            obj.resize && obj.resize();
        }
    };

    p.select = function(modeName) {
        for (const key in this.modes) {
            const mode = this.modes[key];
            mode.tabDom.removeClass('selected');
            mode.contentDom.addClass('entryRemove');
            $(mode.contentDom).detach();
            mode.obj.visible = false;
        }

        const selected = this.modes[modeName];
        $(this._contentView).append(selected.contentDom);
        selected.tabDom.addClass('selected');
        selected.contentDom.removeClass('entryRemove');
        if (selected.obj.resize) {
            selected.obj.resize();
        }
        selected.obj.visible = true;
        this.selected = modeName;
    };

    p.initializeSplitter = function(splitter) {
        const that = this;
        splitter.bind('mousedown touchstart', function(e) {
            e.preventDefault();
            if (Entry.disposeEvent) {
                Entry.disposeEvent.notify();
            }
            const container = Entry.container;
            that._cover.removeClass('entryRemove');
            that._cover._isVisible = true;
            container.splitterEnable = true;
            if (Entry.documentMousemove) {
                container.resizeEvent = Entry.documentMousemove.attach(this, (e) => {
                    if (container.splitterEnable) {
                        Entry.resizeElement({
                            canvasWidth: e.clientX || e.x,
                        });
                    }
                });
            }
            $(document).bind('mouseup.container:splitter touchend.container:splitter', func);
        });

        const func = function(e) {
            const container = Entry.container;
            const listener = container.resizeEvent;
            if (listener) {
                container.splitterEnable = false;
                listener.destroy();
                delete container.resizeEvent;
            }
            if (that._cover._isVisible) {
                that._cover._isVisible = false;
                that._cover.addClass('entryRemove');
            }
            $(document).unbind('.container:splitter');
        };
    };
    
})(Entry.PropertyPanel.prototype);
