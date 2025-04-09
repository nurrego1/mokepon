//Variables globales
let ataqueJugador;
let ataqueEnemigo;
let resultado;
let resultado2;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego(){
    //ocular elementos
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");    
    sectionSeleccionarAtaque.style.display = "none";
    let btnReiniciar = document.getElementById("boton-reiniciar");
    btnReiniciar.style.display = "none";

    //Variables
    let botonMascota = document.getElementById("boton-mascota");
    let botonFuego = document.getElementById("boton-fuego");  
    let botonAgua = document.getElementById("boton-agua");
    let botonTierra = document.getElementById("boton-tierra");
    let botonAire = document.getElementById("boton-aire");
    let botonReiniciar = document.getElementById("boton-reiniciar");
    
    // Limpiar la selección previa al iniciar el juego
    document.querySelectorAll('input[name="mascota"]').forEach(input => input.checked = false);

    
    //Event listeners
    botonMascota.addEventListener("click",seleccionarMascotaJugador); //El primer elemento es el evento que va a escuchar, y el segundo es la accion o funcion que se va a ejecutar
    botonFuego.addEventListener("click", ataqueFuego);
    botonAgua.addEventListener("click", ataqueAgua);
    botonTierra.addEventListener("click", ataqueTierra);
    botonAire.addEventListener("click", ataqueAire)
    botonReiniciar.addEventListener("click", reiniciarJuego);

}

//Funcion seleccionar Mascota
function seleccionarMascotaJugador() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
    let inputHipodoge = document.getElementById("hipodoge");
    let inputCapipepo = document.getElementById("capipepo");
    let inputRatigueya = document.getElementById("ratigueya");
    let inputLangostelvis = document.getElementById("langostelvis");
    let inputTucapalma = document.getElementById("tucapalma");
    let inputPydos = document.getElementById("pydos");
    let spanMascotaJugador = document.getElementById("mascota-jugador");
    let imgMascotaJugador = document.getElementById("img-mascota-jugador"); 
    

    // Validar si hay mascota seleccionada
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge";
        imgMascotaJugador.src = "./assets/mokepons_mokepon_hipodoge_attack.png";
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo";
        imgMascotaJugador.src = "./assets/mokepons_mokepon_capipepo_attack.png";
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya";
        imgMascotaJugador.src = "./assets/mokepons_mokepon_ratigueya_attack.png";
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = "Langostelvis";
        imgMascotaJugador.src = "./assets/mokepons_mokepon_langostelvis_attack.png";
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = "Tucapalma";
        imgMascotaJugador.src = "./assets/mokepons_mokepon_tucapalma_attack.png";
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = "Pydos";
        imgMascotaJugador.src = "./assets/mokepons_mokepon_pydos_attack.png";
    } else {
        alert("Selecciona una mascota");
        return; // ⛔ Detener función si no hay selección
    }

    // ✅ Mostrar ataque solo si hay una mascota válida
    sectionSeleccionarAtaque.style.display = "Flex";
    sectionSeleccionarMascota.style.display = "none";

    seleccionarMascotaEnemigo()
}

//Funcion seleccionar mascota enemigo
function seleccionarMascotaEnemigo() {
    let enemigoAleatorio = aleatorio(1, 3);
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
    let imgMascotaEnemigo = document.getElementById("img-mascota-enemigo");

    if (enemigoAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge";
        imgMascotaEnemigo.src = "./assets/mokepons_mokepon_hipodoge_attack.png";
    } else if (enemigoAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo";
        imgMascotaEnemigo.src = "./assets/mokepons_mokepon_capipepo_attack.png";
    } else if (enemigoAleatorio == 3) {
        spanMascotaEnemigo.innerHTML ="Ratigueya";
        imgMascotaEnemigo.src = "./assets/mokepons_mokepon_ratigueya_attack.png";
    } else {
        alert("Selecciona una mascota");
    }

}

//Funcion ataque de Fuego
function ataqueFuego() {
    ataqueJugador = "FUEGO 🔥";
    console.log(ataqueJugador);
    ataqueAleatorioEnemigo()
    //combate();
}

//Funcion ataque de Agua    
function ataqueAgua() {
    ataqueJugador = "AGUA 💧";
    console.log(ataqueJugador);
    ataqueAleatorioEnemigo()
}

//Funcion ataque de Tierra    
function ataqueTierra() {
    ataqueJugador = "TIERRA 🌱";
    console.log(ataqueJugador);
    ataqueAleatorioEnemigo()
}

//Funcion ataque de Aire    
function ataqueAire() {
    ataqueJugador = "AIRE 💨";
    console.log(ataqueJugador);
    ataqueAleatorioEnemigo()
}

//funcion ataque aleatorio
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 4);
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO 🔥";
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA 💧";
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "TIERRA 🌱";
    } else if (ataqueAleatorio == 4) {
        ataqueEnemigo = "AIRE 💨";
    }
    console.log(ataqueEnemigo);
    combate();
}

//Funcion combate
function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");

    // fuego le gana a aire 
    // agua le gana a fuego 
    // tierra le gana a agua
    // aire le gana a tierra   

    if (ataqueJugador == ataqueEnemigo) {
        resultado = "Empate ➖";
        resultado2 = "➖";
    } else if ((ataqueJugador == "FUEGO 🔥" && ataqueEnemigo == "AIRE 💨") || (ataqueJugador == "AGUA 💧" && ataqueEnemigo == "FUEGO 🔥") || (ataqueJugador == "TIERRA 🌱" && ataqueEnemigo == "AGUA 💧") || (ataqueJugador == "AIRE 💨" && ataqueEnemigo == "TIERRA 🌱")) {
        vidasEnemigo--; //Esto es lo mismo que vidasEnemigo = vidasEnemigo - 1  
        spanVidasEnemigo.innerHTML = vidasEnemigo;
        resultado = "Ganaste!! 🥳🎉🎊"; 
        resultado2 = "🎉";     
    }else {
        vidasJugador = vidasJugador - 1;
        spanVidasJugador.innerHTML = vidasJugador;
        resultado = "Perdiste 😭☠️🪦";
        resultado2 = "☠️";
    }
    crearMensaje(); 
    revisarVidas();
}

//Funcion revisar vidas
function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES GANASTE 🥳🎉🎊");
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento, PERDISTE 😭☠️🪦");
    }
}

//funcion para mensaje de combate
function crearMensaje() {
    let ataquesJugador = document.getElementById("ataques-jugador");
    let ataquesEnemigo = document.getElementById("ataques-enemigo");
    let resultadoAtaques = document.getElementById("resultado-ataques");
    let mensajes = document.getElementById("mensaje-final");

    let nuevoAtaqueJugador = document.createElement("p");
    let nuevoAtaqueEnemigo = document.createElement("p");
    let notificacion = document.createElement("p");

    nuevoAtaqueJugador.innerHTML =ataqueJugador;
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo;
    notificacion.innerHTML = resultado2;
    mensajes.innerHTML = resultado;

    ataquesJugador.appendChild(nuevoAtaqueJugador);
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo);
    resultadoAtaques.appendChild(notificacion);
}

function crearMensajeFinal(resultadoFinal) {
    //Variables
    let botonFuego = document.getElementById("boton-fuego");  
    let botonAgua = document.getElementById("boton-agua");
    let botonTierra = document.getElementById("boton-tierra");
    let botonAire = document.getElementById("boton-aire");
    let mensajes = document.getElementById("mensaje-final");
    let btnReiniciar = document.getElementById("boton-reiniciar");

    //mensaje final
    mensajes.innerHTML = resultadoFinal;
        
    //desactivar botones
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;
    botonAire.disabled = true;

    //mostrar el boton de reiniciar
    btnReiniciar.style.display = "block";
}

//funcion generadora de numeros aleatorios
function aleatorio(min, max) {
    return Math.floor(Math.random() * ( max - min + 1 ) + min);
 }     

//Funcion reiniciar juego
function reiniciarJuego() {
    window.location.reload();
}

//Event listener de carga del HTML
window.addEventListener("load", iniciarJuego) //Ejecuta la funcion iniciarJuego una vez se ha cargado TODO el HTML
