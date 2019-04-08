$(document).ready(function() {
    console.log("im ready");
    var random = Math.floor(Math.random() * 101 + 19);
    console.log(random)

    $(".randomNumber").text(random);

    var red = Math.floor(Math.random() * 11 + 1);
    var purple = Math.floor(Math.random() * 11 + 1);
    var green = Math.floor(Math.random() * 11 + 1);
    var blue = Math.floor(Math.random() * 11 + 1);
    var userTotal = 0
    var totalScore = 0
    var Wins = 0
    var Losses = 0

    console.log("red =" + red);    
    console.log("blue =" + blue);
    console.log("purple =" + purple);
    console.log("green =" + green);


    $("#numberWins").text(Wins);
    $("#numberLosses").text(Losses);

    function reset() {
         random = Math.floor(Math.random() * 101 + 19);
         red = Math.floor(Math.random() * 11 + 1);
         purple = Math.floor(Math.random() * 11 + 1);
         green = Math.floor(Math.random() * 11 + 1);
         blue = Math.floor(Math.random() * 11 + 1);
        totalScore = 0;
        $('#totalScore').text(userTotal);
    }
    function yay() {
        alert("You won!");
        Wins++;
        $('#numberWins').text(Wins);
       
    }
   

    function loser() {
        alert("You lose!");
        Losses++;
        $('#numberLosses').text(Losses);
        
        
    }

    $(".red").on ("click", function(){
        userTotal = userTotal + red;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').text(userTotal); 
        if (userTotal == random){
            yay();
            // reset();

          }
          else if ( userTotal > random){
            loser();
            // reset();
          }   
    }) 

    $("#blue").on ("click", function(){
        userTotal = userTotal + blue;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').text(userTotal); 
        if (userTotal == random){
            yay();
            // reset();
          }
          else if ( userTotal > random){
            loser();
            // reset();
          }   
    }) 
    
    $("#green").on ("click", function(){
        userTotal = userTotal + green;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').text(userTotal); 
        if (userTotal == random){
            yay();
            // reset();
          }
          else if ( userTotal > random){
            loser();
            // reset();
          }   
    })  

    $("#purple").on ("click", function(){
        userTotal = userTotal + purple;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').text(userTotal); 
        if (userTotal == random){
            yay();
          // reset();

          }
          else if ( userTotal > random){
            loser();
            // reset();

          }  
           
    }) 
    if (userTotal >= random){
             reset()
            } 
})