//para crear un nuevo codigo que use expressjs se debe importar primero una libreria

const express = require("express"); //Aqui cree una variable llamada express (con el mismo nombre de la libreria, para reconocerla) para almacenar la libreria, y con la funcion especial de nodeJS require se importa la libreria. require es una funcion que nos permite importar librerias que instalamos con npm

const app = express(); //Aqui creamos la variable app para almacenar la aplicacion, aqui lo que tengo que hacer es invocar a express como una funcion. De esta manera se crea una copi, una instancia de el servidor que voy a utilizar.

app.get("/", (req, res) => { 
    res.send("Hola Mundo");
});  //Aqui creamos una ruta que es la raiz de la pagina web, es decir, la primera pagina que se va a ver cuando se abre la pagina web. La raiz es la barra diagonal "/". La barra diagonal es el simbolo que se usa para indicar la raiz de la pagina web. La raiz es la primera pagina que se va a ver cuando se abre la pagina web.) res = respuesta al usuario y req = peticion del usuario.

app.listen(8080, () => {
    console.log("Servidor escuchando en el puerto 8080");
}); //para hacer que escuche las peticiones de los clientes (el navegador), que se mantenga escuchando por medio de un puerto, es lo que hay que indicarle una vez  este listo tenemos nuestro minimo codigo necesario. en este caso el puerto 8080. 

/* const http = require("http"); 
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public")); */
