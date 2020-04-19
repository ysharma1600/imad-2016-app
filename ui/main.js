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


//Submit name
var submit=document.getElementById('submit_btn');
submit.onclick = function(){

     //Create a request object
     var request = new XMLHttpRequest();

     //capture the response and store it in a variable.
     request.onreadystatechange = function(){
         if(request.readyState === XMLHttpRequest.DONE){
             //take some action
             if(request.status===200){
                 console.log(request.responseText);
                var names=request.responseText;
                names=JSON.parse(names);
                var list = '';
                for(var i=0; i<names.length; i++)
                {
                    list += '<li>' +names[i]  + '</li>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML = list;   
             }
         }
         //not done yet
     };
 
     //Make the request
     var nameInput = document.getElementById('name');
     var name = nameInput.value;
     console.log('sending name' + name);
     request.open('GET', 'http://localhost:8080/submit-name?name=' + name , true)
     request.send(null);
    //make a request to the server and send the name.

    //Capture a list of names and render it as a list.
    
}