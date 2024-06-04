const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var numeroFalado = document.querySelector('.box');

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener('result', Speak)

function Speak(e){
    if (/^\d+$/.test(e.results[0][0].transcript)) {
        numeroFalado.innerHTML = e.results[0][0].transcript;
        // Aqui você pode fazer algo com a entrada numérica
      } else {
        console.log('Entrada inválida, por favor fale apenas números.');
      }
}