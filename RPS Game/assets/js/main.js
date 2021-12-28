//variables
var playerChoose = 0;
var computerChoose = 0;
var playerScore = 0;
var computerScore = 0;

//functions to get user and computer options
function rock() {
  $("#player-rock").css("text-shadow", "2px 2px 30px black");
  $("#player-paper").css("text-shadow", "0px 0px");
  $("#player-scissors").css("text-shadow", "0px 0px");
  computerChoice();
  playerChoose = 1;
  theGame();
}

function paper() {
  $("#player-rock").css("text-shadow", "0px 0px");
  $("#player-paper").css("text-shadow", "2px 2px 30px black");
  $("#player-scissors").css("text-shadow", "0px 0px");
  computerChoice();
  playerChoose = 2;
  theGame();  
}

function scissors() {
  $("#player-rock").css("text-shadow", "0px 0px");
  $("#player-paper").css("text-shadow", "0px 0px");
  $("#player-scissors").css("text-shadow", "2px 2px 30px black");
  computerChoice();
  playerChoose = 3;
  theGame();
}

function computerChoice() {
  computerChoose = Math.floor((Math.random() * 3) + 1)
  switch (computerChoose) {
    case 1:
      $("#computer-rock").css("text-shadow", "2px 2px 30px black");
      $("#computer-paper").css("text-shadow", "0px 0px");
      $("#computer-scissors").css("text-shadow", "0px 0px");      
      break;
    
    case 2:
      $("#computer-rock").css("text-shadow", "0px 0px");      
      $("#computer-paper").css("text-shadow", "2px 2px 30px black");
      $("#computer-scissors").css("text-shadow", "0px 0px");      
      break;
    
    case 3:
      $("#computer-rock").css("text-shadow", "0px 0px");
      $("#computer-paper").css("text-shadow", "0px 0px");
      $("#computer-scissors").css("text-shadow", "2px 2px 30px black");
      break;
  }
}

//functions to reset the game
function reset() {
playerChoose = 0;
computerChoose = 0;
playerScore = 0;
computerScore = 0;

resetCSS();

document.getElementById('computer_score').innerHTML = computerScore;
document.getElementById('player_score').innerHTML = playerScore;
document.getElementById('message').innerHTML = "Choose Your Destiny!";
}

function resetCSS() {
  $("#player-rock").css("text-shadow", "0px 0px");
  $("#player-paper").css("text-shadow", "0px 0px");
  $("#player-scissors").css("text-shadow", "0px 0px");
  $("#computer-rock").css("text-shadow", "0px 0px");
  $("#computer-paper").css("text-shadow", "0px 0px");
  $("#computer-scissors").css("text-shadow", "0px 0px");
}

function resetConfirm() {
  var text;
  if (confirm("You really want to reset the game?")) {
    reset();
  }
}

//the game
function theGame() {
  switch (playerChoose) {
    case 1:
      if(computerChoose == 1) {
        document.getElementById('message').innerHTML = "Draw!";
      }
      else if(computerChoose == 2) {
        computerScore++;
        document.getElementById('message').innerHTML = "Computer Won!";
        document.getElementById('computer_score').innerHTML = computerScore;
      }
      else if(computerChoose == 3) {
        playerScore++;
        document.getElementById('message').innerHTML = "You Won!";
        document.getElementById('player_score').innerHTML = playerScore;
      }
      break;

    case 2:
      if(computerChoose == 2) {
        document.getElementById('message').innerHTML = "Draw!";
      }
      else if(computerChoose == 3) {
        computerScore++;
        document.getElementById('message').innerHTML = "Computer Won!";
        document.getElementById('computer_score').innerHTML = computerScore;
      }
      else if(computerChoose == 1) {
        playerScore++;
        document.getElementById('message').innerHTML = "You Won!";
        document.getElementById('player_score').innerHTML = playerScore;
      }
      break;

    case 3:
      if(computerChoose == 3) {
        document.getElementById('message').innerHTML = "Draw!";
      }
      else if(computerChoose == 1) {
        computerScore++;
        document.getElementById('message').innerHTML = "Computer Won!";
        document.getElementById('computer_score').innerHTML = computerScore;
      }
      else if(computerChoose == 2) {
        playerScore++;
        document.getElementById('message').innerHTML = "You Won!";
        document.getElementById('player_score').innerHTML = playerScore;
      }
      break;
  }
}