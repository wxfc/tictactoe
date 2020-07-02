console.log('lets play');

var gameContainer = document.querySelectorAll('.square');
var resetBtn = document.querySelector('.reset');
document.querySelector('.player1').classList.add("currentPlayer");

var resetAll = function () {
    gameContainer.forEach(function (square) {
        square.textContent = "";
    })
}

var playersGo = "X";

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

var checkForWinner = function () {
    winners.forEach(function(winners) {
        if (gameContainer[winners[0]].innerHTML === "X"
        && gameContainer[winners[1]].innerHTML === "X"
        && gameContainer[winners[2]].innerHTML === "X") {
            alert('Player 1 wins');
            resetAll();
            counter = 0;
        } else if (gameContainer[winners[0]].innerHTML === "O"
        && gameContainer[winners[1]].innerHTML === "O"
        && gameContainer[winners[2]].innerHTML === "O") {
            alert('Player 2 Wins');
            resetAll();
            counter = 0;
        } 
        clicker();
    });
}

counter = 0;
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
        console.log('draw, play again');
        counter = 0;
    }
}

for (var index = 0; index < gameContainer.length; index++) {
    gameContainer[index].addEventListener('click', move)
};
resetBtn.addEventListener('click', resetAll);
