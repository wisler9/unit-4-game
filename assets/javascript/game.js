

// JavaScript function that wraps everything
$(document).ready(function () {
    // At the start of the game a random number will be initiated

    // There are 4 crystals, clicking on a crystal will a specific amount of points to the total score.

    // The value of each crystal is hidden until it's clicked on

    // You win the game by matching the total score  to the random number.

    // You loose the game if the total score is bigger than the random number.

    // Each time the game starts, a new random number for will be generated 

    // New random number for the crystals.


    var randomNum = 0;
    var wins = 0;
    var loose = 0;
    var score = 0;
    var cryst = 0;
    var totalScore = 0;
    var button1 = Math.floor(Math.random() * 12) +1; // parseInt($("#button-1").val());
    var button2 = Math.floor(Math.random() * 12) +1; // parseInt($("#button-2").val());;
    var button3 = Math.floor(Math.random() * 12) +1; // parseInt($("#button-3").val());;
    var button4 = Math.floor(Math.random() * 12) +1; // parseInt($("#button-4").val());;

    randomNum = Math.floor(Math.random() * 120); 
        if (randomNum < 19) {
            var comp = randomNum ;
            console.log(randomNum);
    };
    $("#random-Number").text(randomNum);

    if (score === randomNum) {
        score++;
        $("#wins-Text").text(score);
    }
    else if (score > randomNum) {
        loose++;
        $("#loses-Text").text(loose);
    };

    

    $(".crystal").on("click", function(event) {
        // console.log(this.value);
        if ($(this).val() === "1") {
            totalScore += button1;
            $("#score-Text").text(totalScore);
        } 
        else if ($(this).val() === "2") {
            totalScore += button2;
            $("#score-Text").text(totalScore);
        } 
        else if ($(this).val() === "3") {
            totalScore += button3;
            $("#score-Text").text(totalScore);
        } 
        else if ($(this).val() === "4") {
            totalScore += button4;
            $("#score-Text").text(totalScore);
        } 

        if ( randomNum === totalScore) {
            wins++;
            gameReset();
        }
        
        if ( totalScore > randomNum) {
            loose++;
            gameReset();
        }
        // var pressedButton = event.key;
        // button1 = 2;
        // totalScore = $(this).val() + button1;
        // console.log(totalScore)
        // cryst = Math.floor(Math.random() * 12);
        // if(cryst === $("") )
        console.log(totalScore);
        $("#wins-Text").text(wins);
    $("#loses-Text").text(loose);


    });
    $("#score-Text").text(totalScore);
    $("#wins-Text").text("Wins: " + wins);
    $("#loses-Text").text("Loses: " + loose);
    // score = $("#")

    

    function gameReset() {
        totalScore = 0;
        randomNum = Math.floor(Math.random() * 120);
        button1 = Math.floor(Math.random() * 12) + 1;
        button2 = Math.floor(Math.random() * 12) + 1; 
        button3 = Math.floor(Math.random() * 12) + 1; 
        button4 = Math.floor(Math.random() * 12) + 1;
        $("#score-Text").text(totalScore);
        $("#random-Number").text(randomNum);
    }


});


