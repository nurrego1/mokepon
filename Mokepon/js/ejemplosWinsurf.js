//AQUI VAN CODIGOS PRUESTOS QUE QUIERO ANALIZAR DESPUES

//funcion extraer ataques
function extraerAtaques(mascotaJugador) {
    let ataquesMokepon = mokepones.find((mokepon) => mokepon.id === mascotaJugador);
    console.log(ataquesMokepon.ataques);
    ataquesMokepon.ataques.forEach((ataque) => {
        ataquesJugador.innerHTML += `
            <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
    })
}