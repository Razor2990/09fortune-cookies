var colors = require("colors");
colors.setTheme(require("../config/config").colorTheme);
var fortune = require("./fortune");


// Agregamos el siguiente código para la conexión
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// Conectando la url para que nos brinde los docmentos
var url = 'mongodb://localhost:27017/fortuneapp';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Conectando con la Base de Datos de MongoDB");
  db.close();
});
////////////////////// Termino de Conexión de Mongo



// Creando el handler
// getfortune
var _crackTheCookie = function(req, res){
    console.log("> Cookie crash requested...".info);
    fortune.getFortune(function(fortunePaperObj){
        // Preparando encabezados para contestar
        // Json
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        // Respondiendo con el objeto
        res.end(fortunePaperObj);
    });
};

var _getAuthor = function(req, res){
    console.log("> Se solicito: Autor..".info);
    res.end("Author: Villagomez y Guerrero");
};
// Creando Objeto manejador
var handlers = {};

// Registrando manejadores
handlers["/crackthecookie"] = _crackTheCookie;
handlers["/getAuthor"] = _getAuthor;
/////////////// Añadiendo el manejador de handler para la BD

// Exportando objeto manejador
module.exports = handlers;
