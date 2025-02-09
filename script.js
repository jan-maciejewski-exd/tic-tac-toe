const board = document.querySelector(".board");
const resetbtn = document.querySelector(".reset-btn");
const now_moving_banner = document.querySelector(".now-moving");

let gameboard = [
    [" "," "," "],
    [" "," "," "],
    [" "," "," "]
];

const board_UI = {
    a1: {row: 0, col: 0},
    a2: {row: 0, col: 1},
    a3: {row: 0, col: 2},
    b1: {row: 1, col: 0},
    b2: {row: 1, col: 1},
    b3: {row: 1, col: 2},
    c1: {row: 2, col: 0},
    c2: {row: 2, col: 1},
    c3: {row: 2, col: 2},
};

const Player = function(mark) {
    let score = 0;
    
    return {
    
    getMark: function() {
        return mark;
    },

    getScore: function() {
        return score;
    },

    addScore: function() {
        score++;
    },
    
    playerPick: function(pick) {
        coord = board_UI[pick];

        if (gameboard[coord.row][coord.col] == " ") {
            gameboard[coord.row][coord.col] = this.getMark();
        };
    },
}   
};

let x = new Player("x");
let o = new Player("o");
let nowMoving = x;
now_moving_banner.innerHTML = `Now moving: ${nowMoving.getMark()}`;

const gamePlay = function(param) {
    console.log(nowMoving.getMark());
    nowMoving.playerPick(param);
    syncBoard();
    checkWin();
    changePlayer();
}

const handleClick = function() {
    board.addEventListener("click", function (e) {
        console.log(e.target.id)
        let choice = e.target.id;
        gamePlay(choice);
        console.log(gameboard)
    });
}();


resetbtn.addEventListener("click", () => {
    gameboard = [
        [" "," "," "],
        [" "," "," "],
        [" "," "," "]
    ];
    syncBoard();
});

const checkWin = function() {

    const announceWin = function(winner) {
        alert(winner + ' has won')
    };
        
    //Check rows for win
    for (let row of gameboard) {
        if (row[0] === row[1] && 
            row[0] === row[2] && 
            row[0] !== " ") {
            return announceWin(row[0]);
        };
    };
        
    //Check columns for win
    for (let col=0; col<3; col++) {
        if (gameboard[0][col] === gameboard[1][col] &&
            gameboard[0][col] === gameboard[2][col] &&
            gameboard[0][col] !== " "
        ) return announceWin(gameboard[0][col]);
    };

    // Check diagonals for a win
    if (gameboard[0][0] === gameboard[1][1] &&
        gameboard[0][0] === gameboard[2][2] &&
        gameboard[0][0] !== " "
    ) return announceWin(gameboard[0][0]);

    if (gameboard[2][0] === gameboard[1][1] &&
        gameboard[2][0] === gameboard[0][2] &&
        gameboard[2][0] !== " "
    ) return announceWin(gameboard[2][0]);

    
    // Check for empty squares to determine draw if there aren't any
    let temp = 0
    for (let row of gameboard) {
        if (row.includes(" ")) {
            temp++
        };    
    }
    if (temp === 0) {
        return alert("Draw")
    }
        
 // Returns draw only when all squares are filled and no winner has emerged - not ideal, since there will be combinations where 
 // the game is drawn since no victor can be crowned despite empty squares remaining, but I don't feel like solving it right now, so this must do.
    };


// Alternate players
const changePlayer = function() {
    if (nowMoving === x) {
        nowMoving = o;
    } else {
        nowMoving = x;
    };
    now_moving_banner.innerHTML = `Now moving: ${nowMoving.getMark()}`;
};

const syncBoard = function() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {

            //Take the row and column number and associate correct ACII values into a single string

            const squareClass = `${String.fromCharCode(97 + row)}${col + 1}`
            const squareElement = document.querySelector(`#${squareClass}`);
            squareElement.innerHTML = gameboard[row][col];
        };
    }; 
};
