


function ocultarMostrarImagen() {
    let estado = document.getElementById("img1").src
    if (estado == "images/pcolor.jpg") {
        estado = "images/pnegro.jpg"
    } else {
        estado = "images/pcolor.jpg"
    }
    document.getElementById("img1").src = estado
}

function ocultarImagen() {
    document.getElementById("img1").src = "images/pnegro.jpg"
}


function adivinar(respuesta) {
    ocultarMostrarImagen()
    ocultarMostrarRespuesta()
    if (respuesta=="excadrill") {
        correcto()
    } else {
        incorrecto()
    }
}

function reiniciar() {
    ocultarMostrarImagen()
    ocultarMostrarRespuesta()
    ocultarImagen()
    document.getElementById("textoInicial").style.color="black"
    document.getElementById("respuesta").style.display="none";
}



function ocultarMostrarRespuesta() {
    let estado = document.getElementById("respuesta");
    if (estado.style.display === "none") {
        estado.style.display = "block";
    } else {
        estado.style.display = "none";
    }
}

function correcto() {
    document.getElementById("respuesta").innerHTML="Felicitaciones, has seleccionado la opción correcta"
    document.getElementById("textoInicial").style.color="yellow"
}

function incorrecto() {
    document.getElementById("respuesta").innerHTML="Pokémon incorrecto, la respuesta es: excadril"
    document.getElementById("textoInicial").style.color="red"
}


