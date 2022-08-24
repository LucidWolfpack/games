
// THIS IS ALL ABOUT DOM MANIPULATION

// ========= STATE =========
// this will act as the memory of our application
// as a player is playing a game of TTT, different variables,
// conditions... etc, change over time. 
// our JS file needs a way of remembering what the state of the game is...
// or, the JS file needs a way of remembering what is going on in the game

// let's say, we have a few variales (pieces of data that can change)
// what are some variables we would want in a game of TTT?

// 1. turn
//    this could be a string ('X' or 'O'), 
//    or it could be a Boolean (true, false)
//    or it could be a number (1 & 0, or 1 & -1)

// 2. board
//    an array of...
//    9 elements
//    at the start of the game...
//    these elements would be null
//    when a player makes a move...
///   these elements would a string('X' or 'O')

// 3. winner
//    string ('x' or 'o')
//    what should winner be at the start of a game?


// these are things that the game needs to remember/keep track of ^^^^

// ====== State ====== //


let boardstate = [
  null, null, null,
  null, null, null,
  null, null, null,
]

const boardDisplay = document.querySelectorAll(".square")

console.log(boardDisplay)

boardDisplay.forEach((sq) => sq.addEventListener('click', handleClick))

// ========== FUNCTIONS TO UPDATE STATE ===========

function handleClick(e) {
  boardstate[e.target.id] = playerTurn()
  console.log(boardstate);
  renderBoard();
  moves += 1;
  showTurn();
  findWinner();
  tie()
}

function renderBoard() {
  boardstate.forEach((el, idx) => {
    if (el === null) return
    boardDisplay[idx].textContent = el
    boardDisplay[idx].removeEventListener('click', handleClick)
  })
}

// ========== RENDER STATE CHANGES ===========
// HOW CAN WE SWITCH TURNS?
let moves = 0;

function playerTurn() {
  if (moves % 2 === 0) {
    return "X";
  } else {
    return "O";
  }
}

// HOW CAN WE DISPLAY WHOSE TURN IT IS?
let showturn = document.querySelector(".playerturn")

function showTurn() {
  if (moves % 2 === 0) {
    showturn.textContent = "Player Turn: " + "O";
  } else {
    showturn.textContent = "Player Turn: " + "X";
  }
}

// HOW CAN WE CHECK FOR A WINNER?
// AT SOME POINT, WE WILL NEED TO LOOK AT THE STATE OF THE GAMEBOARD
// AND CHECK TO SEE IF THERE IS A WINNER, OR A TIE


function findWinner() {
  if (boardstate[0] === 'X' && boardstate[1] === 'X' && boardstate[2] === 'X') {
    winnerX = true;
    displayWinner();
  } else if (boardstate[0] === 'X' && boardstate[3] === 'X' && boardstate[6] === 'X') {
    winnerX = true;
    displayWinner();
  } else if (boardstate[0] === 'X' && boardstate[4] === 'X' && boardstate[8] === 'X') {
    winnerX = true;
    displayWinner();
  } else if (boardstate[1] === 'X' && boardstate[4] === 'X' && boardstate[7] === 'X') {
    winnerX = true;
    displayWinner();
  } else if (boardstate[2] === 'X' && boardstate[5] === 'X' && boardstate[8] === 'X') {
    winnerX = true;
    displayWinner();
  } else if (boardstate[3] === 'X' && boardstate[4] === 'X' && boardstate[5] === 'X') {
    winnerX = true;
    displayWinner();
  } else if (boardstate[6] === 'X' && boardstate[7] === 'X' && boardstate[8] === 'X') {
    winnerX = true;
    displayWinner();
  } else if (boardstate[2] === 'X' && boardstate[4] === 'X' && boardstate[6] === 'X') {
    winnerX = true;
    displayWinner();
    } 

    //* make one winner variable 
  // else if (boardstate[0] === 'O' && boardstate[3] === 'O' && boardstate[6] === 'O') {
  //   winnerO = true;
  //   displayWinner();
  // } else if (boardstate[0] === 'O' && boardstate[4] === 'O' && boardstate[8] === 'O') {
  //   winnerO = true;
  //   displayWinner();
  // } else if (boardstate[1] === 'O' && boardstate[4] === 'O' && boardstate[7] === 'O') {
  //   winnerO = true;
  //   displayWinner();
  // } else if (boardstate[2] === 'O' && boardstate[5] === 'O' && boardstate[8] === 'O') {
  //   winnerO = true;
  //   displayWinner();
  // } else if (boardstate[3] === 'O' && boardstate[4] === 'O' && boardstate[5] === 'O') {
  //   winnerO = true;
  //   displayWinner();
  // } else if (boardstate[6] === 'O' && boardstate[7] === 'O' && boardstate[8] === 'O') {
  //   winnerO = true;
  //   displayWinner();
  // } else if (boardstate[2] === 'O' && boardstate[4] === 'O' && boardstate[6] === 'O') {
  //   winnerO = true;
  //   displayWinner();
  // } else if (boardstate[0] === 'O' && boardstate[1] === 'O' && boardstate[2] === 'O') {
  //   winnerO = true;
  //   displayWinner();
  // }
}
// HOW CAN WE PREVENT A PLAYER FROM MAKING MOVES, AFTER A WINNER HAS BEEN DECLARED
//** one winner variable */
let winnerX = false;
let winnerO = false;


function displayWinner() {
  if (winnerX === true) {
    showturn.textContent = "WE HAVE A WINNER !! PLAYER X"
    boardDisplay.forEach((sq) => sq.removeEventListener('click', handleClick))
  } else if (winnerO === true) {
    showturn.textContent = "WE HAVE A WINNER !! PLAYER O"
    boardDisplay.forEach((sq) => sq.removeEventListener('click', handleClick))
  }
}

// HOW CAN WE PREVENT A PLAYER FROM CLICKING ON ALREADY FILLED IN SQUARES AFTER A MOVE HAS BEEN MADE
// function clicked(el, idx){
//   if(el !== null){
//     boardDisplay[idx].removeEventListener('click', handleClick)
//   }else(el === null)
// }

// HOW CAN WE CHECK FOR A TIE?

function tie() {
  if (moves == 9 && winnerX == false) {
    showturn.textContent = "WE HAVE A TIE !!"
  } else if (moves == 9 && winnerO === false) {
    showturn.textContent = "WE HAVE A TIE"
  }
}

// WE NEED TO RECORD EACH MOVE IN STATE, AND THEN REFLECT THAT STATE CHANGE,
// IN THE USERS BROWSER
// WE CANNOT JUST UPDATE THE HTML DOC FOR THE USER (THOUGH WE ALSO WANT TO DO THAT)


// **** reset button ****
// want to use the .map() ; but reads as not a function. args mmust be wrong
// tried: passing new blank array;
//        adjusting each one in loop;
// 


function resetGame() {
  console.log('button is pushed')
  moves = 0;

}



//   return bagOfFruits ? bagOfFruits.map(fruit => fruit.replace('rotten','').toLowerCase()) : []

//   const els = people.map(function(person, idx) {
//      const el = document.createElement('div')
//      el.innerHTML = `${person.name} <span>(${person.town})</span>`
//      return el
//   });
