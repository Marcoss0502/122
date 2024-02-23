var x = 0;
var y = 0;

var desenhoCirculo = "";
var desenhoRetangulo = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function desenhar() {
    document.getElementById("status").innerHTML = "o sistema esta te ouvindo voce pode falar agora";
    recognition.start();
}

recognition.onresult = function (event) {
    var conteudo = event.results[0][0].transcript
    document.getElementById("status").innerHTML = "" + conteudo;


    if (conteudo == "círculo") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        desenhoCirculo = "ativada";
    }

    if (conteudo == "Retângulo") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        desenhoCirculo = "ativada";
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if (desenhoCirculo == "ativada") {
        radius = Math.floor(Math.random() * 300);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "circulo desenhado";
        desenhoCirculo = "";
    }

    if (desenhoRetangulo == "ativada") {
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = "Ret desenhado";
        desenhoRetangulo = "";
    }

}