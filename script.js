const Gameboard = (() => {
    const grid = document.querySelector('.game');
    const buttonX  = document.querySelector('#player-x');
    const buttonO  = document.querySelector('#player-o');
    const startButton = document.querySelector('#start');
    const startControlsEl = document.querySelector('.start-controls');
    let playerChoice, playerTurn;
    const statusEl = document.querySelector('.status');

    startControlsEl.addEventListener('click', (e) => {
        if(e.target.id == 'player-x')
        {
            console.log('Player choose X');
            playerChoice = 'X';
        }
        else if(e.target.id == 'player-o')
        {
            console.log('Player choose O');
            playerChoice = 'O';
        }
        else if(e.target.id == 'start')
        {
            playerTurn = playerChoice;
            startControlsEl.style.display = 'none';
            statusEl.textContent = `Player ${playerChoice} is on the move`;
        }
    });

    const cellElements = document.querySelectorAll('[data-cell]');

    function handleClick(e) {
        const cell = e.target;
        const currentPlayer = playerTurn;
        placeMark(cell, currentPlayer);
    }

    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once: true});
    });
})();