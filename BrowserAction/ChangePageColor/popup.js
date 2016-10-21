document.addEventListener("DOMContentLoaded", function(){
    var divs = document.querySelectorAll("div");
    for (var i = 0; i < divs.length; i ++){
        divs[i].addEventListener("click", function(e){

            //改变插件图标的颜色
            /*
            chrome.browserAction.setIcon(object details)
            设置browser action的图标。图标可以是一个图片的路径或者是从一个canvas元素提取的像素信息.。无论是图标路径还是canvas的 imageData，这个属性必须被指定。
            Parameters
                details ( object )
                    imageData ( optional ImageData )
                    图片的像素信息。必须是一个ImageData 对象(例如：一个canvas元素)。
                    path ( optional string )
                    图片在扩展中的的相对路径。
                    tabId ( optional integer )
                    可选参数，将设置限制在被选中的标签，当标签关闭时重置。
            */
            var c = e.target.id;
            chrome.browserAction.setIcon({
                path: "icons/" + c + ".png"
            });
            /*
            chrome.tabs.executeScript(integer tabId, object details, function callback)
            向页面注入JavaScript 脚本执行。要了解详情，请查阅内容脚本文档的 programmatic injection 部分。
            Parameters
                tabId ( optional integer )
                运行脚本的标签ID；默认为当前窗口所选中的标签。
                details ( object )
                要执行的脚本内容，可选code或者file，但不能同时选两者。
                    code ( optional string )
                    要执行的脚本代码。
                    file ( optional string )
                    要执行的脚本文件。
                    allFrames ( optional boolean )
                    true的时候，给所有frame执行脚本。默认为false，只给顶级frame执行脚本。
                    callback ( optional function )
                    所有脚本执行后会被调用的回调。
            */
            chrome.tabs.executeScript(null, {code:"document.body.style.backgroundColor='" + c + "'"});
            //window.close();
        });
    }

});
