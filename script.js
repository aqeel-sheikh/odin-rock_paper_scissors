function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice].toLowerCase()
}

function getHumanChoice() {
    return prompt("Enter One: Rock, Paper or Scissor!").toLowerCase()
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log("Tie: You both choose " + humanChoice)
    }
    else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissor") 
        || (humanChoice === "scissor" && computerChoice === "rock") ){
        
        console.log(`You Lose: ${computerChoice} beats ${humanChoice}`)
        computerScore += 1
    }
    else{
        console.log(`You Win: ${humanChoice} beats ${computerChoice}`)
        humanScore += 1
    }
}
