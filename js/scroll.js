window.onscroll=function(){

let scrollTop=document.documentElement.scrollTop;

let scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/scrollHeight)*100;

document.getElementById("progress-bar").style.width=progress+"%";

}