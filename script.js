// text variables
let introH2 = document.querySelector(".intro-h2");
let introH3 = document.querySelector(".intro-h3");
let userCounter = document.querySelector(".player-counter");
let computerCounter = document.querySelector(".computer-counter");
let userIcon = document.querySelector(".user-icon");
let computerIcon = document.querySelector(".computer-icon");
let btns = document.querySelector(".btn");

// button variables
const rockBtn = document.querySelector(".rock-btn") 
const paperBtn = document.querySelector(".paper-btn") 
const scissorBtn = document.querySelector(".scissor-btn") 

// logic variables
let computerScore = 0;
let userScore = 0;
let round = 1;

// generating computer choice and returning "rock", "paper" or "scissor" randomly
getComputerChoice = function() {
  randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0) {
    computerIcon.textContent = "✊"
    return "rock";
  } else if (randomNumber === 1) {
    computerIcon.textContent = "✋"
    return "paper";
  } else {
    computerIcon.textContent = "✌"
    return "scissor";
  }
}

// Getting user choice through prompt, checking if fits "Rock", "Paper", or Scissor and returning it
getUserChoice = function() {
  getWord = prompt("Please, write: Rock, Paper or Scissor", "")
  userChoice = getWord.toLowerCase();
  printUserChoice(userChoice);
  if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissor") {
    return userChoice;
  } else {
    return alert("Incorrect input! Try again")
  }
}

// Will print icon according to user choice
function printUserChoice(userChoice) {
  switch(userChoice) {
    case "rock":
      userIcon.textContent = "✊"
    break
    case "paper":
      userIcon.textContent = "✋"
    break
    case "scissor":
      userIcon.textContent = "✌"
    break
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
  introH2.textContent = "This round user wins!"
  userScore++
  userCounter.textContent = `${userScore}`;
  }
  if (
  userChoice === "rock" && computerChoice === "paper" || 
  userChoice === "paper" && computerChoice === "scissor" ||
  userChoice === "scissor" && computerChoice === "rock") {
  console.log("This round computer wins!")
  introH2.textContent = "This round computer wins!"
  computerScore++
  computerCounter.textContent = `${computerScore}`;
  }
  if (
    userChoice === computerChoice){
    console.log("This round is a tie!")
    introH2.textContent = "This round is a tie!"
  }
  if (
    userChoice === undefined || userChoice === null) {
    console.log("Try again!")
    round--
  }
  round++
  introH3.textContent = `This is round ${round - 1} of 5`
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
    introH2.textContent = "This game finish is a TIE!"
    introH3.textContent = "You can't win against a simple code..."
  }
  if (userScore > computerScore) {
    console.log("USER wins the game!")
    introH2.textContent = "USER wins the game!"
    introH3.textContent = "Nothing really special..."
  } 
  if (userScore < computerScore) {
    console.log("COMPUTER wins the game!")
    introH2.textContent = "COMPUTER wins the game!"
    introH3.textContent = "Better try again loser..."
  } 
  console.log("----- || -----")
  round = 0
  userScore = 0
  computerScore = 0
}

btns.addEventListener("click", (btn) => {
  player = btn.id
  console.log(player);
})




  












