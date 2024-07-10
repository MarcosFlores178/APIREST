// const express = require("express");
// const dotenv = require("dotenv");

// dotenv.config();
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(require('./rutas/mensajes'));

// const PORT = process.env.PORT || 3307;
// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en el puerto ${PORT}`);
// });

// module.exports = app;

const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
// const exphbs = require("express-handlebars");
const { engine } = require("express-handlebars");

dotenv.config();
const app = express();

// Configurar Handlebars como motor de plantillas
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');


// Configurar Handlebars como motor de plantillas
app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware para analizar cuerpos de solicitud POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta "views"
app.use(express.static(path.join(__dirname, 'views')));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Cargar el archivo de rutas
app.use(require('./routes/mensajes-routes'));

const PORT = process.env.PORT || 3307;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;

