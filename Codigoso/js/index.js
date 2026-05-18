function saludoHora() {
    var hora = new Date().getHours();
    var saludo = "";

    if (hora >= 6 && hora < 12) {
        saludo = "Buenos días";
    } else if (hora >= 12 && hora < 19) {
        saludo = "Buenas tardes";
    } else {
        saludo = "Buenas noches";
    }

    var elemento = document.getElementById("saludo");
    if (elemento) {
        elemento.innerHTML = saludo + ", bienvenido a CodeBears.";
    }
}

window.onload = function() {
    saludoHora();
};
