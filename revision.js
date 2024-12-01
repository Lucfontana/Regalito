function revision(){
    let nombre = document.getElementById("nombre").value;
    let nombreMinuscula = nombre.toLowerCase();

    if (nombreMinuscula.includes("nor") || nombreMinuscula.includes("amo") && nombreMinuscula.length < 20) {
        //La línea de abajo mostraba el nombre cuando todo estaba correcto
        // document.getElementById("mostrarNombre").innerHTML = nombre;
        window.location.href="correcto.html";
        
    }
    else {
        document.getElementById("mostrarNombre").innerHTML = "sos un bragueta";
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

function botonNo(){
    var ss = document.styleSheets[0];
    let botonNo = document.getElementsByClassName("no")[0];

    botonNo.onmouseover = () => {
        ss.cssRules[6].style.position = "absolute";
        botonNo.style.left = Math.random()*200 + "px";
        botonNo.style.top = Math.random()*200 + "px";
    }
}

let ejeX = 0;
let ejeY = 0;
let vecesApretado = 0;
let texto = "Texto cambiante";
document.getElementById("changingText").innerHTML = texto;

let botonSi = document.getElementById("botonSi");

botonSi.addEventListener("click", (event) => {
    ejeX = ejeX + 1;
    ejeY = ejeY + 1;

    apretarBtnSi();
    //El switch debe ir adentro del eventListener para que ejecute 
    //Cada vez que el boton es presionado
    switch(vecesApretado){
        case 1: 
            texto = "El texto cambió por primera vez";
            break;
        case 2: 
            texto = "El texto cambió por segunda vez";
            break;
        case 3:
            texto = "El texto cambió por tercera vez";
            break;
        case 4:
            texto = "El texto cambió por cuarta vez";
            break;
        case 5:
            texto = "El texto cambió por quinta vez";
            break;
        default:
            window.location.href="index.html";
            return;
    }
    console.log(vecesApretado);
    document.getElementById("changingText").innerHTML = texto;
});

function apretarBtnSi(){
    vecesApretado += 1;    
}