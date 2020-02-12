const express = require('express');
const bodyParser = require('body-parser');
//TODO: importar y usar modulo middle-ware CORS
const cors = require('cors');
const mongoose = require('mongoose');
const Usuario = require('./modelo');
const app = express();
const PORT = 4000; //las mayusc son constantes k van a perdurar siempre en el tiempo

//Software intermediario para la serializacion y deserializacion (parseo) automatica
app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/db_usuarios');
const conexion = mongoose.connection;

conexion.once("open",function(){
    console.log("1) - bibah nos hemos conectado a mongoose")
})

app.listen(PORT,
    function(){
        console.log("0) - servidor ejecutandose en " + PORT)
    });

const rutasAPI = express.Router();
//y ese obj va a hacer de intermediario en url /api/usuarios
app.use("/api/usuarios", rutasAPI);

//http://127.0.0.1:4000/api/usuarios/registro
function recibirRegistroPost(peticionHttp, respuestaHttp){
    //deberiamos recibir un JSON con el nuevo usuario
    //asike creamos un obj Shema y le pasamos el JSON ya 
    //convertido en obj javascript gracias al bodyparse
    let nuevoUsuario = new Usuario( peticionHttp.body );
    let promesaDeGuardado = nuevoUsuario.save();

    promesaDeGuardado.then(usuario=>{
        console.log("4) - Se ha registrado en BBDD");
        respuestaHttp.status(200).json({
            "usuario": "Creado satisfactoriamente"
        })
    });
    promesaDeGuardado.catch( error => {
        respuestaHttp.status(400).send("El registro ha fallado");
    });
    console.log("3) - la petición HTTP ha sido procesada");
}

rutasAPI.route("/registro").post(recibirRegistroPost);
rutasAPI.route("/").get(function(reqPeticionHttp, resRespuestaHttp){
    //con esto invoca a la query db.usuarios.find()
    Usuario.find(function (err, coleccionUsuarios) { //Cuando hayas encontrado todo, ejecuta esta función
        if(err){
            console.log(err);
        } else {
            //Pedimos devolver la coleccion en formato JSON
            resRespuestaHttp.json(coleccionUsuarios);
        }
    });
});


