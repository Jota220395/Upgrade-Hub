const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//TODO: validaciones de campos en BBDD. !!Obligatorios
let Usuario = new Schema({
    nombre:{
        type:String
    },
    email:{
        type:String
    },
    password: {
        type:String
    }
});

//como el export default pero para node
module.exports=mongoose.model('Usuario',Usuario)  //para el tipo usuario va a utilizar el esquema usuario
