// LECTURE FICHIER json

$.ajax({
    type: "GET",
    url: "pokemon.json",
    error:function(msg){
             // message en cas d'erreur :
             alert( "Error !: " + msg );
             },
    success:function(data){
          
// GENERER LES TYPES DANS LE SELECT HTML
           var tab=[];

             for(i=0; i< data.length; i++)
             {
                 var nbr =0;

                 for(j=0; j < data[i]["type"].length; j++)
               {
                   if(tab.length == 0)
                     {
                         tab.push(data[i]["type"][j]);
                     }
                     for(k=0; k < tab.length; k++)
                     {
                         if(tab[k] == data[i]["type"][j])
                         {
                             nbr++;
                         }
                     }
                     
                     if(nbr == 0)
                     {
                         tab.push(data[i]["type"][j]);
                     }		
               }  
             }

             for(p=0; p< tab.length; p++)
             {
                 $("#type").append("<option>"+tab[p]+"</option>");
             }
                         
             }
});     


$(document).ready(function(){
$("#button").click(function(){

    $.ajax({
    type: "GET",
    url: "pokemon.json",
    error:function(msg){
             // message en cas d'erreur :
             alert( "Error !: " + msg );
             },
    success:function(data){


       if($('#id').val() !="")	
       {
       
       
           // console.log(data[$('#id').val()-1]);
           var txt;
           
           
           for (var k in don = data[$('#id').val()-1]){

               if(k == "name")
               {
                   for (let [key, value] of Object.entries(data[$('#id').val()-1][k])) {
                         txt = txt + k + " : " +`${key}: ${value}`+ '<br/>';
                       }

               }
               else if(k == "base")
               {

                       for (let [key, value] of Object.entries(data[$('#id').val()-1][k])) {
                         txt = txt + k + " : " + `${key}: ${value}`+ '<br/>';
                       }

               }
               else
               {
                   if(typeof(txt) != "undefined")
                   {
                       txt = txt + k + ' : ' + don[k]+ '<br />';
                   }
                   else
                   {
                       txt = k + ' : ' + don[k]+ '<br />';
                   }	
               }
           }

           $("#result").remove();
           $("#site").append('<p id="result"></p>');
           $("#result").append(txt);
               
           
       }
       if($('#name').val() !="")	
       {
           var txt;	
           for(p=0; p< data.length; p++)
           {
               if(data[p]["name"]["french"]==$('#name').val() || data[p]["name"]["english"]==$('#name').val() )
               {
                   for(var k in don = data[p])
                   {
                       if(k == "name")
                   {
                   for (let [key, value] of Object.entries(data[p][k])) {
                         txt = txt + k + " : " +`${key}: ${value}`+ '<br/>';
                       }

                       }
                       else if(k == "base")
                       {

                               for (let [key, value] of Object.entries(data[p][k])) {
                                 txt = txt + k + " : " + `${key}: ${value}`+ '<br/>';
                               }
                       }
                       else
                       {
                           if(typeof(txt) != "undefined")
                           {
                               txt = txt + k + ' : ' + don[k]+ '<br />';
                           }
                           else
                           {
                               txt = k + ' : ' + don[k]+ '<br />';
                           }	
                       }
                   }
                   
               }
           }

           $("#result").remove();
           $("#site").append('<p id="result"></p>');
           $("#result").append(txt);
       }	

       if($('#type').val() !="")	
       {

           var txt;	
           for(p=0; p< data.length; p++)
           {
               if(data[p]["type"]==$('#type').val())
               {
                   for(var k in don = data[p])
                   {
                       if(k == "name")
                   {
                   for (let [key, value] of Object.entries(data[p][k])) {
                         txt = txt + k + " : " +`${key}: ${value}`+ '<br/>';
                       }

                       }
                       else if(k == "base")
                       {

                               for (let [key, value] of Object.entries(data[p][k])) {
                                 txt = txt + k + " : " + `${key}: ${value}`+ '<br/>';
                               }
                       }
                       else
                       {
                           if(typeof(txt) != "undefined")
                           {
                               txt = txt + k + ' : ' + don[k]+ '<br />';
                           }
                           else
                           {
                               txt = k + ' : ' + don[k]+ '<br />';
                           }	
                       }
                   }
               }
           
           }

           $("#result").remove();
           $("#site").append('<p id="result"></p>');
           $("#result").append(txt);
       }		
       }
   
   });
});
});