var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    var Content = event.results[0][0].transcript;
    console.log(event);
    document.getElementById("textbox").innerHTML = Content;

    
    console.log(Content);
        if(Content =="take my selfie") {
            console.log("taking selfie in 5 seconds");
            speak();
        }

} 

function speak() {
    var synth = window.speechSynthesis

    var speakdata ="Taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speakdata);

    synth.speak(utterThis);
   // setTimeout(function(){})
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        
    }   ,5000
    );
}

Webcam.Set({
    width:1080,
    height:720,
    image_format: 'jpeg',
    jpeg_quality:180
});
camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' +data_uri+'">';
    })
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}