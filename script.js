function getComputerChoice() {
  let choiceNumber = Math.floor(Math.random() * 3);
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

function playRound(humanChoice, computerChoice) {
  // -1 = tie, 0 = player, 1 = computer
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
    return -1;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win the round!");
    return 0;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win the round!");
    return 0;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win the round!");
    return 0;
  } else {
    console.log(`You lose the round.`);
    return 1;
  }
}

const humanScorePara = document.querySelector("#player-score");
const computerScorePara = document.querySelector("#computer-score");
let resultPara = null;

let humanScoreCounter = 0;
let computerScoreCounter = 0;

function updateUI() {
  humanScorePara.textContent = `Human score: ${humanScoreCounter}`;
  computerScorePara.textContent = `Computer score: ${computerScoreCounter}`;
}

function updateScore(result) {
  if (result === 0) humanScoreCounter++;
  else if (result === 1) computerScoreCounter++;

  updateUI();
}

function announceWinner() {
  resultPara = document.createElement("p");

  if (humanScoreCounter > computerScoreCounter) {
    resultPara.textContent = "You win the game! Congrats 🎉";
  } else {
    resultPara.textContent = "You lose!";
  }

  document.body.appendChild(resultPara);
}

const buttonWrapper = document.querySelector("#button-wrapper");
buttonWrapper.addEventListener("click", (event) => {
  if (humanScoreCounter < 5 && computerScoreCounter < 5) {
    let choice = event.target.id;
    let result = playRound(choice, getComputerChoice());

    updateScore(result);
  }
  if (
    (humanScoreCounter === 5 || computerScoreCounter === 5) &&
    resultPara === null
  )
    announceWinner();
});

function restartScore() {
  humanScoreCounter = 0;
  computerScoreCounter = 0;

  updateUI();

  if (resultPara !== null) {
    resultPara.remove();
    resultPara = null;
  }
}

const restartButton = document.querySelector("#restart");
restartButton.addEventListener("click", restartScore);
