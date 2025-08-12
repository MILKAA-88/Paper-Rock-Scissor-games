let win = 0; let loses = 0; 
const choices = ["papier", "caillou", "ciseaux" ];
const gameStatus = document.getElementById("gameStatus");
const gameScore = document.getElementById("gameScore");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");

paper.addEventListener("click", () => console.log("papier"));
rock.addEventListener("click", () => console.log("caillou"));
scissors.addEventListener("click", () => console.log("ciseaux"));