const Gameboard = (() => {
    const grid = document.querySelector('.game');
    const buttonX  = document.querySelector('#player-x');
    const buttonO  = document.querySelector('#player-o');
    const startButton = document.querySelector('#start');
    const startControlsEl = document.querySelector('.start-controls');
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

    function handleClick(e) {
        const block = e.target;
        const currentMarker = xTurn ? 'x' : 'o';
        placeMarker(block, currentMarker);
        if(checkResult()==1) console.log('o is winner')
        else if(checkResult()==2) console.log('x is winner');
        switchTurns();
        switchHover();
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

    function checkResult(currentMarker) {
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

    blocks.forEach(block => {
        block.addEventListener('click', handleClick, {once: true});
    });
})();