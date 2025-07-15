function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice].toLowerCase()
}

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")

const results = document.querySelector(".results")
const currentResult = document.querySelector(".result")
const finalResult = document.querySelector(".anouncement")

const hScore = document.querySelector("#humanScore")
const cScore = document.querySelector("#compScore")


function playGame() {
    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice())
    })
    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice())
    })
    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice())
    })
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        currentResult.textContent = "Tie: You both choose " + humanChoice
        results.appendChild(currentResult)
    }
    else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {

        currentResult.textContent = `You Lose: ${computerChoice} beats ${humanChoice}`
        computerScore += 1
        cScore.textContent = computerScore
    }
    else {
        currentResult.textContent = `You Win: ${humanChoice} beats ${computerChoice}`
        humanScore += 1
        hScore.textContent = humanScore
    }
    if (humanScore == 5 || computerScore == 5) {
        finalResult.textContent = (humanScore > computerScore) ? `You Won! by ${humanScore - computerScore} point(s)`
            : `Computer Won! by ${computerScore - humanScore} point(s)`
        
        hScore.textContent = 0
        cScore.textContent = 0
        
        humanScore = 0
        computerScore = 0
    }

}

playGame()
