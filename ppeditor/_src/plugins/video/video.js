///import core
///import commands/inserthtml.js
///commands 视频
(function (){
    baidu.editor.plugins['video'] = function (){
        var editor = this;
        var fakedMap = {};
        var fakedPairs = [];
        var lastFakedId = 0;
        function fake(url, width, height,style){
            var fakedId = 'edui_faked_video_' + (lastFakedId ++);
            var fakedHtml = '<img isfakedvideo id="'+ fakedId +'" width="'+ width +'" height="' + height + '" _url="'+url+'" class="edui-faked-video"' +
                ' src="http://hi.baidu.com/fc/editor/images/spacer.gif"' +
                ' style="background:url(http://hi.baidu.com/ui/neweditor/lib/fck/images/fck_videologo.gif) no-repeat center center; border:1px solid gray;'+ style +';" />';
            fakedMap[fakedId] = '<embed isfakedvideo' +
                ' type="application/x-shockwave-flash"' +
                ' pluginspage="http://www.macromedia.com/go/getflashplayer"' +
                ' src="' + url + '"' +
                ' width="' + width + '"' +
                ' height="' + height + '"' +
                ' wmode="transparent"' +
                ' play="true"' +
                ' loop="false"' +
                ' menu="false"' +
                ' allowscriptaccess="never"' +
                '></embed>';
            return fakedHtml;
        }
        editor.commands['insertvideo'] = {
            execCommand: function (cmd, options){
                var url = options.url;
                var width = options.width || 320;
                var height = options.height || 240;
                var style = options.style ? options.style : "";
                editor.execCommand('inserthtml', fake(url, width, height,style));
            }
        };
        //获得style里的某个样式对应的值
        function getPars(str,par){
            var reg = new RegExp(par+":\\s*((\\w)*)","ig");
            var arr = reg.exec(str);
            return arr ? arr[1] : "";
        }

        editor.addListener('beforegetcontent', function (){
            var tempDiv = editor.document.createElement('div');
            var newFakedMap = {};
            for (var fakedId in fakedMap) {
                var fakedImg;
                while ((fakedImg = editor.document.getElementById(fakedId))) {
                    tempDiv.innerHTML = fakedMap[fakedId];
                    var temp = tempDiv.firstChild;
                    temp.width = fakedImg.width;
                    temp.height = fakedImg.height;
                    var strcss = fakedImg.style.cssText;
                    if(/float/ig.test(strcss)){
                        if(!!window.ActiveXObject){
                            temp.style.styleFloat = getPars(strcss,"float");
                        }else{
                            temp.style.cssFloat = getPars(strcss,"float");
                        }
                    }else if(/display/ig.test(strcss)){
                        temp.style.display = getPars(strcss,"display");
                    }
                    fakedImg.parentNode.replaceChild(temp, fakedImg);
                    fakedPairs.push([fakedImg, temp]);
                    newFakedMap[fakedId] = fakedMap[fakedId];
                }
            }
            fakedMap = newFakedMap;
        });

        editor.addListener('aftersetcontent', function (){
            var tempDiv = editor.document.createElement('div');
            fakedMap = {};
            var embedNodeList = editor.document.getElementsByTagName('embed');
            var embeds = [];
            var k = embedNodeList.length;
            while (k --) {
                embeds[k] = embedNodeList[k];
            }
            k = embeds.length;
            while (k --) {
                var url = embeds[k].src;
                var width = embeds[k].width || 320;
                var height = embeds[k].height || 240;
                var strcss = embeds[k].style.cssText;
                var style = getPars(strcss,"display") ? "display:"+getPars(strcss,"display") : "float:"+getPars(strcss,"float");
                tempDiv.innerHTML = fake(url, width, height,style);
                embeds[k].parentNode.replaceChild(tempDiv.firstChild, embeds[k]);
            }
        });
        editor.addListener('aftergetcontent', function (){
            for (var i=0; i<fakedPairs.length; i++) {
                var fakedPair = fakedPairs[i];
                fakedPair[1].parentNode.replaceChild(fakedPair[0], fakedPair[1]);
            }
            fakedPairs = [];
        });

    };
})();
