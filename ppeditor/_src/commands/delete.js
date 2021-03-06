///import core
///commands 删除
/**
 * 删除
 * @function
 * @name baidu.editor.execCommand
 * @param  {String}    cmdName    delete删除
 */
(function (){
    var domUtils = baidu.editor.dom.domUtils,
        browser = baidu.editor.browser;
    baidu.editor.commands['delete'] = {
        execCommand : function (cmd, name){
            
            var range = this.selection.getRange(),
            
                mStart = 0,
                mEnd = 0,
                me = this;

            while(!range.startOffset &&  !domUtils.isBody(range.startContainer) ){
                mStart = 1;
                range.setStartBefore(range.startContainer);
            }//&&  !domUtils.isBlockElm(range.endContainer)
            while(!domUtils.isBody(range.endContainer)  && range.endOffset == (range.endContainer.nodeType == 1 ? range.endContainer.childNodes.length : range.endContainer.nodeValue.length)){
                mEnd = 1;
                range.setEndAfter(range.endContainer);
                if(browser.webkit){
                    var child = range.endContainer.childNodes[range.endOffset];
                    if(child && child.nodeType == 1 && child.tagName == 'BR' && range.endContainer.lastChild === child){
                        range.setEndAfter(child);
                    }
                }

            }
            if(mStart){
                var start = me.document.createElement('span');
                start.innerHTML = 'start';
                start.id = '_baidu_cut_start';
                range.insertNode(start).setStartBefore(start)
            }
            if(mEnd){
                var end = me.document.createElement('span');
                end.innerHTML = 'end';
                end.id = '_baidu_cut_end';
                range.cloneRange().collapse(false).insertNode(end);
                range.setEndAfter(end)

            }



            range.deleteContents();


            if(domUtils.isBody(range.startContainer) && domUtils.isEmptyNode(me.body)){
                me.body.innerHTML = '<p>'+(browser.ie?'':'<br/>')+'</p>'
                range.setStart(me.body.firstChild,0).collapse(true);
            }

            range.select(true)
        },
        queryCommandState : function(){
            return this.selection.getRange().collapsed ? -1 : 0;
        }
    };
})();
