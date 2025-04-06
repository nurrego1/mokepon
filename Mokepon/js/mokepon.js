function iniciarJuego(){
    //Variables
    let botonMascota = document.getElementById("boton-mascota");
    let botonFuego = document.getElementById("boton-fuego");  
    
    
    //Event listeners
    botonMascota.addEventListener("click",seleccionarMascotaJugador); //El primer elemento es el evento que va a escuchar, y el segundo es la accion o funcion que se va a ejecutar
}

//Funcion seleccionar Mascota
function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("hipodoge");
    let inputCapipepo = document.getElementById("capipepo");
    let inputRatigueya = document.getElementById("ratigueya");
    let inputLangostelvis = document.getElementById("langostelvis");
    let inputTucapalma = document.getElementById("tucapalma");
    let inputPydos = document.getElementById("pydos");
    let spanMascotaJugador = document.getElementById("mascota-jugador");

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge";
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo";
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML ="Ratigueya";
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = "Langostelvis";
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = "Tucapalma"; 
    } else if(inputPydos.checked) {
        spanMascotaJugador.innerHTML ="Pydos";
    } else {
        alert("Selecciona una mascota");
    }

    seleccionarMascotaEnemigo()
}

//Funcion seleccionar mascota enemigo
function seleccionarMascotaEnemigo() {
    let enemigoAleatorio = aleatorio(1, 6);
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

    if (enemigoAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    } else if (enemigoAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo";
    } else if (enemigoAleatorio == 3) {
        spanMascotaEnemigo.innerHTML ="Ratigueya";
    } else if (enemigoAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = "Langostelvis";
    } else if (enemigoAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = "Tucapalma"; 
    } else if(enemigoAleatorio == 6) {
        spanMascotaEnemigo.innerHTML ="Pydos";
    } else {
        alert("Selecciona una mascota");
    }

}

//funcion generadora de numeros aleatorios
function aleatorio(min, max) {
    return Math.floor(Math.random() * ( max - min + 1 ) + min);
 }     

//Event listener de carga del HTML
window.addEventListener("load", iniciarJuego) //Ejecuta la funcion iniciarJuego una vez se ha cargado TODO el HTML
