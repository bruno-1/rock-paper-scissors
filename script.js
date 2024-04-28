let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
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

  const el = document.createElement("div");
  
  if (currentHumanScore < humanScore && currentComputerScore < computerScore) {
    el.textContent = "Tied!";
  } else {
    if (currentHumanScore < humanScore)
      el.textContent =
        "You win! " +
        String(humanChoice).charAt(0).toUpperCase() +
        String(humanChoice).slice(1).toLocaleLowerCase() +
        " beats " +
        String(computerChoice).charAt(0).toUpperCase() +
        String(computerChoice).slice(1).toLocaleLowerCase();
    if (currentComputerScore < computerScore)
      el.textContent =
        "You lose! " +
        String(computerChoice).charAt(0).toUpperCase() +
        String(computerChoice).slice(1).toLocaleLowerCase() +
        " beats " +
        String(humanChoice).charAt(0).toUpperCase() +
        String(humanChoice).slice(1).toLocaleLowerCase();
  }
  rounds++;

  document.querySelector("#results").appendChild(el);
  if (rounds === 5) {
    const elWinner = document.createElement("div");
    if (humanScore > computerScore) {
      elWinner.textContent =
        `Winner: You!`;
    } else if (humanScore < computerScore) {
      elWinner.textContent =
        `Winner: Computer!`;
    } else {
      elWinner.textContent =
      `Winner: Tied!`;
    }
    document.querySelector("#results").appendChild(elWinner);
    rounds = 0;
  }
}

function playerSelection(selection) {
  playRound(selection, getComputerChoice());
}

document.querySelector("#rock").addEventListener("click", (e) => {
  playerSelection("rock");
});

document.querySelector("#paper").addEventListener("click", (e) => {
  playerSelection("paper");
});

document.querySelector("#scissors").addEventListener("click", (e) => {
  playerSelection("scissors");
});