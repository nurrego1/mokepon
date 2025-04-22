//para crear un nuevo codigo que use expressjs se debe importar primero una libreria

const express = require("express"); //Aqui cree una variable llamada express (con el mismo nombre de la libreria, para reconocerla) para almacenar la libreria, y con la funcion especial de nodeJS require se importa la libreria. require es una funcion que nos permite importar librerias que instalamos con npm

const app = express(); //Aqui creamos la variable app para almacenar la aplicacion, aqui lo que tengo que hacer es invocar a express como una funcion. De esta manera se crea una copi, una instancia de el servidor que voy a utilizar.

//creando lista de jugadores que se van a conectar a la pagina web o servidor.

const jugadores = []; //variable que contiene a todos los jugadores

//Una vez generado el ID en las funcion app.get, lo vamos a agregar a la lista de jugadores. pero para esto no vamos a agregar solo el ID. Lo que vamos a hacer es crear una clase que va a representar a cada uno de los jugadores.

class Jugador {
    constructor(id) {
        this.id = id;
    }
}

//ahora vamos a hacer que nuestra pagina en el frontend llame a un servidor en el backend, para que incremente el numero de jugadores o para que se registre ese jugador. y le devuelva su ID.

app.get("/unirse", (req, res) => { 
    const id = `${Math.random()}` //existen librerias para crear los IDs, pero aqui los vamos a crear aleatoriamente. con las comillas (conocidas como template strings) estamos convirtiendo el ID en texto, para seguir manejandolo como texto.

    //Aqui vamos a implementar que se cree  ese jugador.
    const jugador = new Jugador(id);

    //aqui vamos agregar el jugador a la lista de jugadores
    jugadores.push(jugador); //esta es la peticion para unirse

    //antes de responder el ID del jugador que acabamos de generar, vamos a agregar una cabecera, que es una informacion que tiene metadatos que los sistemas we utilizan para recibir informacion sobre configuraciones, que tipo de conexiones aceptan, etc.
    res.setHeader("Access-Control-Allow-Origin", "*"); //con * estamos habilitando todos los origenes, que es peligroso proque puede ser inseguro, pero lo estamos haciendo porque es la forma facil en este momento


    res.send(id);
});  //Aqui creamos una ruta que es la raiz de la pagina web, es decir, la primera pagina que se va a ver cuando se abre la pagina web. La raiz es la barra diagonal "/". La barra diagonal es el simbolo que se usa para indicar la raiz de la pagina web. La raiz es la primera pagina que se va a ver cuando se abre la pagina web.) res = respuesta al usuario y req = peticion del usuario.

app.listen(8080, () => {
    console.log("Servidor escuchando en el puerto 8080");
}); //para hacer que escuche las peticiones de los clientes (el navegador), que se mantenga escuchando por medio de un puerto, es lo que hay que indicarle una vez  este listo tenemos nuestro minimo codigo necesario. en este caso el puerto 8080. 

/* const http = require("http"); 
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public")); */
