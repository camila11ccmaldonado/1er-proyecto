var loggedJugadorId = 0

function ingresarJugadores(nombre, contraseña) {
    for (let i = 0; i < jugadores.length; i++) {
        if (jugadores[i].nombre == nombre && jugadores[i].contraseña == contraseña) {
            loggedJugadorId = jugadores[i].id
            console.log("el jugador es: " + loggedJugadorId)
            return jugadores[i].id
        }
        else if (jugadores[i].nombre == nombre && jugadores[i].contraseña != contraseña) {
            return 0
        }
    }
    return -1
}

function login() {
    var resultado = ingresarJugadores(getJugador(),getPassword())
    if (resultado >= 1) {
        alert("Bienvenido de vuelta");
        changeScreen();
    } else if (resultado == 0)
        alert("El usuario no existe");
    else
        alert("Contraseña incorrecta");
}

function registroJugador(nombre, contraseña) {
    var resultado = ingresarJugadores(nombre, contraseña)
    if (resultado == -1) {
        jugadores.push(new Jugador(nombre, contraseña))
        return true;
    }
    return false
}


function registroJugador() {
    var resultado = registroJugador(getJugador(), getPassword());
    if (resultado == true) {
        alert("te registraste");
        ingresarJugadores(getJugador(), getPassword());
        changeScreen();
    } else if (resultado == false) {
        alert("El nombre ya ha sido utilizado, elija otro.")
    }
}

function agregarPregunta(contenido) {
    if (contenido != "") {
        notas.push(new Pregunta (contenido))
        return preguntasId - 1;
    } else {
        return -1
    }
}

function agregarPreguntaBoton() {
    let idNotaNueva = agregarPregunta(getNoteContent())
    if (idNotaNueva > 0) {
        drawNewNote(getContent(), idPreguntaNueva)
        alert("Se ha creado tu pregunta")
    }
    else if (idPreguntaNueva = -1) {
        alert("")
    }
}

function respuestaCorrecta(preguntasId, respuestasId) {
    for (let i = 0; i < respuestas.length; i++) {
        if (preguntas[i].preguntasId == preguntasId == respuestas[i].respuestaId == respuestasId) {
            loggedJugadorId = jugadores[i].id
            console.log("la pregunta es correcta")
            return respuestas[i].id
        }
        else if (preguntas[i].preguntasId != respuestas[i].respuestaId != respuestaId) {
            return 0
        }
}
}