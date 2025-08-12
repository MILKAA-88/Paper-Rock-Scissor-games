let win = 0; let loses = 0; 
const choices = ["papier", "caillou", "ciseaux" ];
const gameStatus = document.getElementById("gameStatus");
const gameScore = document.getElementById("gameScore");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");

function runGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)]
  
  console.log(`M: ${userChoice} | C: ${computerChoice}`);
}



paper.addEventListener("click", () => runGame("papier"));
rock.addEventListener("click", () => runGame("caillou"));
scissors.addEventListener("click", () => runGame("ciseaux"));