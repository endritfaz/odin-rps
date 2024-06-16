const ROCK = 0; 
const PAPER = 1; 
const SCISSORS = 2;

moves = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    return prompt("0 for ROCK\n1 for PAPER\n2 for SCISSORS")
}

let humanScore, computerScore = 0; 

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        console.log("Draw!");
    }

    else if ((computerChoice == ROCK && humanChoice == SCISSORS) ||
             (computerChoice == PAPER && humanChoice == ROCK) ||
             (computerChoice == SCISSORS && humanChoice == PAPER)) {
        console.log(`You lose! ${moves[computerChoice]} beats ${moves[humanChoice]}`);
        computerScore += 1;          
    }

    else {
        console.log(`You win! ${moves[humanChoice]} beats ${moves[computerChoice]}`);
        humanScore += 1;
    }      
}

function playGame() {
    let humanChoice, computerChoice;
    
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        playRound(computerChoice, humanChoice);
    }
}

playGame()
