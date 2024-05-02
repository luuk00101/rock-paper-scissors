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
  let choiceNumber = Number(prompt("Input a number between 0-2 included:"));

  if (!(0 <= choiceNumber && choiceNumber <= 2)) {
    return "You must input a number between 0-2 included.";
  }

  return getStringChoice(choiceNumber);
}
