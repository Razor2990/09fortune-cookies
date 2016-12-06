
var mongodb = require("mongodb");
// 2. Cargo al cliente de driver
var mongoClient = mongodb.MongoClient;

module.exports = {
    "getFortune" : function(cb){
        // Conectando el cliente a la base de datos fortune
        // var connectionString = 
        //mongoClient.connect("mongodb://127.0.0.1:27017/fortuneapps",
        mongoClient.connect("mongodb://erickharold:Viento2990@ds119718.mlab.com:19718/fortuneapps",
        function(err, db){
            if(err){
                console.log("> ERROR al conectarse a" +
                " la base de datos:"+
                " mongodb://@ds119718.mlab.com:19718/fortuneapps");
                var fortunePaper = {
                    "mensaje":
                    "en todo  tiempo ama el amigo"
                };
                // Convirtiendo el fortunePaper de objeto
                // a su version en string
                var respuesta = JSON.stringify(fortunePaper);
                
                // Ejecuto el callback (cb) pasandole
                // como parametro el fortunepaper string
                cb(respuesta);
            }else{
                // Obtengo la coleccion con la que quiero trabajar
                var papersCollection = 
                db.collection("papers");
                
                // Consulto todos los documentos de mi coleccion
                var objetoRestultado = 
                papersCollection.find({});

                // Parseo el objeto resultado en un arreglo
                objetoRestultado.toArray(function(err, papers){
                    // ARREGLO ALEATORIO
                    var randomIndex = 
                    Math.round(Math.random(0)* papers.length);
                    console.log("> RandomIndex calculated: " + randomIndex);
                    var fortunePaperResponse = 
                    JSON.stringify(papers[randomIndex]);
                    // Cerrar la conexion entre el cliente
                    // y la base de datos
                    db.close()
                    // Invoco al cb pasandole como parametro
                    // la respuesta
                    console.log("> La fortuna es: " + fortunePaperResponse);
                    cb(fortunePaperResponse);
                });
            }
        });
    }
};