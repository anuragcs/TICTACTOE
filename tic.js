let player = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const message = document.querySelector('#message');

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (board[index] === '') {
            board[index] = player;
            cell.innerHTML = player;
            if (checkWinner(player)) {
               message.innerHTML = `${player} won the game!`;
                cells.forEach((cell) => {
                    cell.removeEventListener('click', () => {});
                });
            } else if (board.every((value) => value !== '')) {
                message.innerHTML = 'Game over!';
            } else {
                player = player == 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWinner(player) {
    return winningCombinations.some((combination) => {
        return combination.every((index) => {
            return board[index] === player;
        });
    });
}
