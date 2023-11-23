var objetos = []
var identificado = false
var rojo = 0
var verde = 0
var azul = 0
function XD() {
    switch (document.getElementById("imagenes").value) {
        case "img1":
            foto = img1
            break;
        case "img2":
            foto = img2
            break;
        case "img3":
            foto = img3
            break;
        case "img4":
            foto = img4
            break;
        default:
            break;
    }
    identificado=false
prendiendo();loop()
}
function preload() {
    foto = loadImage("autentica_cover_m.jpg")
    img1 = loadImage("autentica_cover_m.jpg")
    img2 = loadImage("jirafa-portada-1280x720x80xX.jpg")
    img3 = loadImage("94245869-un-oso-pardo-pescando-salmones-en-la-península-de-katmai-alaska.jpg")
    img4 = loadImage("ciudad-contaminacion-e1565899923422.jpg")
}
function setup() {
    canvas = createCanvas(1056, 594)
    alexa = ml5.objectDetector("cocossd", prendiendo)

}
function draw() {
    
    foto.resize(1056, 594)
    image(foto, 0, 0)
    if (identificado) {
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
        noLoop()
    }
}
function prendiendo() {
    alexa.detect(foto, encontrado)
}
function encontrado(error, resultados) {
    if (!error) {
        objetos = resultados
        identificado = true
        console.log(resultados)
    }
}