function revision(){
    let nombre = document.getElementById("nombre").value;
    let nombreMinuscula = nombre.toLowerCase();

    if (nombreMinuscula.includes("nor") || nombreMinuscula.includes("amo") && nombreMinuscula.length < 20) {
        //La línea de abajo mostraba el nombre cuando todo estaba correcto
        // document.getElementById("mostrarNombre").innerHTML = nombre;
        window.location.href="correcto.html";
        
    }
    else {
        document.getElementById("mostrarNombre").innerHTML = "No sos mi amorcito get out";
        cambiarContenido();
        esconderContenido();
        return false;
    }
}

function cambiarContenido(){
    //Se crea la variable de la hoja de estilo que vamos a estar usando para ser modificada, 
    //Va contando desde la primera que está en el documento, ya sea con un <link> o con <style>
    //La establecemos en 0 porque comienza a contar desde ahi
    var ss = document.styleSheets[0];

    //Se modifica la primer regla del css, la misma cambia 
    //el valor de backgroundColor de "aqua" a "red"
    ss.cssRules[0].style.backgroundColor = "red";
}

function esconderContenido(){
    //La variable se tiene que crear de vuelta para cada función
    var ss = document.styleSheets[0];
    ss.cssRules[1].style.display = "none";
}