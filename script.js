const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (let i = 0; i < winPatterns.length; i++) {
        const [a, b, c] = winPatterns[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            gameActive = false;
            message.innerText = `${currentPlayer} wins!`;
            return;
        }
    }
    if (!gameState.includes('')) {
        gameActive = false;
        message.innerText = "It's a draw!";
    }
}

function cellClicked(index) {
    if (!gameActive || gameState[index] !== '') return;
    gameState[index] = currentPlayer;
    cells[index].innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetBoard() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    message.innerText = '';
    cells.forEach(cell => cell.innerText = '');
}
