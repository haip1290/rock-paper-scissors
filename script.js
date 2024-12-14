let computerScore = 0;
let humanScore = 0;

playGame();

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
      console.error("Invalid choice");
  }
}

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors: ").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(
      "\nDraw. Human chose " + humanChoice + " computer chose " + computerChoice
    );
    return;
  }
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "paper") {
        computerScore++;
        console.log("You lose! paper beats rock");
      } else {
        humanScore++;
        console.log("You won! rock beats scissors");
      }
      break;
    case "paper":
      if (computerChoice === "scissors") {
        computerScore++;
        console.log("You lose! scissors beats paper");
      } else {
        humanScore++;
        console.log("You won! paper beats rock");
      }
      break;
    case "scissors":
      if (computerChoice === "rock") {
        computerScore++;
        console.log("You lose! rock beats scissors");
      } else {
        humanScore++;
        console.log("You won! scissors beats paper");
      }
      break;
    default:
      console.error("Invalid choice");
  }
}

function playGame() {
  const numOfRound = 5;
  for (let index = 0; index < numOfRound; index++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
  }
  if (humanScore === computerScore) {
    console.log("Draw!");
  } else if (humanScore < computerScore) {
    console.log("You lost!");
  } else {
    console.log("You won!");
  }
  console.log("Computer Score: " + computerScore);
  console.log("Human Score: " + humanScore);
}
