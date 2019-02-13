console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
  let msg={
    txt:"hello"
  }
 chrome.tabs.sendMessage(tab.id,msg);
}


chrome.contextMenus.create({
    type: 'normal',
    title: 'SelectImage',
    id: 'select',
    contexts: ['image'],
}, function () {
    console.log('contextMenus are create.');
});


chrome.contextMenus.create({
    type: 'normal',
    title: 'SaveImage',
    id: 'saveimg',
    parentId:'select',
    contexts: ['image'],
    onclick: handleImage
}, function () {
    console.log('contextMenus are create save.');
});

chrome.contextMenus.create({
    type: 'normal',
    title: 'CopyImage',
    id: 'copyimg',
    parentId:'select',
    contexts: ['image'],
    onclick: handleImage
}, function () {
    console.log('contextMenus are create copy.');
});

function handleImage(info,tab){
  console.log("success");//test
  chrome.tabs.sendMessage(tab.id,info);
}

var str ="40.533727:42.447653"
var arr = str.match(/\d+(.\d+)?/g);
console.log(arr);
