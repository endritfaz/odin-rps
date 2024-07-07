const ROCK = 0; 
const PAPER = 1; 
const SCISSORS = 2;

moves = ['rock', 'paper', 'scissors'];

let humanScore = 0, computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const rockCallback = () => playRound(getComputerChoice(), ROCK);
const paperCallback = () => playRound(getComputerChoice(), PAPER);
const scissorsCallback = () => playRound(getComputerChoice(), SCISSORS);

const score = document.querySelector('.score')
const results = document.querySelector('.results');

const playAgainBtn = document.querySelector(".play-again-btn");

const humanChoiceDiv = document.querySelector("#human-move");
const computerChoiceDiv = document.querySelector("#computer-move");

function configureGame() {
    humanScore = 0;
    computerScore = 0; 
    displayScore();

    playAgainBtn.style.display = "none";
    computerChoiceDiv.style.borderColor = "black";
    humanChoiceDiv.style.borderColor = "black";

    playAgainBtn.addEventListener("click", () => configureGame());
    rock.addEventListener("click", rockCallback);
    paper.addEventListener("click", paperCallback);
    scissors.addEventListener("click", scissorsCallback);
}

// To remove an eventListener, a reference to the callback function is required
function loadEndScreen() {
    rock.removeEventListener("click", rockCallback);
    paper.removeEventListener("click", paperCallback);
    scissors.removeEventListener("click", scissorsCallback);

    playAgainBtn.style.display = "block";
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(computerChoice, humanChoice) {
    const result = document.createElement("p");

    if (computerChoice == humanChoice) {
        console.log("Draw");
        computerChoiceDiv.style.borderColor = "black";
        humanChoiceDiv.style.borderColor = "black";
    }

    else if ((computerChoice == ROCK && humanChoice == SCISSORS) ||
             (computerChoice == PAPER && humanChoice == ROCK) ||
             (computerChoice == SCISSORS && humanChoice == PAPER)) {
        console.log("Computer beats Human");
        computerChoiceDiv.style.borderColor = "#3CB371";
        humanChoiceDiv.style.borderColor = "#B22222";
        computerScore += 1;          
    }

    else {
        console.log("Human beats Computer");
        computerChoiceDiv.style.borderColor = "#B22222";
        humanChoiceDiv.style.borderColor = "#3CB371";
        humanScore += 1;
    }
    
    updateChoiceImages(humanChoice, computerChoice)
    displayScore()
    checkForWinner();  
}

function checkForWinner() { 
    if (humanScore == 5) {
        alert("You Win!");
    }

    else if (computerScore == 5) {
        alert("You lose!");
    }

    else {
        return;
    }

    loadEndScreen();
}

function displayScore() {
    const humanScoreDiv = document.querySelector("#human-score");
    const computerScoreDiv = document.querySelector("#computer-score");
    humanScoreDiv.textContent = humanScore;
    computerScoreDiv.textContent = computerScore;
}

function updateChoiceImages(humanChoice, computerChoice) {
    const humanChoiceImg = document.querySelector("#human-move");
    const computerChoiceImg = document.querySelector("#computer-move");

    let humanSrc = `images/${moves[humanChoice]}.jpg`;
    let computerSrc = `images/${moves[computerChoice]}.jpg`;

    humanChoiceImg.src = humanSrc;
    computerChoiceImg.src = computerSrc;
}

configureGame()

