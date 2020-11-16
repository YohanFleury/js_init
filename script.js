//Fonctionnalité 1 : 

var footer = document.querySelector('footer');
footer.addEventListener("click", consoleClick);

var i = 0;


function consoleClick(){
    i++;
    console.log("clique numéro "+i);
}


    
// Fonctionnalité 2 : 
var hamburger = document.querySelector("span");
hamburger.addEventListener('click', looseClass);

function looseClass(){
    var element = document.getElementById("navbarHeader");
    element.classList.toggle("collapse")
}

// Fonctionnalité 3 : 
var editButton = document.getElementById("edit-button")
editButton.addEventListener("click", redText);

function redText(){
    var text = document.getElementById("red-text")
    text.style.color="red";
}

// Fonctionnalité 4 :
var editGreenButton = document.getElementById("edit-green")
editGreenButton.addEventListener("click",greenText);

function greenText(){
    var text = document.getElementById("green-text")
    if (text.style.color==="green"){
        text.style.color =""
    }    
    else text.style.color ="green"

    
}
// Fonctionnalité 5 :

var navbar = document.getElementById("nav");
navbar.addEventListener("dblclick",nuclear);

function nuclear(){
    var link = document.querySelector("link");
    link.remove()
}
