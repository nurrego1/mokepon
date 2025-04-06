function iniciarJuego(){
    //Variables
    let botonMascota = document.getElementById("boton-mascota");
    let botonFuego = document.getElementById("boton-fuego");  
    
    
    //Event listeners
    botonMascota.addEventListener("click",seleccionarMascotaJugador); //El primer elemento es el evento que va a escuchar, y el segundo es la accion o funcion que se va a ejecutar
}

//Funcion seleccionar Mascota
function seleccionarMascotaJugador() {
    if (document.getElementById("hipodoge").checked) {
        console.log("Seleccionaste Hipodoge");
    } else if (document.getElementById("capipepo").checked) {
        console.log("Seleccionaste capipepo");
    } else if (document.getElementById("ratigueya").checked) {
        console.log("Seleccionaste ratigueya");
    } else if (document.getElementById("langostelvis").checked) {
        console.log("Seleccionaste langostelvis");
    } else if (document.getElementById("tucapalma").checked) {
        console.log("Seleccionaste tucapalma");
    } else if(document.getElementById("pydos").checked) {
        console.log("Seleccionaste pydos");
    } else {
        alert("Selecciona una mascota");
    }

    alert("Seleccionaste una mascota!!");

}

       

//Event listener de carga del HTML
window.addEventListener("load", iniciarJuego) //Ejecuta la funcion iniciarJuego una vez se ha cargado TODO el HTML
