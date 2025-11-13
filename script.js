let speech = new SpeechSynthesisUtterance();
//Array to store voices
let voices = [];
//varible where to append or show option
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option (voice.name,i)));
}

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
})


document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})
 
document.querySelector("button").addEventListener("click",() =>{
    let txtArea = document.querySelector("textarea");
    if (txtArea.value == ""){
         alert("Type Something below first Listen");
    }
})
