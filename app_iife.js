(function () {
    var initialGameState = {
        scores: [0, 0],
        roundScore: 0,
        activePlayer: 0,
        isActiveGame: true,
        previousOnDice: 0,
        isVisibleWinScoreInput: 'hide',
        isVisibleDice: 'none',
        firstPlayerScore: 0,
        secondPlayerScore: 0,
        firstPlayerCurrent: 0,
        secondPlayerCurrent: 0,
        firstPlayerName: 'Player 1',
        secondPlayerName: 'Player 2',
    };
    var gameState = {};

    function addWinScoreInputClickListener() {}

    function winScoreInputHide() {}

    function addStartNewGameClickListener() {}

    function startNewGame() {}

    function addRollDiceClickListener() {}

    function rollDice() {}

    function addHoldScoreClickListener() {}

    function holdScore() {}

    function init(config) {
        document.getElementById('score-0').textContent = config.firstPlayerScore;
        document.getElementById('score-1').textContent = config.secondPlayerScore;
        document.getElementById('current-0').textContent = config.firstPlayerCurrent;
        document.getElementById('current-1').textContent = config.secondPlayerCurrent;
        document.getElementById('name-0').textContent = config.firstPlayerName;
        document.getElementById('name-1').textContent = config.secondPlayerName;
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.winning-score').classList.remove('hide');

    }

    init(initialGameState);

     addWinScoreInputClickListener(); 

     winScoreInputHide(); 

     addStartNewGameClickListener(); 

     startNewGame(); 

     addRollDiceClickListener(); 

     rollDice(); 

     addHoldScoreClickListener(); 

     holdScore(); 
})();