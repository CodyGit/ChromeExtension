chrome.browserAction.onClicked.addListener(function() {
    //当设置default_popup 这个方法不会触发
    console.debug("click the browser action");
});
