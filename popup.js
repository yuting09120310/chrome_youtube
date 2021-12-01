window.onload = function(){
  document.getElementById('getData').onclick = function(){
    let search = document.getElementById('floatingInput').value;
    if(search.length > 0){
      chrome.tabs.create({url: 'https://www.youtube.com/results?search_query=' + encodeURI(search)});
    }
  }
}