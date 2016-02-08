////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    console.log("Please choose 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var playerMove;
var computerMove;

function getPlayerMove(move) {
    var move = getInput();
    if (move === null) {
        getInput();
    } else {
        console.log("player chooses " + move);
        playerMove = move;
        getComputerMove();
    }
}

function getComputerMove(move) {
    var Move = randomPlay();
     if (move === null || 0) {
        randomPlay();
    } else {
        console.log("computer chooses " + move);
        computerMove = move;
        getWinner(playerMove, computerMove);
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    return winner;
    if (playerMove === computerMove) {
        winner = "tie";
        console.log("You tied!")
        return winner;
    }
    else if (playerMove === "rock") {
        if (computerMove === "paper")
        winner = "computer";
        } else {
            winner = "player";
        }
    else if (playerMove === "paper" {
        if (computerMove === "rock") {
            winner = "player";
        } else {
            winner = "computer";
        }
    else if (playerMove === "scissor") {
        if (computerMove === "rock") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else {
        getInput();


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for (var i=0; i<25; i++) {
        if (playerWins === 5 || computerWins ===5) {
            console.log("FINAL SCORE: Player Wins : " + playerWins + " Computer Wins : " + computerwins);
            break;
        }
        else
        {
            if (winner === "player")
            {
            playerWins ++;
            console.log("Player Wins : " + playerWins + " Computer Wins : " + computerWins);
            }
            else if (winner === "computer")
            {
            computerWins ++;
            console.log("Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
            }
        getPlayerMove();
        }
    }
}
