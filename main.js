var speechRecognition = window.webKitSpeechRecognition;

var recognition = new speechRecognition();

function start(){
textbox.innerHTML = "";
recognition.start();
}

recognition.onresult = function (event){
console.log(event);
var content = event.results[0][0].transcript;
textbox.innerHTML = content;
console.log(content);
if (content == "toma mi selfie"){
console.log("tomando selfie ---")
speak()
}

}