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
const square = board.querySelectorAll("div")

const gameboard = function() {
    let a1 = "";
    let a2 = "";
    let a3 = "";
    let b1 = "";
    let b2 = "";
    let b3 = "";
    let c1 = "";
    let c2 = "";
    let c3 = "";
}();

const Player = function(mark) {
    const mark = mark;
    let score = 0;
    
    playerPick = function(pick) {
        gameboard.pick = Player.mark;
    };
};

let x = new Player(x);
let o = new Player(o);

const gamePlay = function(pick) {
    let nowMoving = x;

    if (gameboard(pick) == "") {
        nowMoving.playerPick(pick)
    }
    
    
};


squareClick: new function() {

}