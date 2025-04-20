//Variables globales
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const btnReiniciar = document.getElementById("boton-reiniciar");
const botonMascota = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById("boton-reiniciar");
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
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
const contenedorTarjetas = document.getElementById("contener-tarjetas");
const contenedorAtaques = document.getElementById("contenedor-ataques");
const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");

let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let mascotaJugador; //para guardar el nombre de la mascota del jugador y usarlo para buscar y extraer sus ataques
let ataquesMokepon;
let ataquesMokeponEnemigo;
let botonFuego;  
let botonAgua;
let botonTierra;
let botonAire;
let botones = [];
let resultado;
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let resultado2 = [];
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 6;
let vidasEnemigo = 6;
let lienzo = mapa.getContext("2d"); 
let intervalo;
 
//Clase para crear un Mokepon
class Mokepon {
    constructor (nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
        this.x = 20; // initial position in X axis
        this.y = 30; // initial position in Y axis
        this.ancho = 50; // width of the character
        this.alto = 50; // height of the character
        this.mapaFoto = new Image();
        this.mapaFoto.src = foto;
    }
}

//Objetos mascotas
let hipodoge = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png", 6);
let capipepo = new Mokepon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.png", 6);
let ratigueya = new Mokepon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.png", 6);

//con el arreglo de ataques asignamos los ataques a cada mokepon, inyectando automaticamente la informacion de los ataques.
hipodoge.ataques.push(
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "💨", id: "boton-aire"},
);

capipepo.ataques.push(
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💨", id: "boton-aire"},
);

ratigueya.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "💨", id: "boton-aire"},
);

//push para añadir los mokepones
mokepones.push(hipodoge, capipepo, ratigueya); 

function iniciarJuego() {
    //ocular elementos
    sectionSeleccionarAtaque.style.display = "none";
    sectionVerMapa.style.display = "none";
    btnReiniciar.style.display = "none";

    //mokepones
    //for each es el metodo que nos permite iterar o recorrer cada uno de nuestros objetos dentro del arreglo
    mokepones.forEach((mokepon) => {
        //en opcionDeMokepones vamos a crear un template literario, que es una forma de crear un string dinamico, para poder implementar HTML mezclado con variables y se realiza con la comilla invertida ``
        opcionDeMokepones = `
            <div class="tarjeta-mascota">
                <label for=${mokepon.nombre}>
                    <input type="radio" name="mascota" id=${mokepon.nombre}>
                    <p>${mokepon.nombre}</p>
                    <img src=${mokepon.foto} alt=${mokepon.nombre}>
                </label>
            </div>
        `
        //Para que se muestre en el HTML de todas las mascotas se debe poner el + antes del igual en la siguiente linea
        contenedorTarjetas.innerHTML += opcionDeMokepones

        //aqui ya los elementos estaran en el HTML y los podemos ligar a la variable
        inputHipodoge = document.getElementById("Hipodoge");
        inputCapipepo = document.getElementById("Capipepo");
        inputRatigueya = document.getElementById("Ratigueya")
    })  

    // Limpiar la selección previa al iniciar el juego
    document.querySelectorAll('input[name="mascota"]').forEach(input => input.checked = false);

    
    //Event listeners
    botonMascota.addEventListener("click",seleccionarMascotaJugador); //El primer elemento es el evento que va a escuchar, y el segundo es la accion o funcion que se va a ejecutar
    botonReiniciar.addEventListener("click", reiniciarJuego);
}

//Funcion seleccionar Mascota
function seleccionarMascotaJugador() {
    // Validar si hay mascota seleccionada
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id;
        imgMascotaJugador.src = hipodoge.foto ;
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id;
        imgMascotaJugador.src = capipepo.foto;
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id;
        imgMascotaJugador.src = ratigueya.foto;
        mascotaJugador = inputRatigueya.id
    } else {
        alert("Selecciona una mascota");
        return; // ⛔ Detener función si no hay selección
    }

    // ✅ Mostrar ataque solo si hay una mascota válida
    sectionSeleccionarMascota.style.display = "none";
    //sectionSeleccionarAtaque.style.display = "Flex";
    sectionVerMapa.style.display = "flex"; 
    pintarPersonaje(mascotaJugador); 

    extraerAtaques(mascotaJugador);
    seleccionarMascotaEnemigo()
}

//funcion extraer ataques
function extraerAtaques(mascotaJugador) {

    //la siguiente funcion hace lo mismo que un forEach
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataquesMokepon = mokepones[i].ataques;
        }
    }
    
    mostrarAtaques(ataquesMokepon);

}

//funcion mostrar ataques
function mostrarAtaques(ataquesMokepon) {
    ataquesMokepon.forEach((ataque) => {
        contenedorAtaques.innerHTML += `
            <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
    })

    botonFuego = document.getElementById("boton-fuego");  
    botonAgua = document.getElementById("boton-agua");
    botonTierra = document.getElementById("boton-tierra");
    botonAire = document.getElementById("boton-aire");

    botones = document.querySelectorAll(".BAtaque");
}

//Funcion secuencia de ataques para activar todos! los botones de ataque
function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("FUEGO 🔥");
                boton.style.background = "#112f58"; 
                boton.disabled = true;
            } else if (e.target.textContent === "💧") {
                ataqueJugador.push("AGUA 💧");      
                boton.style.background = "#112f58"; 
                boton.disabled = true;
            }  else if (e.target.textContent === "🌱") {
                ataqueJugador.push("TIERRA 🌱");
                boton.style.background = "#112f58";
                boton.disabled = true;
            } else {
                ataqueJugador.push("AIRE 💨");
                boton.style.background = "#112f58";
                boton.disabled = true;
            }
            //console.log(ataqueJugador);
            ataqueAleatorioEnemigo() 
        })
    })
}

//Funcion seleccionar mascota enemigo
function seleccionarMascotaEnemigo() {
    let enemigoAleatorio = aleatorio(0, mokepones.length-1);

    spanMascotaEnemigo.innerHTML = mokepones[enemigoAleatorio].nombre;
    imgMascotaEnemigo.src = mokepones[enemigoAleatorio].foto;
    ataquesMokeponEnemigo = mokepones[enemigoAleatorio].ataques;
    secuenciaAtaque()
}

//funcion ataque aleatorio
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length-1);
    
    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push("FUEGO 🔥");
    } else if (ataqueAleatorio == 3 ||ataqueAleatorio == 4) {
        ataqueEnemigo.push("AGUA 💧");
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo.push("TIERRA 🌱");
    } else {
        ataqueEnemigo.push("AIRE 💨");
    }
    //console.log(ataqueEnemigo);
    iniciarPelea();
}

//funcion iniciar pelea
function iniciarPelea() {
    if (ataqueJugador.length === 6) {
        combate();
    }
}


function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador];    
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]; 
}

//Funcion combate
function combate() {
    // fuego le gana a aire 
    // agua le gana a fuego 
    // tierra le gana a agua
    // aire le gana a tierra   

    for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] === ataqueEnemigo[i]) {
            indexAmbosOponentes(i, i);
            resultado ="Empate ➖";
            resultado2 ="➖";
        } else if ((ataqueJugador[i] === "FUEGO 🔥" && ataqueEnemigo[i] === "AIRE 💨") || (ataqueJugador[i] === "AGUA 💧" && ataqueEnemigo[i] === "FUEGO 🔥") || (ataqueJugador[i] === "TIERRA 🌱" && ataqueEnemigo[i] === "AGUA 💧") || (ataqueJugador[i] === "AIRE 💨" && ataqueEnemigo[i] === "TIERRA 🌱")) {
            indexAmbosOponentes(i, i);
            vidasEnemigo--; //Esto es lo mismo que vidasEnemigo = vidasEnemigo - 1 
            victoriasJugador++; 
            spanVidasEnemigo.innerHTML = "❤️: " + vidasEnemigo + " 🎖️: " + victoriasEnemigo;
            spanVidasJugador.innerHTML = "❤️: " + vidasJugador  + " 🎖️: " + victoriasJugador;
            resultado = "Ganaste!! 🥳🎉🎊"; 
            resultado2 ="🎉";  
               
        } else {
            indexAmbosOponentes(i, i);
            vidasJugador = vidasJugador - 1;
            victoriasEnemigo++;
            spanVidasEnemigo.innerHTML = "❤️: " + vidasEnemigo + " 🎖️: " + victoriasEnemigo;
            spanVidasJugador.innerHTML = "❤️: " + vidasJugador  + " 🎖️: " + victoriasJugador;
            resultado = "Perdiste 😭☠️🪦";
            resultado2 = "☠️";
        }
        crearMensaje();
    }
    revisarVictorias();
}

//Funcion revisar vidas
function revisarVictorias() {
    if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES GANASTE 🥳🎉🎊");
    } else if (victoriasEnemigo > victoriasJugador) {
        crearMensajeFinal("Lo siento, PERDISTE 😭☠️🪦");
    } else {
        crearMensajeFinal("EMPATE ➖");
    }
}

//funcion para mensaje de combate
function crearMensaje() {
    let nuevoAtaqueJugador = document.createElement("p");
    let nuevoAtaqueEnemigo = document.createElement("p");
    let notificacion = document.createElement("p");

    nuevoAtaqueJugador.innerHTML =indexAtaqueJugador;
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo;
    notificacion.innerHTML = resultado2;
    mensajes.innerHTML = resultado;

    ataquesJugador.appendChild(nuevoAtaqueJugador);
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo);
    resultadoAtaques.appendChild(notificacion);
}

function crearMensajeFinal(resultadoFinal) {
    //mensaje final
    mensajes.innerHTML = resultadoFinal;
        
    //mostrar el boton de reiniciar
    btnReiniciar.style.display = "block";
}

//funcion generadora de numeros aleatorios
function aleatorio(min, max) {
    return Math.floor(Math.random() * ( max - min + 1 ) + min);
}    

//funcion para pintar mascotas
function pintarPersonaje() {
    //mascotaJugador
    lienzo.clearRect(0, 0, mapa.width, mapa.height); //limpia el lienzo
    lienzo.drawImage(
        capipepo.imagen,
        capipepo.x, 
        capipepo.y, 
        capipepo.ancho, 
        capipepo.alto
    );
}

function moverCapipepo() {
    capipepo.x = capipepo.x + 5;// mueve capipepo horizontalmente hacia la derecha
    pintarPersonaje();
}

//Funcion reiniciar juego
function reiniciarJuego() {
    window.location.reload();
}

//Event listener de carga del HTML
window.addEventListener("load", iniciarJuego) //Ejecuta la funcion iniciarJuego una vez se ha cargado TODO el HTML
