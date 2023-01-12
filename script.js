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

// Function to play a new round
function playRound(playerSelection, computerSelection) {
    playerSelection = getUserChoice()
    computerSelection = getComputerChoice()
    result = "This round we have: " + playerSelection + " vs " + computerSelection;
    console.log(result)
    console.log(roundComparison(playerSelection, computerSelection));
    return result
}

// Function to compare player vs computer and declare result
roundComparison = function(user, computer) {
  if (user === computer) {
    return "this round is a tie!"
  } else if (user === "rock" && computer === "paper") {
    return "computer got this round!"
  } else if (user === "rock" && computer === "scissor") {
    return "user got this round!"
  } else if (user === "paper" && computer === "rock") {
    return "user got this round!"
  } else if (user === "paper" && computer === "scissor") {
    return "computer got this round!"
  } else if (user === "scissor" && computer === "rock") {
    return "computer got this round!"
  } else if (user === "scissor" && computer === "rock") {
    return "computer got this round!"
  }
}

let game = function() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound().result)
  }
}

game()










