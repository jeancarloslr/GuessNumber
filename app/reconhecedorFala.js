const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
vareroFalado = document.querySelector('.box');
var ElementoChute = document.querySelector('#chute');

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener('result', Speak)

function Speak(e){
  chute = e.results[0] [0].transcript;
  verificarChuteValido(chute)
}

function MostrarChute(chute){
  ElementoChute.innerHTML = 
  `<div>Você disse:</div>
  <span class="box">${chute}</span>`
}