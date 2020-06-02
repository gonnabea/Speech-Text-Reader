const images = document.getElementsByClassName("example_img"),
texts = document.getElementsByClassName("example_text"),
toggleBtn = document.getElementById("toggleBtn"),
modal = document.getElementById("modal"),
exitBtn = document.getElementById("exitBtn"),
selectVoice = document.getElementById("selectVoice"),
voiceOptions = document.getElementsByClassName("voice-option"),
exampleTexts = document.getElementById("exampleTexts"),
readBtn = document.getElementById("readBtn")

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
    const speak = new SpeechSynthesisUtterance(content);
    const voices = window.speechSynthesis.getVoices()
    speak.voice = voices[voiceIndex]
    window.speechSynthesis.speak(speak);
    e.target.style.animation = "clicked 1s";
    setTimeout(() =>{e.target.style.animation = "";},1000);
}

function readText(){
    const content = exampleTexts.value;
    const speak = new SpeechSynthesisUtterance(content);
    const voices = window.speechSynthesis.getVoices()
    speak.voice = voices[voiceIndex];
    window.speechSynthesis.speak(speak)
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
    readBtn.addEventListener("click", readText);
    makeOptions()
}

init();