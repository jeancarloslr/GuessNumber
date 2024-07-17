const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var ElementoChute = document.querySelector('#chute');
var chute;

const recognition =new SpeechRecognition();
recognition.lang =  "pt-Br";
recognition.start();

recognition.addEventListener('result', Speak)

function Speak(e){
  chute = e.results[0][0].transcript;
  console.log(chute)
  verificarChuteValido(chute);
}

function MostrarChute(chute){
  ElementoChute.innerHTML = 
  `<div>Você disse:</div>
  <span class="box">${chute}</span>`
}