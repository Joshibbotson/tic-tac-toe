let endOfGame = false;
let pvp = false;
let vsEasyAI = true;

const outcomeDisplay = document.getElementById('outcomeDisplay')

const createPlayer = (name, symbol) => {
    const assignPositionToBoard = (i) => {
        let row1 = GameBoard.board[0]
        let row2 = GameBoard.board[1]
        let row3 = GameBoard.board[2]
        let currentPosition = document.getElementById(i)
        // i'm like 90% sure I can make this work with a for each loop and remove a buck ton of code...//
        if (currentPosition.innerHTML === `<p> ${player.symbol} </p>`|| currentPosition.innerHTML === `<p> ${player2.symbol} </p>`){
            return
        }
        else {
        switch(i) {
            case i = 1: currentPosition.innerHTML = `<p> ${symbol} </p>`
            row1[0] = symbol
            break;
            case i = 2: currentPosition.innerHTML = `<p> ${symbol} </p>`
            row1[1] = symbol
            break;
            case i = 3: currentPosition.innerHTML = `<p> ${symbol} </p>`
            row1[2] = symbol
            break;
            case i = 4: currentPosition.innerHTML = `<p> ${symbol} </p>`
            row2[0] = symbol
            break;
            case i = 5: currentPosition.innerHTML = `<p> ${symbol} </p>`
            row2[1] = symbol
            break;
            case i = 6: currentPosition.innerHTML = `<p> ${symbol} </p>`
            row2[2] = symbol
            break;
            case i = 7: currentPosition.innerHTML = `<p> ${symbol} </p>`
            row3[0] = symbol
            break;
            case i = 8: currentPosition.innerHTML = `<p> ${symbol} </p>`
            row3[1] = symbol
            break;
            case i = 9: currentPosition.innerHTML = `<p> ${symbol} </p>`
            row3[2] = symbol
            break;
            default: console.log("Not applicable")
            }
        }
        GameBoard.checkBoard(GameBoard.board, 'x')
        GameBoard.checkBoard(GameBoard.board, 'o')
    }
    return {name, symbol, assignPositionToBoard}
}


const player2 = createPlayer('player2', 'o')
const easyAI = createPlayer('easyAI', 'o')
const cheaterAI = createPlayer('cheaterAI', 'o')
const player = createPlayer('Josh', 'x')


const Game = {
    currentTurnTaker: player,
    state: (currentPlayer) => {
        switch(endOfGame){
            case false:
                switch(pvp){
                    case true: 
                        if (currentPlayer === player) {
                            player.assignPositionToBoard(position)
                            Game.currentTurnTaker = player2
                        }
                        else if (currentPlayer === player2) {
                            player2.assignPositionToBoard(position)
                            Game.currentTurnTaker = player
                        }
                }
                switch(vsEasyAI) {
                    case true:
                        if (currentPlayer === player) {
                            player.assignPositionToBoard(position)
                            Game.currentTurnTaker = easyAI
                        }
                        else if (currentPlayer === easyAI) {
                            easyAI.aiAssignPositionToBoard(easyAI.makeLegalMove(GameBoard.board), easyAI.symbol)
                            Game.currentTurnTaker = player
                        }
                }
        break;
        case true: return
        }
        
    }
}
easyAI.makeLegalMove = function (board) {

   function findNull (arr, i) {
        let row = arr[i]
        let rowArr = []
        let nullLocation = row.indexOf(null)

        while (nullLocation != -1) {
            rowArr.push(nullLocation)
            nullLocation = row.indexOf(null, nullLocation + 1)
        }
        return rowArr
    }

    let row1 = findNull(GameBoard.board, 0)
    let row2 = findNull(GameBoard.board, 1)
    let row3 = findNull(GameBoard.board, 2)

    function getRandomPositionIndex(row) {
        if (row.length === 0){
              return
        }
        else {
          return Math.floor(Math.random() * row.length)
        }
      }

    let a = getRandomPositionIndex(row1)
    let b = getRandomPositionIndex(row2)
    let c = getRandomPositionIndex(row3)

    function rowDecider (row1, row2, row3) {
        let arr = [row1, row2, row3]
        let answer = Math.floor(Math.random() * arr.length)
        switch(answer) {
          case 0: 
            if (typeof(row1) === 'number' ){
                return `row1[${row1}]`
              break;
          }
          break;
          case 1:
            if (typeof(row2) === 'number') {
              return `row2[${row2}]`
            }
          break;
          case 2:
            if (typeof(row3) === 'number'){
            return `row3[${row3}]`
          }
          break;
          default: return;
        }
      }
      
      return rowDecider(row1[a], row2[b], row3[c])
}

easyAI.aiAssignPositionToBoard = function (location, symbol) {
    let row1 = GameBoard.board[0]
    let row2 = GameBoard.board[1]
    let row3 = GameBoard.board[2]
    // let i = null
    let domBoardPlacement;
    switch(location) {
        case location = 'row1[0]': domBoardPlacement = document.getElementById(1)
        domBoardPlacement.innerHTML = `<p> ${symbol} </p>`
        row1[0] = symbol
        break;
        case location = 'row1[1]': domBoardPlacement = document.getElementById(2)
        domBoardPlacement.innerHTML = `<p> ${symbol} </p>`
        row1[1] = symbol
        break;
        case location = 'row1[2]': domBoardPlacement = document.getElementById(3)
        domBoardPlacement.innerHTML = `<p> ${symbol} </p>`
        row1[2] = symbol
        break;
        case location = 'row2[0]': domBoardPlacement = document.getElementById(4) 
        domBoardPlacement.innerHTML = `<p> ${symbol} </p>`
        row2[0] = symbol
        break;
        case location = 'row2[1]': domBoardPlacement = document.getElementById(5) 
        domBoardPlacement.innerHTML = `<p> ${symbol} </p>`
        row2[1] = symbol
        break;
        case location = 'row2[2]': domBoardPlacement = document.getElementById(6)
        domBoardPlacement.innerHTML = `<p> ${symbol} </p>`
        row2[2] = symbol
        break;
        case location = 'row3[0]': domBoardPlacement = document.getElementById(7)
        domBoardPlacement.innerHTML = `<p> ${symbol} </p>`
        row3[0] = symbol
        break;
        case location = 'row3[1]': domBoardPlacement = document.getElementById(8)
        domBoardPlacement.innerHTML = `<p> ${symbol} </p>`
        row3[1] = symbol
        break;
        case location = 'row3[2]': domBoardPlacement = document.getElementById(9)
        domBoardPlacement.innerHTML = `<p> ${symbol} </p>`
        row3[2] = symbol
        break;
        default: console.log("AI not applicable.")
    }
    GameBoard.checkBoard(GameBoard.board, 'x')
    GameBoard.checkBoard(GameBoard.board, 'o')
}


const GameBoard = {
    board: 
      [[null, null, null],
       [null, null, null],
       [null, null, null]],
    
    checkBoard: function (board, symbol) {


    if (board[0][0] === symbol &&
        board[1][1] === symbol &&
        board[2][2] === symbol){
        endOfGame = true
        outcomeDisplay.innerHTML = `<h2> ${Game.currentTurnTaker.symbol} wins! </h2>`
    }

    if (board[0][2] === symbol &&
        board[1][1] === symbol &&
        board[2][0] === symbol){
        endOfGame = true
        outcomeDisplay.innerHTML = `<h2> ${Game.currentTurnTaker.symbol} wins! </h2>`
    }
    
    if (board[0][0] === symbol &&
        board[1][0] === symbol &&
        board[2][0] === symbol){
        endOfGame = true
        outcomeDisplay.innerHTML = `<h2> ${Game.currentTurnTaker.symbol} wins! </h2>`
    }

    if (board[0][1] === symbol &&
        board[1][1] === symbol &&
        board[2][1] === symbol){
        endOfGame = true
        outcomeDisplay.innerHTML = `<h2> ${Game.currentTurnTaker.symbol} wins! </h2>`
    }
    
    if (board[0][2] === symbol &&
        board[1][2] === symbol &&
        board[2][2] === symbol){
        endOfGame = true
        outcomeDisplay.innerHTML = `<h2> ${Game.currentTurnTaker.symbol} wins! </h2>`
    }
    
    if (board[2][0] === symbol &&
        board[2][1] === symbol &&
        board[2][2] === symbol){
        endOfGame = true
        outcomeDisplay.innerHTML = `<h2> ${Game.currentTurnTaker.symbol} wins! </h2>`
    }
    if (board[1][0] === symbol &&
        board[1][1] === symbol &&
        board[1][2] === symbol){
        endOfGame = true
        outcomeDisplay.innerHTML = `<h2> ${Game.currentTurnTaker.symbol} wins! </h2>`
    }

    if (board[0][0] === symbol &&
        board[0][1] === symbol &&
        board[0][2] === symbol){
        endOfGame = true
        outcomeDisplay.innerHTML = `<h2> ${Game.currentTurnTaker.symbol} wins! </h2>`
    }
    if (board[0].includes(null) === false &&
        board[1].includes(null) === false &&
        board[2].includes(null) === false) {
        console.log("tie")
    }
    return
    },

    resetBoard: () => {
        endOfGame = false;
        outcomeDisplay.innerHTML = ``
        Game.currentTurnTaker = player

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
    })
});

resetBtn = document.getElementById('resetBtn').addEventListener('click', GameBoard.resetBoard)
pvpBtn = document.getElementById('pvpBtn').addEventListener('click', () => {
    GameBoard.resetBoard()
    pvp = true
    vsEasyAI = false
})
easyAiBtn = document.getElementById('easyAI').addEventListener('click', () => {
    GameBoard.resetBoard()
    pvp = false
    vsEasyAI = true
})


