const createPlayer = (name, symbol) => {
    const assignPositionToBoard = (i) => {
        let row1 = GameBoard.board[0]
        let row2 = GameBoard.board[1]
        let row3 = GameBoard.board[2]
        let currentPosition = document.getElementById(i)

        console.log(i)
        switch(i) {
            case i = 1: currentPosition.innerHTML = symbol
            row1[0] = symbol
            break;
            case i = 2: currentPosition.innerHTML = symbol
            row1[1] = symbol
            break;
            case i = 3: currentPosition.innerHTML = symbol
            row1[2] = symbol
            break;
            case i = 4: currentPosition.innerHTML = symbol
            row2[0] = symbol
            break;
            case i = 5: currentPosition.innerHTML = symbol
            row2[1] = symbol
            break;
            case i = 6: currentPosition.innerHTML = symbol
            row2[2] = symbol
            break;
            case i = 7: currentPosition.innerHTML = symbol
            row3[0] = symbol
            break;
            case i = 8: currentPosition.innerHTML = symbol
            row3[1] = symbol
            break;
            case i = 9: currentPosition.innerHTML = symbol
            row3[2] = symbol
            break;
            default: console.log("Not applicable")
            }
    }
    return {name, symbol, assignPositionToBoard}
}
const computer = createPlayer('Computer', 'o')
const player = createPlayer('Josh', 'x')

const Game = {
    // logic here should have a function that take player/computer as a parameter based off of 
    // who had a go last, and then for do parameter.assignPositionToBoard(position) which will
    // need something to prevent overlap of smybols and there should also be something that
    // calls the checkboard function within GameBoard each time
    // checkboard function should end the game and pronounce a winner.
    currentTurnTaker: player,
    state: (currentPlayer) => {
        if (currentPlayer === player) {
            player.assignPositionToBoard(position)
            Game.currentTurnTaker = computer
        }
        else if (currentPlayer === computer) {
            computer.assignPositionToBoard(position)
            Game.currentTurnTaker = player
        }
    }
}

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
    else {
        console.log("uh oh")
    }
    },
    resetBoard: () => {
        GameBoard.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]]

        positionArr.forEach(num => {
            document.getElementById(num).innerHTML = ''
       });

    },
    
  }

positionArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let position;

positionArr.forEach(num => {
     document.getElementById(num).addEventListener('click', (e) => {
        position = parseInt(e.target.id)
        Game.state(Game.currentTurnTaker)

        // player.assignPositionToBoard(position) use this later
    })
});



