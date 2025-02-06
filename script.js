// jak teraz programatycznie najlepiej zrobić planszę do tic tac toe
// możnaby zrobić array, z key value pair, 9 par, tylko potem trzeba sprawdzać czy pola obok siebie mają 3 x z rzędu
// let board = []

// makeBoard: new function() {
//     for (let i = 0; i < 8; i++) {
//         board.push(i);
//     };
// }();

// chodzi o to że zrobię sobie grid na stronie i przypiszę każdej komórce grida klasę z cyfrą opisującą pozycję
// następnie funkcja określająca kto jest na ruchu
// mam gameboard jako obiekt UI, ale nie mam jak określić status planszy


const board = document.querySelector(".board");
const row_UI = board.querySelectorAll(".row")

const gameboard = [
    ["","",""],
    ["","",""],
    ["","",""]
];

const Player = function(mark) {
    let score = 0;
    
    return {getMark: function() {
        return mark;
    },

    getScore: function() {
        return score;
    },

    addScore: function() {
        score++;
    },
    
    playerPick: function(pick) {
        if (gameboard[pick] == "") {
            // The entire logic of this is wrong because it's based on the previous version, where I had each square named and the pick actually corresponded to the gameboard value. Now it needs to be gameboard[row][col]
            gameboard[pick] = Player.getMark();
        };
    },
}   
};

let x = new Player("x");
let o = new Player("o");
let nowMoving = x;

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
    });
}();

const checkWin = function() {
        
    //Check rows for win
    for (let row of gameboard) {
        if (row[0] === row[1] && 
            row[0] === row[2] && 
            row[0] !== "") {
            return row[0];
        };
    };
        
    //Check columns for win
    for (let col=0; col<3; col++) {
        if (gameboard[0][col] === gameboard[1][col] &&
            gameboard[0][col] === gameboard[2][col] &&
            gameboard[0][col] !== ""
        ) return gameboard[0][col];
    };

    // Check diagonals for a win
    if (gameboard[0][0] === gameboard[1][1] &&
        gameboard[0][0] === gameboard[2][2] &&
        gameboard[0][0] !== ""
    ) return gameboard[0][0];

    if (gameboard[2][0] === gameboard[1][1] &&
        gameboard[2][0] === gameboard[0][2] &&
        gameboard[2][0] !== ""
    ) return gameboard[2][0];

    
    // Check for empty squares
    for (let row of gameboard) {
        if (row.includes("")) {
            continue
        };
        
        // Returns draw only when all squares are filled and no winner has emerged - not ideal, since there will be combinations where 
        // the game is drawn since no victor can be crowned despite empty squares remaining, but I don't feel like solving it right now, so this must do.
        return "Draw";
    };
}


// Alternate players
const changePlayer = function() {
    if (nowMoving === x) {
        nowMoving = o;
    } else {
        nowMoving = x;
    }
};

squareClick: new function() {

}

const syncBoard = function() {
    for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 2; col++) {
            let squareClass = `${String.fromCharCode(97 + row)}${col + 1}`
            let squareElement = document.querySelector(`#${squareClass}`);
            squareElement.innerHTML = gameboard[row][col];
        };
    }; 
};
