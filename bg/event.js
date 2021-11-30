 var contextMenusItem = {
    "id":"data",
    "title": "選擇了: %s",  
    "contexts": ['selection'],
    "onclick": function(onClickData, tab){
        console.log(onClickData.selectionText);
    }
};
chrome.contextMenus.create(contextMenusItem)

chrome.contextMenus.onClicked.addListener((info,tab)=>{
    if (tab) {
        if (info.menuItemId === "data"){
            chrome.tabs.executeScript(tab.id, { code: 'alert(%s);' });
        }
    }
})