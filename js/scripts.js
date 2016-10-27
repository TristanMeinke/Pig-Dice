// GLOBAL Variables

var scoreThisRoll;

//Player Prototype:

function Player(active, scoreThisTurn, totalScore) {
  this.active = active;
  this.scoreThisTurn = scoreThisTurn;
  this.totalScore = totalScore;
}

// STARTING Variables...

var player1 = new Player(true, 0, 0);
var player2 = new Player(false, 0, 0);
var activePlayer = player1;

//Backend Logic

function rollDice() {
  // This function rolls the dice,
  // determines if either value is a 1,
  // then concatenates the values together,
  // and returns that value as 'scoreThisRoll'.
  var die1Result = Math.floor((Math.random() * 6 ) + 1);
  var die2Result = Math.floor((Math.random() * 6 ) + 1);

  if (die1Result === 1 || die2Result === 1)
  {
    // Appends a line to the table in italics to denote that this line rolled a 1.
    $('#scoreboard > tbody:last-child').append("<tr><td><em>" + activePlayer + "<em></td><td><em>" + player1.scoreThisRoll + "</em></td><td><em>" + player1.ScoreThisTurn + "</em></td><td><em>" + player1.totalScore + "</em></td><td><em>" + player2.scoreThisRoll + "</em></td><td><em>" + player2.ScoreThisTurn + "</em></td><td><em>" + player2.totalScore + "</em></td></tr>");
    endTurnOn1();
    return;
  }
  else
  {
    scoreThisRoll = die1Result + die2Result;
    activePlayer.scoreThisTurn += scoreThisRoll;
    // Appends a standard line to the table.
    $('#scoreboard > tbody:last-child').append("<tr><td>" + activePlayer + "</td><td>"+ player1.scoreThisRoll + "</td><td>" + player1.ScoreThisTurn + "</td><td>" + player1.totalScore + "</td><td>" + player2.scoreThisRoll + "</td><td>" + player2.ScoreThisTurn + "</td><td>" + player2.totalScore + "</td></tr>");
    return scoreThisRoll;
  }
}

function switchActivePlayer() {
  // Function that determines which player
  // is currently active, then switches.
  if (player1.active === true)
  {
    player1.active = false;
    player2.active = true;
    activePlayer = player2;
  }
  else if (player2.active === true)
  {
    player2.active = false;
    player1.active = true;
    activePlayer = player1;
  }
}

function endTurnOn1() {
  // Reduces points earned this turn to 0
  activePlayer.scoreThisTurn = 0;
  // Placeholder alert.
  // This should ultimately be appended to the list or table.
  alert("Turn over! You rolled a 1!")
  // Calls player switch function
  switchActivePlayer();
}

function endTurnOnHold() {
  // Increment total score by round score
  activePlayer.totalScore += activePlayer.scoreThisTurn;
  activePlayer.scoreThisTurn = 0;
  // Calls gameOver() function to evaluate the scores of each player.
  gameOver();
  // Calls player switch function
  switchActivePlayer();
}

function gameOver() {
  if (player1.totalScore >= 100 || player2.totalScore >= 100)
  {
    alert("Game Over! Active player wins!")
  }
}
// ***FRONTEND LOGIC***

$(document).ready(function () {

  $("#roll").click(function(event) {
    rollDice();
  });

  $("#hold").click(function(event) {
    endTurnOnHold();
    //Appends a bolded line to the table, to denote that the player held here instead of rolling.
    $('#scoreboard > tbody:last-child').append("<tr><td><strong>" + activePlayer + "<strong></td><td><strong>" + player1.scoreThisRoll + "</strong></td><td><strong>" + player1.ScoreThisTurn + "</strong></td><td><strong>" + player1.totalScore + "</strong></td><td><strong>" + player2.scoreThisRoll + "</strong></td><td><strong>" + player2.ScoreThisTurn + "</strong></td><td><strong>" + player2.totalScore + "</strong></td></tr>");
  });
});
