///import core
///import plugins/serialize/serialize.js
///import plugins/undo/undo.js
///commands 查看源码
(function (){
    var browser = baidu.editor.browser,
        domUtils = baidu.editor.dom.domUtils,
        dtd = baidu.editor.dom.dtd;

    function SourceFormater(config){
        config = config || {};
        this.indentChar = config.indentChar || '  ';
        this.breakChar = config.breakChar || '\n';
        this.selfClosingEnd = config.selfClosingEnd || ' />';
    }
    var unhtml1 = function (){
        var map = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
        function rep( m ){ return map[m]; }
        return function ( str ) {
            str = str + '';
            return str ? str.replace( /[<>"']/g, rep ) : '';
        };
    }();
    function printAttrs(attrs){
        var buff = [];
        for (var k in attrs) {
            buff.push(k + '="' + unhtml1(attrs[k]) + '"');
        }
        return buff.join(' ');
    }
    SourceFormater.prototype = {
        format: function (html){
            var node = baidu.editor.serialize.parseHTML(html);
            this.buff = [];
            this.indents = '';
            this.indenting = 1;
            this.visitNode(node);
            return this.buff.join('');
        },
        visitNode: function (node){
            if (node.type == 'fragment') {
                this.visitChildren(node.children);
            } else if (node.type == 'element') {
                var selfClosing = dtd.$empty[node.tag];
                this.visitTag(node.tag, node.attributes, selfClosing);
                this.visitChildren(node.children);
                if (!selfClosing) {
                    this.visitEndTag(node.tag);
                }
            } else if (node.type == 'comment') {
                this.visitComment(node.data);
            } else {
                this.visitText(node.data);
            }
        },
        visitChildren: function (children){
            for (var i=0; i<children.length; i++) {
                this.visitNode(children[i]);
            }
        },
        visitTag: function (tag, attrs, selfClosing){
            if (this.indenting) {
                this.indent();
            } else if (!dtd.$inline[tag] && tag != 'a') { // todo: 去掉a, 因为dtd的inline里面没有a
                this.newline();
                this.indent();
            }
            this.buff.push('<', tag);
            var attrPart = printAttrs(attrs);
            if (attrPart) {
                this.buff.push(' ', attrPart);
            }
            if (selfClosing) {
                this.buff.push(this.selfClosingEnd);
                if (tag == 'br') {
                    this.newline();
                }
            } else {
                this.buff.push('>');
                this.indents += this.indentChar;
            }
            if (!dtd.$inline[tag]) {
                this.newline();
            }
        },
        indent: function (){
            this.buff.push(this.indents);
            this.indenting = 0;
        },
        newline: function (){
            this.buff.push(this.breakChar);
            this.indenting = 1;
        },
        visitEndTag: function (tag){
            this.indents = this.indents.slice(0, -this.indentChar.length);
            if (this.indenting) {
                this.indent();
            } else if (!dtd.$inline[tag] && !(dtd[tag] && dtd[tag]['#'])) {
                this.newline();
                this.indent();
            }
            this.buff.push('</', tag, '>');
        },
        visitText: function (text){
            if (this.indenting) {
                this.indent();
            }
            this.buff.push(text);
        },
        visitComment: function (text){
            if (this.indenting) {
                this.indent();
            }
            this.buff.push('<!--', text, '-->');
        }
    };

    function selectTextarea(textarea){
        var range;
        if (browser.ie) {
            range = textarea.createTextRange();
            range.collapse(true);
            range.select();
        } else {
            //todo: chrome下无法设置焦点
            textarea.setSelectionRange(0, 0);
            textarea.focus();
        }
    }
    function createTextarea(container){

        var textarea = document.createElement('textarea');
        textarea.style.cssText = 'resize:none;width:100%;height:100%;border:0;padding:0;margin:0;';
        container.appendChild(textarea);
        return textarea;
    }

    baidu.editor.plugins['source'] = function (){
        var editor = this;
        editor.initPlugins(['serialize']);

        var formatter = new SourceFormater(editor.options.source);
        var sourceMode = false;
        var textarea;

        editor.addListener('ready', function (){
            var container = editor.iframe.parentNode;
            //textarea = createTextarea(container);
            if (browser.ie && browser.version < 8) {
                container.onresize = function (){
                    if(textarea){
                        textarea.style.width = this.offsetWidth + 'px';
                        textarea.style.height = this.offsetHeight + 'px';
                    }

                };
            }
            container = null;
        });

        var bakCssText;
        editor.commands['source'] = {
            execCommand: function (){
                sourceMode = !sourceMode;
                if (sourceMode) {
                    editor.undoManger && editor.undoManger.save();
                    this.currentSelectedArr && domUtils.clearSelectedArr(this.currentSelectedArr);
                    
                    bakCssText = editor.iframe.style.cssText;
                    editor.iframe.style.cssText += 'position:absolute;left:-32768px;top:-32768px;';
                    var content = formatter.format(editor.getContent());
                    textarea = createTextarea(editor.iframe.parentNode);

                    textarea.value = content;
                    if (browser.ie && browser.version < 8) {
                        textarea.style.height = editor.iframe.parentNode.offsetHeight + 'px';
                        textarea.style.width = editor.iframe.parentNode.offsetWidth + 'px';
                    }
                        setTimeout(function (){
                        selectTextarea(textarea);
                    });
                } else {
                    
                   
                    editor.iframe.style.cssText = bakCssText;
                    editor.setContent(textarea.value|| '<p><br/></p>');
                    domUtils.remove(textarea);
                    textarea = null;
                    var first = editor.body.firstChild;
                    //trace:1106 都删除空了，下边会报错，所以补充一个p占位
                    if(!first){
                        editor.body.innerHTML = '<p>'+(browser.ie?'':'<br/>')+'</p>';
                        first = editor.body.firstChild;
                    }
                    //要在ifm为显示时ff才能取到selection,否则报错
                    editor.undoManger && editor.undoManger.save();

                    while(first && first.firstChild){

                        first = first.firstChild;
                    }
                    var range = editor.selection.getRange();
                    if(first.nodeType == 3 || baidu.editor.dom.dtd.$empty[first.tagName]){
                        range.setStartBefore(first)
                    }else{
                        range.setStart(first,0);
                    }
                    range.setCursor();


                }
                this.fireEvent('sourcemodechanged', sourceMode);
            },
            queryCommandState: function (){
                return sourceMode|0;
            }
        };
        if(browser.ie){
            editor.addListener('fullscreenchanged',function(type,fullscreen){
                if(fullscreen && textarea){
                    textarea.style.height = editor.iframe.parentNode.offsetHeight + 'px';
                    textarea.style.width = editor.iframe.parentNode.offsetWidth + 'px';
                }
            })
        }
        var oldQueryCommandState = editor.queryCommandState;
        editor.queryCommandState = function (cmdName){
            cmdName = cmdName.toLowerCase();
            if (sourceMode) {
                return cmdName == 'source' ? 1 : -1;
            }
            return oldQueryCommandState.apply(this, arguments);
        };
        //解决在源码模式下getContent不能得到最新的内容问题
        var oldGetContent = editor.getContent;
        editor.getContent = function (){

            if(sourceMode && textarea ){
                var html = textarea.value;
                if (this.serialize) {
                    var node = this.serialize.parseHTML(html);
                    node = this.serialize.filter(node);
                    html = this.serialize.toHTML(node);
                }
                return html;
            }else{
                return oldGetContent.apply(this, arguments)
            }
        };
    };

})();