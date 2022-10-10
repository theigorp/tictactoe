const Gameboard = (() => {
    const grid = document.querySelector('.game');
    const buttonX  = document.querySelector('#player-x');
    const buttonO  = document.querySelector('#player-o');
    const startButton = document.querySelector('#start');
    const startControlsEl = document.querySelector('.start-controls');
    const msgContainer = document.querySelector('.message-container');
    const messageEl = document.querySelector('.message');
    const restartButton = document.querySelector('.restart');
    let playerChoice, xTurn;

    const combinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ]

    startControlsEl.addEventListener('click', (e) => {
        if(e.target.id == 'player-x')
        {
            console.log('Player choose X');
            playerChoice = 'x';
            xTurn = true;
        }
        else if(e.target.id == 'player-o')
        {
            console.log('Player choose O');
            playerChoice = 'o';
            xTurn = false;
        }
        else if(e.target.id == 'start')
        {
            grid.classList.add(playerChoice);
            startControlsEl.style.display = 'none';
        }
    });

    const blocks = document.querySelectorAll('.blocks');

    blocks.forEach(block => {
        block.addEventListener('click', handleClick, {once: true});
    });

    function handleClick(e) {
        const block = e.target;
        const currentMarker = xTurn ? 'x' : 'o';
        placeMarker(block, currentMarker);
        if(checkResult()==1)
        {
            msgContainer.style.display = 'flex';
            messageEl.textContent = 'The winner is O!';
        }
        else if(checkResult()==2)
        {
            msgContainer.style.display = 'flex';
            messageEl.textContent = 'The winner is X!';
        }
        else if(isDraw())
        {
            msgContainer.style.display = 'flex';
            messageEl.textContent = 'Draw!';
        }
        switchTurns();
        switchHover();
        restartButton.addEventListener('click', resetGame);
    }

    function placeMarker(block, currentMarker) {
        block.classList.add(currentMarker);
    }

    function switchTurns() {
        xTurn = !xTurn;
    }

    function switchHover() {
        grid.classList.remove('x');
        grid.classList.remove('o');

        if(xTurn) grid.classList.add('x');
        else if(!xTurn) grid.classList.add('o');
    }

    function isDraw() {
        return [...blocks].every(block => {
            return block.classList.contains('o') || block.classList.contains('x');
        })
    }

    function checkResult() {
        let winner;
        if(checkO()) return winner = 1;
        if(checkX()) return winner = 2;
    }

    function checkX() {
        return combinations.some(combination => {
            return combination.every(index => {
                return blocks[index].classList.contains('x');
            });
        });
    }

    function checkO() {
        return combinations.some(combination => {
            return combination.every(index => {
                return blocks[index].classList.contains('o');
            });
        });
    }

    function resetGame() {
        blocks.forEach(block => {
            block.classList.remove('o');
            block.classList.remove('x');
            block.removeEventListener('click', handleClick);
            block.addEventListener('click', handleClick, {once: true});
        });
        grid.classList.remove('x');
        grid.classList.remove('o');
        msgContainer.style.display = 'none';
        startControlsEl.style.display = 'flex';
    }
})();