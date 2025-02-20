let buttonElement = document.querySelectorAll(".drum");
let audio;
for (let i = 0; i < buttonElement.length; i++) {
  buttonElement[i].addEventListener("click",  function(e) {
    //console.log(e);
    console.log(this.classList[0]);
    // makeSound(this.classList[0]);
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
});
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});
 function makeSound(key){
    switch (key) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s": 
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "l": 
        audio = new Audio("sounds/kick-bass.mp3");
        break;
    }
  audio.play();
 }

 function buttonAnimation(currentKey){
    let buttonElement=document.querySelector("."+currentKey);
    // console.log(buttonElement);
    buttonElement.classList.add("pressed");
    setTimeout(function(){
         buttonElement.classList.remove("pressed");
    },100);
    // console.log(buttonElement);
 }