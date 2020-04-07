console.log('Loaded!');

//Change the HTML Text :-
var element = document.getElementById("main text");
element.innerHTML = "I have been changed using JavaScript";


//Make "madi" move when clicked on :-
var img=document.getElementById("madi");
img.onclick=function()
{
    img.style.marginLeft = '100px';

}