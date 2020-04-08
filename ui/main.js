/*console.log('Loaded!');

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
}*/

//Counter code

var button = document.getElementById('counter');
button.onclick = function(){
    //Create a request object
    var request = new XMLHttpRequest();

    //capture the response and store it in a variable.
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
                var counter = request.responseText;
                var span=document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //not done yet
    };

    //Make the request
    request.open('GET', 'http://localhost:8080/counter' , true)
    request.send(null);
};