function getComputerChoice () {
  // return Math.floor(Math.random() * 3);
  if (Math.floor(Math.random() *3) === 0 ) {
    return "Rock";
  }
  else if (Math.floor(Math.random() * 3) === 1) {
    return "Paper";
  }
  else {
    return "Scissors";
  }
}
function getHumanChoice () {
  prompt ("What is your choice Rock, Paper or Scissors?");
  if (prompt()=== Rock) {
    return "Rock"
  }
}
getHumanChoice();