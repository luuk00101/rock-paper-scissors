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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        console.log("It's a tie");
        return;
      } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win the round!");
        humanScore++;
      } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win the round!");
        humanScore++;
      } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win the round!");
        humanScore++;
      } else {
        console.log(`You lose the round.`);
        computerScore++;
      }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("You win the game! Congrats 🎉");
  } else {
    console.log("You lose (╯°□°)╯︵ ┻━┻");
    console.log("Justing kidding ┳━┳ ヽ(ಠل͜ಠ)ﾉ");
  }
}

playGame();
