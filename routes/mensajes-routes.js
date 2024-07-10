// rutas/mensajes.js
const express = require("express");
const router = express.Router();
const mensajesController = require("../controladores/mensajesController");

// Ruta para visualizar los mensajes con Handlebars
router.get("/mensajes", mensajesController.getMensajes);
router.delete('/messages/:id', mensajesController.deleteMensaje);


router.route("/contacto")
    .get(mensajesController.getMensajes)
    .post(mensajesController.postMensaje);

// router.route("/contacto/:id")
//     .delete(mensajesController.deleteMensaje);

module.exports = router;
