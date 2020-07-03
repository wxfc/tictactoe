console.log('lets play');

var gameContainer = document.querySelectorAll('.square');
var resetBtn = document.querySelector('.reset');
var scoreOne = document.querySelector('.score1');
var scoreTwo = document.querySelector('.score2')

var resetAll = function () {
    gameContainer.forEach(function (square) {
        square.textContent = "";
        for (var index = 0; index < gameContainer.length; index++) {
            gameContainer[index].addEventListener('click', move)
        };
        document.querySelector('.player1').innerText = "Player 1";
        document.querySelector('.player2').innerText = "Player 2";
        if (xWins) {
            playersGo = "O";
            document.querySelector('.player2').classList.add("currentPlayer");
            document.querySelector('.player1').classList.remove("currentPlayer");
            document.querySelector(".player2").classList.remove("slide-rotate-hor-b-bck");
            document.querySelector(".player1").classList.remove("rotate-bl");
            xWins = false;
            oWins = false;
        } else if (oWins) {
            playersGo = "X";
            document.querySelector('.player1').classList.add("currentPlayer");
            document.querySelector('.player2').classList.remove("currentPlayer");
            document.querySelector(".player1").classList.remove("slide-rotate-hor-b-bck");
            document.querySelector(".player2").classList.remove("rotate-bl");
            xWins = false;
            oWins = false;
        }
    })
}

var playersGo = "X"

var move = function (event) {
    if (event.target.textContent !== "") {
        alert('Pick Another Square');
        return
    }
    if (playersGo === "X") {
        event.target.textContent = "X";
        counter += 1;
        document.querySelector('.player1').classList.remove("currentPlayer");
        playersGo = "O";
        document.querySelector('.player2').classList.add("currentPlayer");
    } else {
        event.target.textContent = "O";
        document.querySelector('.player2').classList.remove("currentPlayer")
        counter += 1;
        playersGo = "X";
        document.querySelector('.player1').classList.add("currentPlayer")
    }
    checkForWinner();
}

var winners = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

var xWins = false;
var oWins = false;

var checkForWinner = function () {
    winners.forEach(function(winners) {
        if (gameContainer[winners[0]].innerHTML === "X"
        && gameContainer[winners[1]].innerHTML === "X"
        && gameContainer[winners[2]].innerHTML === "X") {
            xWins = true;
            for (var index = 0; index < gameContainer.length; index++) {
                gameContainer[index].removeEventListener('click', move)
            };            
            document.querySelector('.player1').innerText = "Player 1 WINS";
            document.querySelector('.player1').classList.add("rotate-bl");
            document.querySelector('.player1').classList.add("currentPlayer");
            document.querySelector('.player2').classList.remove("currentPlayer");
            document.querySelector(".player2").classList.add("slide-rotate-hor-b-bck");
            counter = 0;
        } else if (gameContainer[winners[0]].innerHTML === "O"
        && gameContainer[winners[1]].innerHTML === "O"
        && gameContainer[winners[2]].innerHTML === "O") {
            oWins = true;
            for (var index = 0; index < gameContainer.length; index++) {
                gameContainer[index].removeEventListener('click', move)
            };
            document.querySelector('.player2').innerText = "Player 2 WINS";
            document.querySelector(".player2").classList.add("rotate-bl");
            document.querySelector('.player2').classList.add("currentPlayer");
            document.querySelector('.player1').classList.remove("currentPlayer");
            document.querySelector(".player1").classList.add("slide-rotate-hor-b-bck");
            counter = 0;
        } 
        clicker();
    });
}

var counter = 0;
var clicker = function () {
    for (var i = 0; i < gameContainer.length; i++);
    (gameContainer[i] = "X") ||(gameContainer[i] = "O");
    if (counter === 9
        && gameContainer[winners[0]] !== "X"
        && gameContainer[winners[1]] !== "X"
        && gameContainer[winners[2]] !== "X"
        && gameContainer[winners[0]] !== "O"
        && gameContainer[winners[1]] !== "O"
        && gameContainer[winners[2]] !== "O") {
        for (var index = 0; index < gameContainer.length; index++) {
            gameContainer[index].removeEventListener('click', move)
        };
        xWins = false;
        oWins = false;
        document.querySelector('.player1').innerText = "DRAW";
        document.querySelector('.player2').innerText = "DRAW";
        console.log('draw, play again');
        counter = 0;
    }
}

for (var index = 0; index < gameContainer.length; index++) {
    gameContainer[index].addEventListener('click', move)
};
resetBtn.addEventListener('click', resetAll);
restartBtn.addEventListener('click', restartAll);

