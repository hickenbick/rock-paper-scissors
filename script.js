let computerScore = 0;
let userScore = 0;
let round = 1;

// generating computer choice and returning "rock", "paper" or "scissor" randomly
getComputerChoice = function() {
  randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0) {
    return "rock"
  } else if (randomNumber === 1) {
    return "paper"
  } else {
    return "scissor"
  }
}

// Getting user choice through prompt, checking if fits "Rock", "Paper", or Scissor and returning it
getUserChoice = function() {
  getWord = prompt("Please, write: Rock, Paper or Scissor", "")
  userChoice = getWord.toLowerCase()
  if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissor") {
    return userChoice
  } else {
    return alert("Incorrect input! Try again")
  }
}

// function containing all logic of the game and prints of what is happening
function playRound(userChoice, computerChoice) {
  userChoice = getUserChoice()
  computerChoice = getComputerChoice()
  console.log("This is round: " + round)
  console.log("User choice: " + userChoice + " | " + "Computer choice: " + computerChoice)
 
  if (
  userChoice === "rock" && computerChoice === "scissor" || 
  userChoice === "paper" && computerChoice === "rock" ||
  userChoice === "scissor" && computerChoice === "paper") {
  console.log("This round user wins!")
  userScore++
  }
  if (
  userChoice === "rock" && computerChoice === "paper" || 
  userChoice === "paper" && computerChoice === "scissor" ||
  userChoice === "scissor" && computerChoice === "rock") {
  console.log("This round computer wins!")
  computerScore++
  }
  if (
    userChoice === computerChoice){
    console.log("This round is a tie!")
  }
  if (
    userChoice === undefined || userChoice === null) {
    console.log("Try again!")
    round--
  }
  round++
  console.log("User score: " + userScore + " | " + "Computer score: " + computerScore)
  console.log("---- || -----")
}

// function with loop for 5 rounds announcing winner at the end and making variables 0 again
function game() {
  for(i = 0; i < 5; i++) {
    playRound();
  }
  if (userScore === computerScore) {
    console.log("The game finish is a TIE!")
  }
  if (userScore > computerScore) {
    console.log("USER wins the game!")
  } 
  if (userScore < computerScore) {
    console.log("COMPUTER wins the game!")
  } 
  console.log("---- || -----")
  round = 0
  userScore = 0
  computerScore = 0
} 
  
// call for net game to start
// game()










