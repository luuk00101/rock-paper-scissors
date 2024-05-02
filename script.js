function getStringChoice(choiceNumber) {
  let choiceString;

  switch (choiceNumber) {
    case 0:
      choiceString = "rock";
      break;
    case 1:
      choiceString = "paper";
      break;
    case 2:
      choiceString = "scissors";
      break;
  }

  return choiceString;
}

function getComputerChoice() {
  let choiceNumber = Math.floor(Math.random() * 3);

  return getStringChoice(choiceNumber);
}

function getHumanChoice() {
  return prompt("Input your selection: ").trim().toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
    return;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win!");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win!");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win!");
    humanScore++;
  } else {
    console.log(`You lose. `);
    computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
