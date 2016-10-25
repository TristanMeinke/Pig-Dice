// GLOBAL Variables

var scoreThisRoll;

//Player Prototype:

function Player(active, scoreThisTurn, totalScore) {
  this.active = active;
  this.scoreThisTurn = scoreThisTurn;
  this.totalScore = totalScore;
}

var player1 = new Player(true, 0);
var player2 = new Player(false, 0);
var activePlayer = player1;

//Backend Logic

function rollDie() {
  var dieResult = Math.floor(Math.random() * 6);

  if (dieResult === 1)
  {
    // The following code ends the player's turn.
    // endTurnOn1();
  }
  else if (dieResult === NaN)
  {
    dieResult = Math.floor(Math.random() * 6);
  }
  else
  {
    return dieResult;
  }
}

function rollDice() {
  var die1Result = rollDie();
  var die2Result = rollDie();
  return die1Result + die2Result;
}

function switchActivePlayer() {
  // FUNCTIONAL
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
  switchActivePlayer();
}

function endTurnOnHold() {
  // Increment total score by round score
  activePlayer.totalScore = activePlayer.totalScore + activePlayer.scoreThisTurn;
  switchActivePlayer();
}
