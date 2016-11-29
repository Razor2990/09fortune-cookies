var mime = require("mime"),
    fs = require("fs");

// Exportando la funcionalidad del servidor
// Estatico
exports.serve = function(url, res){
    var filePath = './static' + url;
    console.log(`> Se servira Archivo: ${filePath}`.data);
    // Seleccionar el tipo mime
    var mimeType = mime.lookup(filePath);
    fs.readFile(filePath, 
    function(err, content){
        if(err){
            // Hubo error
            res.writeHead(500,{
                'Content-Type' : "text/html"
            });
            console.log('> Error en la lectura de'.error +
            'un archivo: ln20 server.js'.error);
            res.end("<h1>Error interno</h1>");
        }else{
            // No hubo error
            res.writeHead(200,{
                'Content-Type' : mimeType
            });
            console.log(`> Sirviendo: ${filePath}`.data);
            res.end(content);
        }
    });
};