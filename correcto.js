

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