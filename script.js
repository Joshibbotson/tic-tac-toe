const GameBoard = {
    board: 
      [[null, null, null],
       [null, null, null],
       [null, null, null]],
    
    checkBoard: function (board, symbol) {
    if (board[0] === [symbol, symbol, symbol]){
      console.log("winner!")
    }
    
      if (board[0][0] === symbol &&
        board[1][1] === symbol &&
        board[2][2] === symbol){
      console.log("winner!")
    }
    
    if (board[0][0] === symbol &&
        board[1][0] === symbol &&
        board[2][0] === symbol){
      console.log("winner!")
    }
    
    if (board[0][2] === symbol &&
        board[1][2] === symbol &&
        board[2][2] === symbol){
      console.log("winner!")
    }
    
    if (board[1] === [symbol, symbol, symbol]){
      console.log("winner!")
    }
  },
    resetBoard: () => {GameBoard.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]]
    }
    
  }

positionArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let position;

positionArr.forEach(num => {
     document.getElementById(num).addEventListener('click', (e) => {
        position = parseInt(e.target.id)
        assignPositionToBoard(position)
    })
});

function assignPositionToBoard (i) {
    let row1 = GameBoard.board[0]

    console.log(i)
    switch(i) {
        case i = 1: console.log("deez nuts 1")
        break;
        case i = 2: console.log("deez nuts 2")
        break;
        case i = 3: console.log("deez nuts 3")
        break;
        case i = 4: console.log("deez nuts 4")
        break;
        case i = 5: console.log("deez nuts 5")
        break;
        case i = 6: console.log("deez nuts 6")
        break;
        case i = 7: console.log("deez nuts 7")
        break;
        case i = 8: console.log("deez nuts 8")
        break;
        case i = 9: console.log("deez nuts 9")
        break;
        default: console.log("not deez nuts default nuts")
        }
}

