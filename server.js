// Importando dependencias
var http = require('http');
var fs = require('fs');
var mime = require('mime');
var colors = require('colors');
var staticServer = require("./internals/static-server");
// Importando el objeto configurador
var config = require('./config/config');
// Importando manejadores
var handlers = require("./internals/handlers");

// Estableciendo Tema de colores
colors.setTheme(config.colorTheme);
// Importando configuraciones
var IP = config.IP,
    PORT = config.PORT;

// Codigo del Server
var server = http.createServer(function(req, res){
    var url = req.url;
    console.log(`> Recurso Solicitado: ${url}`.data);
    if(url === "/"){
        url = '/index.html'
    }
    // Verficando si la url esta
    // asociada a una accion
    // que puede hacer el server
    if(typeof(handlers[url]) === "function"){
        // Si existe una funcion en hanlders llamada
        // como el contenido de la variable "url"
        handlers[url](req, res);
    }else{
        // No se encontro un manejador para la url
        // solicitada por el usuario
        // se intentara servir de manera estatica
        staticServer.serve(url, res);
    }
});

server.listen(PORT, IP, function(){
    console.log(`> Server corriendo en http://${IP}:${PORT} ...`.info);
});


////////////////////////////////////////////// sudo apt-get install -y mongodb-org
