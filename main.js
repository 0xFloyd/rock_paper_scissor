
const buttons = document.querySelectorAll('.buttons');
let paragraph = document.querySelectorAll('#result');
let resetButton = document.getElementById("reset");
resetButton.style.display = "none"

let computerScore = 0;
let playerScore = 0;
document.getElementById("score").innerHTML = "You: " + playerScore + " Computer: " + computerScore;

resetButton.addEventListener('click', resetGame);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
    });
    button.addEventListener('click', game);
});

let buttonsArray = document.getElementsByClassName('buttons');

function computerPlay() {
    let gameChoices = ["rock", "paper", "scissors"];
    let computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerSelection;
}

function checkScore() {
    if (playerScore == 5 || computerScore == 5) {
        resetButton.style.display = "block";

        for (var i=0; i<buttonsArray.length; i++) {
            buttonsArray[i].disabled = true;
        }
        
        document.getElementById("pAgain").innerHTML = "Click the button below to play again!";    

        if (playerScore == 5) {
            document.getElementById('result').innerHTML = "Game over! You beat the computer!";  
            
        }
        
        if (computerScore == 5) {
            document.getElementById("result").innerHTML = "Game over! The Computer beat you!"; 
            
        }
    }    

    else {
        return;
    }
}

function resetGame() {
    resetButton.style.display = "none"; 
    document.getElementById("pAgain").innerHTML = ""; 
    document.getElementById("result").innerHTML = "";
    computerScore = 0;
    playerScore = 0;
    document.getElementById("score").innerHTML = "You: " + playerScore + " Computer: " + computerScore;
    for (var i=0; i<buttonsArray.length; i++) {
        buttonsArray[i].disabled = false;
    }     
    return;
}
    

function game() {
    checkScore();
    resetButton.style.display === "none"
    let computer = computerPlay(); 
    let userChoice = playerSelection;

    if (userChoice === computer) {
        document.getElementById("result").innerHTML = "You selected " + userChoice + ". The computer selected " + computer + ".";
        checkScore();
    }

    else if (userChoice === "rock") {
        if (computer === "paper") {
            document.getElementById("result").innerHTML = "You selected " + userChoice + ". The computer selected " + computer + ".";
            computerScore = computerScore + 1;
            document.getElementById("score").innerHTML = "You: " + playerScore + " Computer: " + computerScore;
            checkScore();
        }

        else if (computer === "scissors") {
            document.getElementById("result").innerHTML = "You selected " + userChoice + ". The computer selected " + computer + ".";
            playerScore = playerScore + 1;
            document.getElementById("score").innerHTML = "You: " + playerScore + " Computer: " + computerScore;
            checkScore();
        }
    }
    else if (userChoice === "paper") {
        if (computer === "scissors") {
            document.getElementById("result").innerHTML = "You selected " + userChoice + ". The computer selected " + computer + ".";
            computerScore = computerScore + 1;
            document.getElementById("score").innerHTML = "You: " + playerScore + " Computer: " + computerScore;
            checkScore();
        }

        else if (computer === "rock") {
            document.getElementById("result").innerHTML = "You selected " + userChoice + ". The computer selected " + computer + ".";
            playerScore = playerScore + 1;
            document.getElementById("score").innerHTML = "You: " + playerScore + " Computer: " + computerScore;
            checkScore();
        }
    }

    else if (userChoice === "scissors") {
        if (computer === "rock") {
            document.getElementById("result").innerHTML = "You selected " + userChoice + ". The computer selected " + computer + ". Computer wins!";
            computerScore = computerScore + 1;
            document.getElementById("score").innerHTML = "You: " + playerScore + " Computer: " + computerScore;
            checkScore();
        }

        else if (computer === "paper") {
            document.getElementById("result").innerHTML = "You selected " + userChoice + ". The computer selected " + computer + ". You win!";
            playerScore = playerScore + 1;
            document.getElementById("score").innerHTML = "You: " + playerScore + " Computer: " + computerScore;
            checkScore();
        }
    }
}


