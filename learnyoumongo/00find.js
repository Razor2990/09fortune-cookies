// Cargando el paquete mongodb
var mongo_client = require("mongodb");
// Extrayendo el cliente que
// trae el paquete
var client = mongodb.MongoClient;

// 1. ¿A donde me voy a conectar?
// R. url de conexión
var url = 'mongodb://localhost:27017/learnyoumongo'

// 2.Conectando al Cliente
client.connect(url, function(err, db){
    //Verificar si hubo un error
    if(err){
        console.log("> Error en la conexión");
        throw err;
    }
    // Extrayendo la collecciín de trabajo
    var collection = db.collection("parrots");
    // Rescatando el primer argumento
    var firstArg = process.argv[2];
    // Aplicando una operación sobre 
    // la coleccción de trabajo
    collection.find({
       age : { $gt : +firstArg} 
    }).toArray(function(err, documents){
        // Transformando la Consulta en
        // un arreglo
        if(err)
        console.log("> Error al convertir la consulta");
    });
    console.log(documents);
    db.close();
});