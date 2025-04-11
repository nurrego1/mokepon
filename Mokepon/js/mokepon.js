//Variables globales
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const btnReiniciar = document.getElementById("boton-reiniciar");
const botonMascota = document.getElementById("boton-mascota");
const botonFuego = document.getElementById("boton-fuego");  
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonAire = document.getElementById("boton-aire");
const botonReiniciar = document.getElementById("boton-reiniciar");
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
const inputHipodoge = document.getElementById("hipodoge");
const inputCapipepo = document.getElementById("capipepo");
const inputRatigueya = document.getElementById("ratigueya");
const spanMascotaJugador = document.getElementById("mascota-jugador");
const imgMascotaJugador = document.getElementById("img-mascota-jugador"); 
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");
const imgMascotaEnemigo = document.getElementById("img-mascota-enemigo");
const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");
const ataquesJugador = document.getElementById("ataques-jugador");
const ataquesEnemigo = document.getElementById("ataques-enemigo");
const resultadoAtaques = document.getElementById("resultado-ataques");
const mensajes = document.getElementById("mensaje-final");


let mokepones = [];
let ataqueJugador;
let ataqueEnemigo;
let resultado;
let resultado2;
let vidasJugador = 3;
let vidasEnemigo = 3;
 
//Clase para crear un Mokepon
class Mokepon {
    constructor (nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

//Objetos
let hipodoge = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png", 5);
let capipepo = new Mokepon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.png", 5);
let ratigueya = new Mokepon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.png", 5);

//push para añadir los mokepones
mokepones.push(hipodoge, capipepo, ratigueya); 

//con el arreglo de ataques asignamos los ataques a cada mokepon, inyectando automaticamente la informacion de los ataques.
hipodoge.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌱", id: "boton-tierra"},
);

capipepo.ataques.push(
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
);

ratigueya.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌱", id: "boton-tierra"},
);


function iniciarJuego(){
    //ocular elementos
    sectionSeleccionarAtaque.style.display = "none";
    btnReiniciar.style.display = "none";

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
