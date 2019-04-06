$(document).ready(function() {
    console.log("im ready");
    var Random = Math.floor(Math.random() * 101 + 19);

    $('#randomNumber').text(Random);

    var red = Math.floor(Math.random() * 11 + 1);
    var purple = Math.floor(Math.random() * 11 + 1);
    var green = Math.floor(Math.random() * 11 + 1);
    var blue = Math.floor(Math.random() * 11 + 1);
    var userTotal = 0
    var totalScore = 0
    var wins = 0
    var loses = 0

    $("#numberWins").text(wins);
    $("#numberloses").text(loses);

    function reset() {
         Random = Math.floor(Math.random() * 101 + 19);
         red = Math.floor(Math.random() * 11 + 1);
         purple = Math.floor(Math.random() * 11 + 1);
         green = Math.floor(Math.random() * 11 + 1);
         blue = Math.floor(Math.random() * 11 + 1);
        totalScore = 0
        $('#totalScore').text(userTotal);
    }
    function yay() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }

    $(".red").on ("click", function(){
        userTotal = userTotal + red;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').text(userTotal); 
        if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }   
    }) 

    $("#blue").on ("click", function(){
        userTotal = userTotal + blue;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').text(userTotal); 
        if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }   
    }) 
    
    $("#green").on ("click", function(){
        userTotal = userTotal + green;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').text(userTotal); 
        if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  

    $("#purple").on ("click", function(){
        userTotal = userTotal + purple;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').text(userTotal); 
        if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
})