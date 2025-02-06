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
    const mark = mark;
    let score = 0;
    
    playerPick = function(pick) {
        if (gameboard[pick] == "") {
            gameboard.pick = Player.mark;
        };
    };
};

let x = new Player(x);
let o = new Player(o);
let nowMoving = x;

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

}

for (let row of gameboard) {
    if (row.includes("")) {
        return null
};

return "Draw";
};

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
            let squareElement = document.querySelector(`.${squareClass}`);
            squareElement.innerHTML = gameboard[row][col];
        }
    }; 
};
