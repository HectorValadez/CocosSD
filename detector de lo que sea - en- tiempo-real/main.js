var objetos = []
var objetos_update = []
var identificado = false
var rojo = 0
var verde = 0
var azul = 0

function setup() {
    canvas = createCanvas(1056, 594)
    video=createCapture(VIDEO)
    alexa = ml5.objectDetector("cocossd", prendiendo)
    video.hide()
}
function draw() {
    
    video.size(1056, 594)
    image(video, 0, 0,1056,594)
    if (identificado) {
        alexa.detect(canvas, encontrado)
        for (let index = 0; index < objetos.length; index++) {
            const organizador = objetos[index];
            rojo = random(0, 255)
            verde = random(0, 255)
            azul = random(0, 255)
            if (!objetos_update.includes(organizador.label)) {
                objetos_update.push(organizador.label)
                document.getElementById("exterminador").innerHTML += '<p style="color: rgb(' + rojo + ', ' + verde + ', ' + azul + ');">' + organizador.label + '</p>'
            }
            noFill()
            strokeWeight(3)
            stroke(rojo, verde, azul)

            rect(organizador.x, organizador.y, organizador.width, organizador.height)
            noStroke()
            fill("exterminador")
            textSize(16)
            text(organizador.label, organizador.x, organizador.y)
        }
    }
}
function prendiendo() {
    identificado = true
}
function encontrado(error, resultados) {
    if (!error) {
        objetos = resultados
        console.log(resultados)
    }
}