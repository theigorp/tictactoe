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

    const blocks = document.querySelectorAll('.blocks');

    function handleClick(e) {
        console.log(e.target.id);
        if(playerTurn == 'X')
        {
            e.target.textContent = playerTurn;
            playerTurn = 'O';
        }
        else if(playerTurn == 'O')
        {
            e.target.textContent = playerTurn;
            playerTurn = 'X';
        }
    }

    blocks.forEach(block => {
        block.addEventListener('click', handleClick, {once: true});
    });
})();