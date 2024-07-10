// controladores/mensajesController.js
const { connection } = require("../config.db");

// const getMensajes = (req, res) => {
//     connection.query("SELECT * FROM mensajes", (error, results) => {
//         if (error) throw error;
//         res.status(200).json(results);
//     });
// };


const getMensajes = (req, res) => {
    connection.query("SELECT * FROM mensajes", (error, results) => {
        if (error) throw error;

        if (req.header('Accept').includes('application/json')) {
            res.status(200).json(results);
        } else {
            res.render('mensajes', { messages: results });
        }
    });
};

const postMensaje = (req, res) => {
    const { nombre, apellido, email, mensaje } = req.body;
    connection.query(
        "INSERT INTO mensajes(nombre, apellido, email, mensaje) VALUES (?,?,?,?)",
        [nombre, apellido, email, mensaje],
        (error, results) => {
            if (error) throw error;
            res.status(201).json({ "Item añadido correctamente": results.affectedRows });
        }
    );
};

const deleteMensaje = (req, res) => {
    const id = req.params.id;
    connection.query("DELETE FROM mensajes WHERE id = ?", [id], (error, results) => {
        if (error) throw error;
        res.status(201).json({ "Item eliminado": results.affectedRows });
    });
};

module.exports = {
    getMensajes,
    postMensaje,
    deleteMensaje,
};
