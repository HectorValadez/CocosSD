var objetos = []
var identificado = false
var rojo = 0
var verde = 0
var azul = 0

function preload() {
    video = createVideo("AnimalesAfricanos.mp4")
    
}
function setup() {
    canvas = createCanvas(1056, 594)
    alexa = ml5.objectDetector("cocossd", prendiendo)
    video.hide()
}
function draw() {
    
    video.size(1056, 594)
    image(video, 0, 0)
    if (identificado) {
        alexa.detect(video, encontrado)
        for (let index = 0; index < objetos.length; index++) {
            const organizador = objetos[index];
            rojo = random(0, 255)
            verde = random(0, 255)
            azul = random(0, 255)
            noFill()
            strokeWeight(3)
            stroke(rojo, verde, azul)

            rect(organizador.x, organizador.y, organizador.width, organizador.height)
            noStroke()
            fill("black")
            textSize(16)
            text(organizador.label, organizador.x, organizador.y)
            document.getElementById("exterminador").innerHTML += '<p style="color: rgb(' + rojo + ', ' + verde + ', ' + azul + ');">' + organizador.label + '</p>'
        }
    }
}
function prendiendo() {
    video.loop()
    video.volume(0)
    identificado = true
}
function encontrado(error, resultados) {
    if (!error) {
        objetos = resultados
        console.log(resultados)
    }
}