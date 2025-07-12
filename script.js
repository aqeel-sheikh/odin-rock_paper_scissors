function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice].toLowerCase()
}

function getHumanChoice() {
    return prompt("Enter One: Rock, Paper or Scissor!").toLowerCase()
}

