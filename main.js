
const buttons = document.querySelectorAll('.buttons');
let paragraph = document.querySelectorAll('#result');
document.getElementById("result").innerHTML = "Game hasn't started";
console.log("started script");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
    });
    button.addEventListener('click', game);
    console.log("addded event listener");
});

function computerPlay() {
    let gameChoices = ["rock", "paper", "scissors"];
    let computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    console.log("Computer selected");
    return computerSelection;
}

function game() {
    let computer = computerPlay(); 
    let userChoice = playerSelection;
    console.log("assigned computer and user choice");

    if (userChoice === computer) {
        document.getElementById("result").innerHTML = "You selected " + userChoice + ". The computer selected " + computer + ". It's a tie!";
        console.log("It's a tie");
    }

    else if (userChoice === "rock") {
        if (computer === "paper") {
            document.getElementById("result").innerHTML = "You selected " + userChoice + ". The computer selected " + computer + ". Computer wins!";
        console.log("User chose rock, computer paper");
        }

        else if (computer === "scissors") {
            document.getElementById("result").innerHTML = "You selected " + userChoice + ". The computer selected " + computer + ". You win!";
        }
    }
    else if (userChoice === "paper") {
        if (computer === "scissors") {
            document.getElementById("result").innerHTML = "You selected " + userChoice + ". The computer selected " + computer + ". Computer wins!";
        }

        else if (computer === "rock") {
            document.getElementById("result").innerHTML = "You selected " + userChoice + ". The computer selected " + computer + ". You win!";
        }
    }

    else if (userChoice === "scissors") {
        if (computer === "rock") {
            document.getElementById("result").innerHTML = "You selected " + userChoice + ". The computer selected " + computer + ". Computer wins!";
        }

        else if (computer === "paper") {
            document.getElementById("result").innerHTML = "You selected " + userChoice + ". The computer selected " + computer + ". You win!";
        }
    }
}

