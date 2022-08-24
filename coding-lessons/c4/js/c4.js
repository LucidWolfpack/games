
//** variables to keep track of **//

let board, turn;

let tieGame = 0;

let colSelected = null;

let winner = 0;

let winDisplay = document.querySelector('.winner');

//** add const for later use  **//

const message = document.querySelector('.player')

const squares = document.querySelectorAll('.square')

const topRow = document.querySelectorAll('.column')

const column = [0, 1, 2, 3, 4, 5, 6]

const winCombos = [
  [0, 1, 2, 3],
  [7, 8, 9, 10],
  [14, 15, 16, 17],
  [21, 22, 23, 24],
  [28, 29, 30, 31],
  [35, 36, 37, 38],
  [41, 40, 39, 38],
  [34, 33, 32, 31],
  [27, 26, 25, 24],
  [20, 19, 18, 17],
  [13, 12, 11, 10],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
]

//* handle click *//

topRow.forEach((sq) => sq.addEventListener('click', handleClick))


function handleClick(e) {

  const col = column[e.target.id]
  // console.log(getPosition(col))

  board[getPosition(col)] = turn
  // console.log(board)
  tieGame += 1;
  render()
}

//** primary functions **//

function renderMsg() {
  if (turn === -1 && tieGame !== 43) {
    message.style.color = 'blue'
    message.innerHTML = 'Player turn: BLUE'
  } else {
    message.style.color = 'red'
    message.innerHTML = 'Player turn: RED'
  }
}

function displayWinner() {
  if (winner === -1) {
    message.style.color = 'blue'
    message.innerHTML = 'Winner is BLUE !!'
  } else {
    message.innerHTML = 'Winner is RED !!'
    message.style.color = 'red'
  }
  topRow.forEach((sq) => sq.removeEventListener('click', handleClick))
}

function checkWin() {
  for (let i = 0; i < winCombos.length; i++) {
    const a = winCombos[i][0]
    const b = winCombos[i][1]
    const c = winCombos[i][2]
    const d = winCombos[i][3]

    if (Math.abs(board[a] + board[b] + board[c] + board[d]) === 4) {
      winner = turn
      displayWinner()
    }
  }
}

function checkTie() {
  if (tieGame === 43) {
    message.style.color = 'black'
    message.innerHTML = 'We have a TIE !!'
  }
}

function getPosition(idx) {
  for (let i = idx + 35; i <= 41 && i >= 0; i -= 7) {
    if (board[i] === null) return i
  }
}


function renderBoard() {
  board.forEach((sq, idx) => {
    if (sq === 1) {
      squares[idx].style.background = 'blue'
    }
    if (sq === -1) {
      squares[idx].style.background = 'red'
    }
    if (sq === null) {
      squares[idx].style.background = 'grey'
    }
  })
}

function switchTurn() { turn *= -1 }

//** starting game *//

function render() {
  renderMsg()
  renderBoard()
  switchTurn()
  checkWin()
  checkTie()
  console.log(tieGame)
}

function init() {
  turn = 1;
  winner = 0;
  tieGame = 1;

  topRow.forEach((sq) => sq.addEventListener('click', handleClick))
  winDisplay.innerHTML = ''

  board = [
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null
  ];

  render()
}


init()

//**  **//

