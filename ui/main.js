console.log('Loaded!');

//Change the HTML Text :-
var element = document.getElementById("main text");
element.innerHTML = "I have been changed using JavaScript";


//Make "madi" move when clicked on :-
var img=document.getElementById("madi");

var marginleft=0;
function moveRight(){
    marginleft=marginleft+10;
    img.style.marginleft=marginleft+'px';
}

img.onclick=function(){
    var interval=serInterval(moveRight,100);
}