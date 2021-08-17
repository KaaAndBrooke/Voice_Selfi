var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function startMic() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (e) {
    console.log(e);
    var quality_content = e.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = quality_content;
    if (quality_content == "take my selfie") {
        speak();
    }
}

function speak() {
    var s = window.speechSynthesis;
    speak_data = "Taking your selfie in five seconds";
    var speakThis = new SpeechSynthesisUtterance(speak_data);
    s.speak(speakThis);
    Webcam.attach('#camera');
    setTimeout(function(){
        takeSelfie();
    },5000);
}

function takeSelfie() {
Webcam.snap(function(capshotimage){
    document.getElementById("result").innerHTML='<img id="ya_yeet" src="'+capshotimage+'"/>';
});
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});
function save(){
    document.getElementById("link").href=document.getElementById("ya_yeet").src;
    document.getElementById("link").click();
}