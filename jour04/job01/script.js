$(document).ready(function(){
	$("#button").click(function(){

       $.ajax({
         type: "GET",
         url: "expression.txt",
         error:function(msg){
                  // message si d'erreur :
                  alert( "Error !: " + msg );
                  },
         success:function(data){
                  // affiche le contenu du fichier dans le conteneur approprié :
                  $("#test").remove();
                  $("#site").append('<p id="test"></p>');
                  $("#test").text(data);
                  
                  }
         });

  });
});