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
            grid.classList.add(playerTurn);
            startControlsEl.style.display = 'none';
            statusEl.textContent = `Player ${playerChoice} is on the move`;
            handleHover();
        }
    });

    const blocks = document.querySelectorAll('.blocks');

    function handleHover() {
        if(grid.classList.contains('X'))
        {
            blocks.forEach(block => {
                block.addEventListener('mouseover', (e) => {
                    e.target.style.color = 'lightgrey';
                    e.target.textContent = 'X';
                });
                block.addEventListener('mouseout', (e) => {
                    e.target.style.color = '';
                    e.target.textContent = '';
                });
            });
        }
        else if(grid.classList.contains('O'))
        {
            blocks.forEach(block => {
                block.addEventListener('mouseover', (e) => {
                    e.target.style.color = 'lightgrey';
                    e.target.textContent = 'O';
                });
                block.addEventListener('mouseout', (e) => {
                    e.target.style.color = '';
                    e.target.textContent = '';
                });
            });
        }
    }

    (function handleClick() {
        blocks.forEach(block => {
            block.addEventListener('click', (e) => {
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
            }, {once: true});
        });
    })();
})();