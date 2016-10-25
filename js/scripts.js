// GLOBAL Variables

var scoreThisRoll;

//Player Prototype:

function Player(active, scoreThisTurn, totalScore) {
  this.active = active;
  this.scoreThisTurn = scoreThisTurn;
  this.totalScore = totalScore;
}

// STARTING Variables...

var player1 = new Player(true, 0);
var player2 = new Player(false, 0);
var activePlayer = player1;

//Backend Logic

// function rollDie() {
//   var dieResult = Math.floor((Math.random() * 6 ) + 1);
//   return dieResult;
// }

function rollDice() {
  var die1Result = Math.floor((Math.random() * 6 ) + 1);
  var die2Result = Math.floor((Math.random() * 6 ) + 1);

  if (die1Result === 1 || die2Result === 1)
  {
    endTurnOn1();
    return;
  }
  else
  {
    scoreThisRoll = die1Result + die2Result;
    activePlayer.scoreThisTurn += scoreThisRoll;

    return scoreThisRoll;
  }
}

function switchActivePlayer() {
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
  alert("Turn over! You rolled a 1!")
  switchActivePlayer();
}

function endTurnOnHold() {
  // Increment total score by round score
  activePlayer.totalScore += activePlayer.scoreThisTurn;
  switchActivePlayer();
}
