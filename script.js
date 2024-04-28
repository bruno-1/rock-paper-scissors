let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = "";
  while (["rock", "paper", "scissors"].indexOf(String(choice).toLocaleLowerCase()) === -1)
    choice = prompt("Choose between rock, paper and scissors.");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  let currentComputerScore = computerScore;
  let currentHumanScore = humanScore;
  humanChoice = String(humanChoice).toLocaleLowerCase();

  if (humanChoice === computerChoice) {
    computerScore++;
    humanScore ++;
  };
  if (humanChoice === "rock") {
    if (computerChoice === "paper") computerScore++;
    if (computerChoice === "scissors") humanScore++;
  }
  if (humanChoice === "paper") {
    if (computerChoice === "rock") humanScore++;
    if (computerChoice === "scissors") computerScore++;
  }
  if (humanChoice === "scissors") {
    if (computerChoice === "rock") computerScore++;
    if (computerChoice === "paper") humanScore++;
  }

  if (currentHumanScore < humanScore && currentComputerScore < computerScore) {
    console.log("Tied!");
  } else {
    if (currentHumanScore < humanScore)
      console.log(
        "You win! " +
        String(humanChoice).charAt(0).toUpperCase() + String(humanChoice).slice(1).toLocaleLowerCase() +
        " beats " +
        String(computerChoice).charAt(0).toUpperCase() + String(computerChoice).slice(1).toLocaleLowerCase()
      );
    if (currentComputerScore < computerScore)
      console.log(
        "You lose! " +
        String(computerChoice).charAt(0).toUpperCase() + String(computerChoice).slice(1).toLocaleLowerCase() +
        " beats " +
        String(humanChoice).charAt(0).toUpperCase() + String(humanChoice).slice(1).toLocaleLowerCase()
      );
  }
}

function playGame() {
  for (let i = 0; i <= 4; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log(`Computer: ${computerScore} x You: ${humanScore}`);
}
playGame();