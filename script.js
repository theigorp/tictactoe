const Gameboard = (() => {
    const grid = document.querySelector('.game');
    const buttonX  = document.querySelector('#player-x');
    const buttonO  = document.querySelector('#player-o');
    const startButton = document.querySelector('#start');
    const startControlsEl = document.querySelector('.start-controls');
    let playerChoice;

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
            //funkcija koja ce da hoveruje x ili o oko cursora
            startControlsEl.style.display = 'none';
        }
    });
    
})();