// GLOBAL Variables

//Player Prototype:

function Player() {
  this.active = false;
  this.score = 0;
}

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
    // dieResult = Math.floor(Math.random() * 6);
    // Recursive function call to avoid NaN...
    rollDie();
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
  // This is a placeholder for now.
  if (Player1.active === true)
  {
    Player1.active === false;
    Player2.active === true;
  }
  if (Player2.active === true)
  {
    Player2.active === false;
    Player1.active === true;
  }
}

function endTurnOn1() {
  //set round score to 0
  switchActivePlayer();
}

function endTurnOnHold() {
  //increment total score by round score
  switchActivePlayer();
}
