var mongodb = require('mongodb');
// Extraemos el cliente
var mongoClient = mongodb.MongoClient;

var connectionUrl = 'mongodb://erickharold:Viento2990@ds119718.mlab.com:19718/fortuneapps'

mongoClient.connect(connectionUrl, function(err, db){
    // Verificando qie si conecto
    if(err){
    console.log("> No se pudo conectar a la base de datos...");
    throw err;
    }
    // Si llega aqupí es que no hubo problema de conexión
    var papers = db.collection('papers');
    // Armando documrnto
    var mensaje = "";
    for(var i = 2; i < process.argv.length; i++){
        mensaje += (process.argv[i] + " ");
    }
    // Mensaje recatado de los argumentos
    console.log(`> Mensaje rescatado: ${mensaje}`);
    
    // Insertando alppgo a la colección
    papers.insert({
        "message" : mensaje
    },function(err, res){
        if(err){
            console.log("> No se pudo inserta el documento");
            db.close();
            throw err;
        }
        // Si llega aauí si pudo insertar
        console.log(`> Resultado de la inserción: ${JSON.stringify(res)}`);
        db.close();
    });
});