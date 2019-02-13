chrome.runtime.onMessage.addListener(gotMessage);

document.addEventListener("contextmenu", reportImage);

function reportImage(e){
  console.log(e);
  var tg=e.target;
  console.log(tg.tagName);
  if(tg.tagName=="IMG") {
   console.log(tg);
 }
}

document.addEventListener("mousedown", function(event){
    //right click
    if(event.button == 2) {
        clickedEl = event.target;
    }
}, true);




function gotMessage(message,sender,sendResponse){
  if(message.txt==="hello"){
console.log("right");
 }else{
  handleIMGinfo(message);
 }
}

function handleIMGinfo(info){
  console.log(info);
  if(info.menuItemId=="saveimg"){
    //document.execCommand("copy");
  }else{
    document.execCommand("copy");
  }
}



//var newMarkerponit=$('<div class="ytp-marker-progress" style="left:"')
