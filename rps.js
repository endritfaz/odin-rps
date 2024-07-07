const ROCK = 0; 
const PAPER = 1; 
const SCISSORS = 2;

moves = ['Rock', 'Paper', 'Scissors'];

let humanScore = 0, computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const rockCallback = () => playRound(getComputerChoice(), ROCK);
const paperCallback = () => playRound(getComputerChoice(), PAPER);
const scissorsCallback = () => playRound(getComputerChoice(), SCISSORS);

const score = document.querySelector('#score')
const results = document.querySelector('#results');

const playAgainBtn = document.querySelector("#playAgainBtn");

function configureGame() {
    humanScore = 0;
    computerScore = 0; 
    results.textContent = "";
    displayScore();

    playAgainBtn.style.display = "none";

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

    // TODO: Grey out the RPS buttons 

    // TODO: Add a play again button
    playAgainBtn.style.display = "block";
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(computerChoice, humanChoice) {
    results.textContent = "";
    const result = document.createElement("p");

    if (computerChoice == humanChoice) {
        result.textContent = "Draw!";
    }

    else if ((computerChoice == ROCK && humanChoice == SCISSORS) ||
             (computerChoice == PAPER && humanChoice == ROCK) ||
             (computerChoice == SCISSORS && humanChoice == PAPER)) {
        result.textContent = `You lose! ${moves[computerChoice]} beats ${moves[humanChoice]}`;
        computerScore += 1;          
    }

    else {
        result.textContent = `You win! ${moves[humanChoice]} beats ${moves[computerChoice]}`;
        humanScore += 1;
    }
    results.appendChild(result);
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
    score.textContent = `${humanScore} : ${computerScore}`;
}

configureGame()

