let computerGuees;
let userGuesses = [];
let attempts = 0;
let maxGueesses;
let low = 1;
let high = 100;



function init() {
  computerGuees = Math.floor(Math.random() * 100 + 1);
  console.log(computerGuees);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
}

function startGameView() {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
}
function newGame() {
    window.location.reload();
}

function updateRanges() {
  const rangeOutput = document.getElementById("rangeOutput");
  rangeOutput.innerText = `${low} - ${high}`
  rangeOutput.style.marginLeft = low + "%";
  rangeOutput.style.marginRight = 100 - high + "%";
  rangeOutput.classList.add("flash");

 
  const lowValue = document.getElementById("low");
  lowValue.style.flex = low + "%";
  lowValue.style.background = '#ef7b54';
  const spaceValue = document.getElementById("space");
  spaceValue.style.flex = high - low + "%";
  spaceValue.style.background = '#83e1d0';
  const highValue = document.getElementById("high");
  highValue.style.flex =100 - high + "%";
  highValue.style.background = '#ef7b54';
}

function gameEnded() {
    document.getElementById("newGameButton").style.display = "inline";
    document.getElementById("inputBox").setAttribute("readonly", "readonly");

}
function easyMode() {
    maxGueesses = 10;
  startGameView();
}

function hardMode() {
    maxGueesses = 5;
  startGameView();
}
function compareGuess() {
  const userGuess = Number(document.getElementById("inputBox").value);
  userGuesses.push(" " + userGuess);
  document.getElementById("guesses").innerHTML = userGuesses;
  attempts++;
  document.getElementById("attempts").innerHTML = attempts;
 
  if(attempts < maxGueesses) {
    if(userGuess > computerGuees) {
      
     if(userGuess < high) high = userGuess;
        document.getElementById("textOutput").innerHTML = "your guess is to high";
        document.getElementById("inputBox").value = "";
    }else if(userGuess < computerGuees) {
     if(userGuess > low) low = userGuess;
      document.getElementById("textOutput").innerHTML = "your guess is to low";
      document.getElementById("inputBox").value = "";
    }else {
      document.getElementById("textOutput").innerHTML = `correct! you got it in ${attempts} attempts`;
      gameEnded();
    }
  }else {
    if(userGuess > computerGuees) {
        document.getElementById("textOutput").innerHTML = `YOU LOSE! <br> the number was ${computerGuees}`;
        gameEnded();
    }else if(userGuess < computerGuees) {
      document.getElementById("textOutput").innerHTML = `YOU LOSE! <br> the number was ${computerGuees}`;
      gameEnded();
   
    }else {
      document.getElementById("textOutput").innerHTML = `correct! you got it in ${attempts} attempts`;

    }
  }
  updateRanges();
}
