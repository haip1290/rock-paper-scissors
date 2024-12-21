let computerScore = 0;
let humanScore = 0;
let numOfRound = 0;
let limit = 5;

let result = document.querySelector("#result");
let computerChoiceDisplay = document.querySelector("#computer-choice");
let humanChoiceDisplay = document.querySelector("#human-choice");
let humanScoreDisplay = document.querySelector("#human-score");
let computerScoreDisplay = document.querySelector("#computer-score");
let numOfRoundDisplay = document.querySelector("#num-of-round");
let errorMsg = document.querySelector("#errorMsg");

let btns = document.querySelectorAll("button");
btns.forEach((button) => {
  button.addEventListener("click", playGame);
});
displayScore();

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      errorMsg.textContent = "Invalid choice";
  }
}

function displayScore() {
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
  numOfRoundDisplay.textContent = numOfRound;
}

function playRound(humanChoice, computerChoice) {
  // update choice display
  computerChoiceDisplay.textContent = "computer choose " + computerChoice;
  humanChoiceDisplay.textContent = "human choose " + humanChoice;
  // handle draw
  if (humanChoice === computerChoice) {
    result.textContent =
      "\nDraw. Human chose " +
      humanChoice +
      " computer chose " +
      computerChoice;
    numOfRound++;
    return;
  }
  // get winnning combination
  let winningCombinations = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  // resolve game base on choices
  if (winningCombinations[humanChoice] === computerChoice) {
    humanScore++;
    result.textContent = "You won! " + humanChoice + " beats " + computerChoice;
  } else {
    computerScore++;
    result.textContent =
      "You lost! " + computerChoice + " beats " + humanChoice;
  }

  // update score
  numOfRound++;
  checkScore();
}

function playGame(event) {
  if (humanScore < limit && computerScore < limit) {
    let humanChoice = event.target.id;
    playRound(humanChoice, getComputerChoice());
  } else {
    displayResult();
    errorMsg.textContent = "Number of games reached " + numOfRound;
  }
  displayScore();
}

function checkScore() {
  if (humanScore === 5 || computerScore === 5) {
    displayResult();
  }
}

function displayResult() {
  const scoreMsg = humanScore + " to " + computerScore;
  if (humanScore > computerScore) {
    result.textContent = "You won " + scoreMsg;
  } else if (humanScore === computerScore) {
    result.textContent = "Draw " + scoreMsg;
  } else {
    result.textContent = "You lost " + scoreMsg;
  }
}
