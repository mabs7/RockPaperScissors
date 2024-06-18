let computerChoice;
let humanChoice;
function getComputerChoice () {
  // return Math.floor(Math.random() * 3);
  if (Math.floor(Math.random() *3) === 0 ) {
    computerChoice = "rock";
  }
  else if (Math.floor(Math.random() * 3) === 1) {
    computerChoice = "paper";
  }
  else {
    computerChoice = "scissors"
  }
}
function getHumanChoice () {
  humanChoice = prompt ("What is your choice");
  if (humanChoice.toLowerCase() === "rock") {
    humanChoice = "rock"
  }
  else if (humanChoice.toLowerCase() === "paper") {
    humanChoice = "paper"
  }
  else if (humanChoice.toLowerCase() === "scissors") {
    humanChoice = "scissors"
  }
  else {
    prompt("enter a proper word ie: Rock, papaer or Scissor:")
  }
}
let humanScore = 0;
let computerScore = 0;

function playRound () {
  if ((humanChoice == "rock" && computerChoice == "paper") ||(humanChoice == "paper" && computerChoice =="scissors") || (humanChoice == "scissors" && computerChoice =="rock")){
    alert ("you loose");
    computerScore++;
  }
  else if ((humanChoice == "scissors" && computerChoice =="paper") || (humanChoice == "rock" && computerChoice =="scissors") || (humanChoice == "paper" && computerChoice =="rock")){
    alert ("You win");
    humanScore++;
  }
  else 
   {
    alert("You and compter choose the same thing!! Chosse again...");
  }
}
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


function playGame () {
  for (let i = 0; i <= 5; i++) {
    playRound (humanSelection, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
  }
}
playGame();
