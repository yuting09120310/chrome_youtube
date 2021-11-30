chrome.contextMenus.create({
    id : "context1",
	title: '透過 YouTube 搜尋「%s」',// %s表示選中的文字
	contexts: ['selection']// 只有當選中文字時才會出現此右鍵選單
});

chrome.contextMenus.onClicked.addListener(function(clickData){
    chrome.tabs.create({url: 'https://www.youtube.com/results?search_query=' + encodeURI(clickData.selectionText)});
})