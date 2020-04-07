console.log('Loaded!');

//Change the HTML Text :-
var element = document.getElementById("main text");
element.innerHTML = "I have been changed using JavaScript";


//Make "madi" move when clicked on :-
var img=document.getElementById("madi");

var marginLeft=0;

function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function(){
    var interval=setInterval(moveRight,50);
}