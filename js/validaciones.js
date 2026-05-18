function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    var errores = "";

    if (nombre.trim() == "") {
        errores += "- El nombre es obligatorio.\n";
    }

    if (email.trim() == "") {
        errores += "- El correo electrónico es obligatorio.\n";
    } else {
        var formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formatoEmail.test(email)) {
            errores += "- El correo electrónico no tiene un formato válido.\n";
        }
    }

    if (asunto == "") {
        errores += "- Debes seleccionar un asunto.\n";
    }

    if (mensaje.trim() == "") {
        errores += "- El mensaje no puede estar vacío.\n";
    } else if (mensaje.trim().length < 10) {
        errores += "- El mensaje debe tener al menos 10 caracteres.\n";
    }

    if (errores != "") {
        alert("Por favor corrige los siguientes errores:\n\n" + errores);
        return false;
    }

    alert("Mensaje enviado correctamente. Te responderemos pronto.");
    return true;
}

function contarCaracteres() {
    var mensaje = document.getElementById("mensaje").value;
    var contador = document.getElementById("contador");
    if (contador) {
        contador.innerHTML = "Caracteres: " + mensaje.length;
    }
}
