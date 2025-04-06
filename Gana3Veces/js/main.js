//Generandor de numeros aleatorios
function aleatorio(min, max) {
    return Math.floor(Math.random() * ( max - min + 1 ) + min);
 }

 //Mostrar eleccion por usuario y pc
 function eleccion(jugada) {
     let resultado = "";

     if (jugada == 1) {
         resultado = "Piedra 🪨";
     } else if (jugada == 2) {
         resultado = "Papel 📄";
     } else if (jugada == 3) {
         resultado = "Tijera ✂️";
     } else {
         resultado = "Mal! 😰 Elige entre 1, 2 o 3.";
     }

     return resultado;
 }

 //1 es Piedra, 2 es Papel, 3 es Tijera
 let jugador = 0;
 let PC = 0;
 let triunfos = 0; //Estos son los triunfos del jugador
 let perdidas = 0; //estas son las perdidas del jugador
 let empates = 0;

 while (triunfos < 3 && perdidas < 3) {
     PC = aleatorio(1, 3);
     jugador = prompt("Elige: 1 para piedra 🪨, 2 para papel 📄 o 3 para tijera ✂️");

     //Display de elecciones
     alert("PC elige: " + eleccion(PC));
     alert("Tú eliges: " + eleccion(jugador));

     //COMBATE
     if (jugador == PC) {
         empates = empates + 1;
         alert("EMPATE");
     } else if ((jugador == 1 && PC == 3) || (jugador == 2 && PC == 1) || (jugador == 3 && PC == 2)) {
         triunfos = triunfos + 1;
         alert("GANASTE! 🥳🎉🎊🎈🎖️");
     } else {
         perdidas = perdidas + 1;
         alert("PERDISTE! 😥😭");
     }
 }

 alert("Ganaste: " + triunfos + " veces, perdiste: " + perdidas + " veces y empataste: " + empates + " veces.");
 if (triunfos == 3) {
     alert("Felicidades! Ganaste el juego! 🎉🎊🥳");
 } else {
     alert("Lo siento, perdiste el juego. 😥😭");
 }