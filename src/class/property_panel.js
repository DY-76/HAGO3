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
           $(this).before($("<div class='help_img_div' style='padding-left:150px; background-color:#87CEEB;'>"));
           $('.help_img_div').html("<img src='/images/mainchar_q.png' style='position:absolute; left:0px; width:150px;'>");
           $('.help_img_div').append($("<div class='help_div'>"));
           $('.help_div').before($("<p id='Paneltip'>").html("<span style='font-size:27px;'>도움말</span>"));
            switch (Number(getParameterByName('stage'))){
                case 1:
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 성취기준 : 정보 [9정03-01], [9정04-04] / 과학 [9과19-03] / 국어 [6국05-02]"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 빈집만 상습적으로 도둑질하는 도둑들이 빈집을 찾다가 코빈네 집에 가족들이 모두 여행을 가고 코빈 혼자만 있는걸 알게 되었어요. 도둑들이 코빈네 집에 침투하지 못하도록 코빈을 도와 도둑을 막아봅시다."));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶도둑들이 코빈네 집으로 못 들어 오도록 상자로 문을 막아봅시다."));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶상자를 무사히 옮기려면 몇 번 움직여야 할까요? ( 단, 한칸 당 1M입니다. )"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶‘앞으로 이동’블록을 블록 꾸러미에서 블록 조립소로 옮겨보세요."));
                    break;
                case 2 :
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 성취기준 : 정보 [9정03-01], [9정04-04] / 과학 [9과19-03] / 국어 [6국05-02]"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑들이 문을 따고 들어 오려는걸 간신히 상자로 막아냈지만, 도둑들의 힘이 생각보다 강해서 문이 열리려고 해요. 도둑들의 힘보다 상자를 무겁게 하고 2층으로 도망쳐 봅시다. "));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑들이 코빈의 집으로 못 들어 오도록 상자로 문을 막아봅시다."));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑들이 문을 열지 못하게 하려면 상자의 질량은 몇이 되어야 할까요? (단, 도둑들의 힘은 정해져 있습니다.)"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 상자의 질량을 정하고 블록 꾸러미에서 블록 조립소로 옮겨 실행 해보세요."));
                    break;
                case 3 :
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 성취기준 : 정보 [9정03-01], [9정04-04] / 과학 [9과19-03] / 국어 [6국05-02]"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑들이 1층에서 문을 열지 못해 2층 창문을 통해 들어오려고 합니다. 2층에는 마침 계란이 있네요. 계란을 이용해서 도둑이 2층으로 못 들어오게 막아봅시다."));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑이 2층으로 못 들어오도록 계란을 굴려서 도둑을 막아봅시다."));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑을 쓰러지게 하려면 계란의 굴러가는 속도는 몇이 되어야 할까요? (단, 도둑들이 계란을 맞고 쓰러지려면 6의 일률이 필요하고, 마찰력은 존재하지 않습니다.)"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶블록 꾸러미에서 블록 조립소로 옮기고 실행하여 방향키를 이용해 속도를 조절 해보세요."));
                    break;
                case 4 :
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 성취기준 : 정보 [9정03-01], [9정04-04] / 과학 [9과19-03] / 수학 [4수03-12]"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑 한명이 계란을 맞고 아래로 떨어졌네요. 그것을 지켜보던 다른 도둑이 화가 나서 2층으로 올라오는데 남은 계란이 없네요. 코빈은 미리 이것을 염두해두고 2층의 불을 다 끈 상태로 빛을 이용해 도둑을 막으려고 합니다. 빛을 이용해 도둑이 집안으로 들어오지 못하도록 친구들이 도와주세요 !"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑이 2층에 들어오지 못하도록 거울과 전등을 이용해 도둑을 막아봅시다."));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑이 눈부시게 만들어 2층에 못 들어오게 하려면 거울의 각도는 몇이 되어야 할까요? (단, 전등은 고정 되어있고 거울로만 빛의 각도를 조절할 수 있습니다.)"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 블록 꾸러미에서 블록 조립소로 옮겨 거울의 각도를 조절하여 실행 해보세요."));
                    break;
                case 5 :
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 성취기준 : 정보 [9정03-01], [9정04-04] / 과학 [9과09-03], [12물리Ⅰ02-03]"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑을 필사적으로 막아보았지만, 결국에 도둑이 2층 집안으로 들어와버렸습니다. 코빈은 2층 계단으로 향하는 문을 닫고 문 손잡이에 전류를 흐르게 하여 도둑들이 문을 못 열게 하려고 합니다. 도체를 이용해 문 손잡이에 전류를 흐르게 친구들이 도와주세요 !"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑이 2층 계단에 오지 못하도록 전류를 이용해 도둑을 막아봅시다."));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑이 문 손잡이를 만졌을 때, 전류가 가장 잘 통하는 물체는 무엇일까요? (단, 전압은 고정 되어있고 전류 값만 조절할 수 있습니다.)"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 블록 꾸러미에서 블록 조립소로 옮겨 도체를 찾아 실행 해보세요."));
                    break;
                case 6 :
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 성취기준 : 정보 [9정03-01], [9정04-04] / 과학 [9과09-03], [12물리Ⅰ02-03]"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 친구들의 도움을 통해서 도둑을 막기위해 전기가 잘 흐르는 도체를 찾아 발전기와 문 손잡이에 연결 했어요. 이제 도둑들이 쓰러질 수 있게 친구들이 전류를 계산해 도와주세요 !"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑이 문 손잡이를 잡으면 쓰러지도록 전압를 이용해 도둑을 막아봅시다."));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑이 문 손잡이를 만지면 전류를 통하게 하여 도둑이 쓰러지려면 전압은 얼만큼 되어야 할까요? (단, 도둑의 저항은 2200Ω)"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 블록 꾸러미에서 블록 조립소로 옮겨 전압값을 조절하여 실행 해보세요."));
                    break;
                case 7 :
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 성취기준 : 정보 [9정03-01], [9정04-04] / 과학 [9과09-03], [12물리Ⅰ02-03]"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 친구들의 도움이 있어서 다행히 2층에서 시간을 벌었어요. 하지만 도둑은 포기하지 않고 코빈을 끝까지 추격하려고 하네요. 코빈은 미리 1층에 내려와 호스를 이용해 물 대포를 쏴서 도둑을 지하로 떨어뜨리려고 하려면 친구들이 도와줘야 해요 !"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑이 물 대포를 맞고 지하로 떨어지기 위해 베르누이법칙을 이용해 도둑을 막아봅시다."));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑이 물 대포를 맞고 지하로 떨어지려면 20m/s 유속으로 분출 되어야 할 때, 도착점의 단면적은 25mm²라고 했을 때, 호스의 출발점 단면적과 출발점 유속은 얼마 였을까요? (단, 단면적과 유속은 반비례 한다. )"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 블록 꾸러미에서 블록 조립소로 옮겨 단면적과 유속을 조절하여 실행 해보세요."));
                    break;
                case 8 :
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 성취기준 : 정보 [9정03-01], [9정04-04] / 과학 [9과09-03], [12물리Ⅰ02-03]"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 물 대포를 이용해 도둑이 지하실로 떨어진 틈을 타서 코빈이 2층으로 도망가는데 성공을 했어요. 근데 생각보다 도둑이 정신을 빨리 차리고 1층으로 올라와버렸어요. 도둑이 계단을 이용해 2층으로 올라오는 동안 타이밍을 맞춰서 공을 떨어트려 도둑을 맞춰 봅시다 !"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑이 공을 맞고 2층으로 올라오지 못하게 하기 위해 중력에 의한 위치 에너지를 이용해 도둑을 막아봅시다."));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑에게 공을 맞추기 위해선 몇 칸을 움직여야 하고 중력에 의한 위치에너지가 몇이 되어야 할까요? (단, 한 칸 당  0.5m 이다.)"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 블록 꾸러미에서 블록 조립소로 옮겨 실행 해보세요."));
                    break;
                case 9 :
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 성취기준 : 정보 [9정03-01], [9정04-04] / 과학 [9과09-03], [12물리Ⅰ02-03]"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 친구들의 도움이 있어서 다행히 2층에서 시간을 벌었어요. 하지만 도둑은 포기하지 않고 코빈을 끝까지 추격하려고 하네요. 코빈은 미리 1층에 내려와 호스를 이용해 물 대포를 쏴서 도둑을 지하로 떨어뜨리려고 하려면 친구들이 도와줘야 해요 !"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑이 물 대포를 맞고 지하로 떨어지기 위해 베르누이법칙을 이용해 도둑을 막아봅시다."));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 도둑이 물 대포를 맞고 지하로 떨어지려면 호스의 도착점 단면적과 출발점 유속은 얼만큼 되어야 할까요? (단, 호스의 단면적은 50mm² 이다. )"));
                    $('.help_div').append($("<p id='Paneltip'>").html("▶ 블록 꾸러미에서 블록 조립소로 옮겨 단면적과 유속을 조절하여 실행 해보세요."));
                    break;
                default :
                    console.log("도움말 case파트 현 번호 찾을 수 없음");
            }

        });

    

        /*  $('.propertyPanelCover').each(function() {
           
            $(this).before($("<p id='Paneltip'>").text(',  루브 골드버그의 이름에서 유래되었습니다.'));
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

        const tabDom = Entry.Dom(`<p>${Lang.Menus[mode]}</div>`, {
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
