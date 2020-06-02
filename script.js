const images = document.getElementsByClassName("example_img"),
texts = document.getElementsByClassName("example_text"),
toggleBtn = document.getElementById("toggleBtn"),
modal = document.getElementById("modal"),
exitBtn = document.getElementById("exitBtn"),
selectVoice = document.getElementById("selectVoice"),
voiceOptions = document.getElementsByClassName("voice-option")

let voiceIndex = 0;

function makeOptions(){
    const voices = window.speechSynthesis.getVoices();
    for(let i=0 ; i<voices.length ; i++){
       voiceOptions[i].innerHTML =  voices[i].name;
       voiceOptions[i].value = i;
    }
}

function showModal(){
    modal.style.animation = "showModal 0.7s forwards";
    toggleBtn.removeEventListener("click", showModal);
    toggleBtn.addEventListener("click", hideModal);
    exitBtn.addEventListener("click", hideModal)
    makeOptions()
}

function hideModal(){
    modal.style.animation = "hideModal 0.7s forwards";
    exitBtn.removeEventListener("click", hideModal);
    toggleBtn.addEventListener("click", showModal)
}

function imgClick(e){
    const content = e.target.parentNode.childNodes[3].innerHTML;
    console.log(content)
    const voices = window.speechSynthesis.getVoices()
    console.log(voices)
    const speak = new SpeechSynthesisUtterance(content);
    speak.voice = voices[voiceIndex]
    window.speechSynthesis.speak(speak);
    e.target.style.animation = "clicked 1s";
    setTimeout(() =>{e.target.style.animation = "";},1000);
}

function readText(e){
    console.log(e.target.parentNode.lastchild)
}

function changeVoice(e){
    console.log(e.target)
    voiceIndex = e.target.value
}

function init(){
    for(let i=0 ; i< images.length; i++){
        images[i].addEventListener("click",imgClick);
    };
    toggleBtn.addEventListener("click", showModal);
    selectVoice.addEventListener("change", changeVoice);
}

init();