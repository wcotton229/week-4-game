
//======================================================================================================

$(document).ready(function () {
    
    var Random = Math.floor(Math.random() * 102 + 19)

    // Display random number
    $('#scoreToMatch').text(Random);

    //Generates random number for each crystal
    var crystal1 = Math.floor(Math.random() * 12 + 1)
    var crsytal2 = Math.floor(Math.random() * 12 + 1)
    var crsytal3 = Math.floor(Math.random() * 12 + 1)
    var crsytal4 = Math.floor(Math.random() * 12 + 1)

    // Variables to keep track of wins, losses and total
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    // Reset game
    function reset() {
        Random = Math.floor(Math.random() * 102 + 19);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        crystal1 = Math.floor(Math.random() * 12 + 1);
        crsytal2 = Math.floor(Math.random() * 12 + 1);
        crsytal3 = Math.floor(Math.random() * 12 + 1);
        crsytal4 = Math.floor(Math.random() * 12 + 1);
        playerTotal = 0;
        $('#totalScore').text(playerTotal);
    }
    // wins
    function win() {
        alert("Congrats! You won!");
        wins++;
        $('#wins').text(wins);
        reset();
    }
    // losses
    function loser() {
        alert("Sorry! You lose!");
        losses++;
        $('#losses').text(losses);
        reset()
    }
    // Clicking crystals
    $('.red').on('click', function () {
        playerTotal = playerTotal + crystal1;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);
        // conditions
        if (playerTotal == Random) {
            win();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })
    $('.blue').on('click', function () {
        playerTotal = playerTotal + crsytal2;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);
        if (playerTotal == Random) {
            win();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })
    $('.pink').on('click', function () {
        playerTotal = playerTotal + crsytal3;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);

        if (playerTotal == Random) {
            win();
        }
        else if (playerTotal > Random) {
            loser();
        }
    })
    $('.green').on('click', function () {
        playerTotal = playerTotal + crsytal4;
        console.log("New playerTotal= " + playerTotal);
        $('#totalScore').text(playerTotal);

        if (playerTotal == Random) {
            win();
        }
        else if (playerTotal > Random) {
            loser();
        }
    });
}); 