//para crear un nuevo codigo que use expressjs se debe importar primero una libreria

const express = require("express"); //libreria 
const cors = require("cors"); //libreria

const app = express();

app.use(cors()); //soluciona o desahilita los posibles errores relacionados con CORS
app.use(express.json()); //habilita la capacidad de recibir peticiones "post" que traigan contenido en formato JSON

//creando lista de jugadores que se van a conectar a la pagina web o servidor.

const jugadores = []; //esta es la lista de jugadores

//Una vez generado el ID en las funcion app.get, lo vamos a agregar a la lista de jugadores. pero para esto no vamos a agregar solo el ID. Lo que vamos a hacer es crear una clase que va a representar a cada uno de los jugadores.

class Jugador {
    constructor(id) {
        this.id = id;
    }

    asignarMokepon(mokepon) {
        this.mokepon = mokepon;
    }

    actualizarPosicion(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Mokepon {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

//ahora vamos a hacer que nuestra pagina en el frontend llame a un servidor en el backend, para que incremente el numero de jugadores o para que se registre ese jugador. y le devuelva su ID.

//peticion get
app.get("/unirse", (req, res) => { 
    const id = `${Math.random()}` 

    //Aqui vamos a implementar que se cree  ese jugador.
    const jugador = new Jugador(id);

    //aqui vamos agregar el jugador a la lista de jugadores
    jugadores.push(jugador); //esta es la peticion para unirse

    res.setHeader("Access-Control-Allow-Origin", "*"); 


    res.send(id);
}); 

//Peticion tipo post para el serivicio
app.post("/mokepon/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || "";
    const nombreMokepon = req.body.mokepon || "";
    const mokepon = new Mokepon(nombreMokepon);

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id);

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarMokepon(mokepon);
    }

    console.log(jugadores)
    console.log(jugadorId);
    res.end();
})

//Este endpoint es para recibir la informacion de la posicion del mokepon
app.post("/mokepon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || "";
    const x = req.body.x || 0;
    const y = req.body.y || 0;

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id);

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].actualizarPosicion(x, y);
    }

    res.end();
})


app.listen(8080, () => {
    console.log("Servidor escuchando en el puerto 8080");
}); //para hacer que escuche las peticiones de los clientes (el navegador), que se mantenga escuchando por medio de un puerto, es lo que hay que indicarle una vez  este listo tenemos nuestro minimo codigo necesario. en este caso el puerto 8080. 

/* const http = require("http"); 
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public")); */
