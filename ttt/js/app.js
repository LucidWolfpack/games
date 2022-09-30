
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


// ====== State ====== //

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let board, moves, winner, tie

const boardDisplay = document.querySelectorAll(".square")

boardDisplay.forEach((sq) => sq.addEventListener('click', handleClick))

//** Functions **//

function handleClick(e) {
  board[e.target.id] = playerTurn()
  
  console.log(board)
  render()
}

function renderBoard() {
  board.forEach((el, idx) => {
    if (el === -1) {
      boardDisplay[idx].textContent = 'O'
      boardDisplay[idx].removeEventListener('click', handleClick)
    }
    if (el === 1) {
      boardDisplay[idx].textContent = 'X'
      boardDisplay[idx].removeEventListener('click', handleClick)
    }
    if (el === null) {
      boardDisplay[idx].textContent = ''
    }
  
  })
}

function switchTurn(){
  turn *= -1;
  moves+=1;
}

function playerTurn() {
  if (turn > 0) {
    return 1;
  } else {
    return -1;
  }
}

let showturn = document.querySelector(".playerturn")

function showTurn() {
  showturn.innerText = `It's ${turn > 0 ? 'X' : 'O'}'s turn`
  if (tie) showturn.innerText = `Tie game`
  if (winner === true) showturn.innerText = `${turn > 0 ? 'O' : 'X'} wins`
}


function findWinner() {
  
  for(let i = 0; i < winningCombos.length; i++){
    let a = winningCombos[i][0]
    let b = winningCombos[i][1]
    let c = winningCombos[i][2]
    
    if(Math.abs(board[a] + board[b] + board[c]) === 3){
      winner = true
      showTurn()
      boardDisplay.forEach((sq) => sq.removeEventListener('click', handleClick))
    }
    
  }
}

function checkTie() {
  if(moves === 9 && winner !== true) tie = true
}

//** starting up **//

function render(){
  renderBoard();
  switchTurn();
  showTurn();
  findWinner();
  checkTie();
}

function init() {
  moves = 0
  turn = 1
  tie = false
  winner = false
  board = [ null, null, null, null, null, null, null, null, null];
  
  boardDisplay.forEach((sq) => sq.addEventListener('click', handleClick))

  console.log(board);

  render()
}

init()



// topRow.forEach((sq) => sq.addEventListener('click', handleClick))
// winDisplay.innerHTML = ''