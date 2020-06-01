const images = document.getElementsByClassName("example_img"),
texts = document.getElementsByClassName("example_text");

function imgClick(e){
    const content = e.target.parentNode.childNodes[3].innerHTML;
    console.log(content)
    const speak = new SpeechSynthesisUtterance(content);
    window.speechSynthesis.speak(speak);
    e.target.style.animation = "clicked 1s";
    setTimeout(() =>{e.target.style.animation = "";},1000);
}

function readText(e){
    console.log(e.target.parentNode.lastchild)
}

function init(){
    for(let i=0 ; i< images.length; i++){
        images[i].addEventListener("click",imgClick);
    };
}

init();