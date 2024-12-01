

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
let texto = "¿Me amas?";
document.getElementById("changingText").innerHTML = texto;

let botonSi = document.getElementById("botonSi");
const textos = [
    "¿Mucho mucho mucho?",
    "¿Me amas aunque juegue kit en atraco para el 0-11?",
    "¿Estás segura?",
    "¿Segurísima?",
    "¿Seguriminisimisima?"
];

botonSi.addEventListener("click", (event) => {
    ejeX = ejeX + 1;
    ejeY = ejeY + 1;

    apretarBtnSi();
    //El if debe ir adentro del eventListener para que ejecute 
    //Cada vez que el boton es presionado
    if(vecesApretado <= textos.length)
    {
        texto = textos[vecesApretado-1];
    }
    else
    {
        window.location.href="mensaje.html";
    }
    console.log(vecesApretado);
    document.getElementById("changingText").innerHTML = texto;
});

function apretarBtnSi(){
    vecesApretado += 1;    
}