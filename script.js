const images = document.getElementsByClassName("example_img"),
texts = document.getElementsByClassName("example_text"),
toggleBtn = document.getElementById("toggleBtn"),
modal = document.getElementById("modal"),
exitBtn = document.getElementById("exitBtn")

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

function showModal(){
    modal.style.animation = "showModal 0.7s forwards";
    toggleBtn.removeEventListener("click", showModal);
    exitBtn.addEventListener("click", hideModal)
}

function hideModal(){
    modal.style.animation = "hideModal 0.7s forwards";
    exitBtn.removeEventListener("click", hideModal);
    toggleBtn.addEventListener("click", showModal)
}

function init(){
    for(let i=0 ; i< images.length; i++){
        images[i].addEventListener("click",imgClick);
    };
    toggleBtn.addEventListener("click", showModal)
}

init();