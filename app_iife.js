(function () {
    var initialGameState = {
        diceScores: [0, 0],
        roundDiceScore: 0,
        activePlayer: 0,
        isActiveGame: true,
        firstPlayerScore: 0,
        secondPlayerScore: 0,
        firstPlayerCurrent: 0,
        secondPlayerCurrent: 0,
        firstPlayerName: 'Player 1',
        secondPlayerName: 'Player 2',
    };
    var gameState = {};

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

    }

    init(initialGameState);

     addStartNewGameClickListener(); 

     startNewGame(); 

     addRollDiceClickListener(); 

     rollDice(); 

     addHoldScoreClickListener(); 

     holdScore(); 
})();