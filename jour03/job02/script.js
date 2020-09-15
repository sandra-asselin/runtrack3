function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
   
    while (0 !== currentIndex) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
 
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  
  
  
  $(document).ready(function(){
      $("#button").click(function(){
  
          
          
      var arr = [1, 2, 3, 4, 5, 6];
    var arr2=[];
    var nbr=0;
    var arr_nonmelange= [1, 2, 3, 4, 5, 6];
      shuffle(arr);
  
      for(i=0; i < arr.length; i++)
      {
        $("#" +arr[i]).prependTo("#melange");
      }
  
  
      $("img").click(function() {
            $(this).appendTo("#rangee");
  
         arr2.push($(this).attr('id') );
  
         if(arr2.length==6)
         {
            for(i=0; i < arr2.length; i++)
            {
              if(arr2[i]== arr_nonmelange[i])
              {
                nbr++;
              }
            }
            if(nbr == 6)
            {
              $("h1").remove();
              $("#site").prepend('<h1>Youpiii!</h1>');
              $( "h1" ).css('text-align', 'center');
              $( "h1" ).css('color', 'greenyellow');
            }
            else
            {
               $("h1").remove();
              $("#site").prepend('<h1>Try again</h1>');
              $( "h1" ).css('text-align', 'center');
              $( "h1" ).css('color', 'firebrick');
              
              
            }
         }
  
      
  });
    
  
          
  }); 
  
    $("#button2").click(function(){
  
        location.reload();
    });
   
  });
  