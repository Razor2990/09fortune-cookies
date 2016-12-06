function saludar(){
   swal({
  title: 'Sweet!',
  text: 'Modal with a custom image.',
  imageUrl: './css/favicon.png',
  imageWidth: 400,
  imageHeight: 200,
  animation: false
})
           
        }
            function getFortuneFromServer(){
            //realizando una peticion de asincrona con ajax y asistida en jquery
            $.get("/getacookie","",function(cookie, status){
                //contenido del colback
                console.log('> status ' + status);
                //presentar el mensaje 
                swal(cookie.message);
            },"json");
        }