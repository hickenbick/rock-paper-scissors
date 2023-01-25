// text variables
let introH2 = document.querySelector(".intro-h2");
let introH3 = document.querySelector(".intro-h3");
let winnerText = document.querySelector(".winner-text")
let userCounter = document.querySelector(".player-counter");
let computerCounter = document.querySelector(".computer-counter");
let userIcon = document.querySelector(".user-icon");
let computerIcon = document.querySelector(".computer-icon");
let modal = document.querySelector(".modal");

// button variables
let btns = document.querySelectorAll(".btn")
let playAgainBtn = document.querySelector(".modal-box button")

// logic variables
let computerScore = 0;
let userScore = 0;
let round = 1;

// Generate computer choice
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

// gets buttons input
let userChoice
btns.forEach(function(btn) {
  btn.addEventListener("click", function() {
      userChoice = this.id;
      if (round < 6) {
        playRound(userChoice, getComputerChoice());
        printUserChoice(userChoice);
        if (round == 6) {
          announceWinner();
        }
      } 
    });
});

// function containing all logic of the game and prints of what is happening
if (round < 5) {
  function playRound(userChoice, computerChoice) {
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
    round++
    introH3.textContent = `This is round ${round - 1} of 5`
    console.log("User score: " + userScore + " | " + "Computer score: " + computerScore)
    console.log("---- || -----")
  } 
}

function announceWinner() {
  modal.classList.add("fadein")
  if (userScore > computerScore) {
    winnerText.textContent = `User wins the game!` 
  } else if (userScore > computerScore) {
    winnerText.textContent = `Computer wins the game!` 
  } else {
    winnerText.textContent = `The game was a tie!` 
  }
  round = 1;
  userScore = 0;
  computerScore = 0;
}

playAgainBtn.addEventListener("click", () => {
  modal.classList.remove("fadein")
  introH2.textContent = "Choose your weapon"
  introH3.textContent = `First to score 5 points wins the game`
  userIcon.textContent = "❔"
  computerIcon.textContent = "❔"
  userCounter.textContent = 0
  computerCounter.textContent = 0
})



  












