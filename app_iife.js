(function () {
    var initialGameState = {
        players: [{
                name: 'player 1',
                score: 0
            },
            {
                name: 'player 2',
                score: 0
            }
        ],

        currentDiceScore: 0,
        roundDiceScore: 0,
        activePlayerIndex: 0,
        isActiveGame: true
    };
    var gameState = {};

    function generatePlayers(playerNames) {
        playerNames.map(function (playerName) {
            return {
                name: 'player 1',
                score: 0
            };
        });
    }
    console.log(generatePlayers(['player 1','player 2']));
    

    // function addStartNewGameClickListener() {}

    // function startNewGame() {}

    // function addRollDiceClickListener() {}

    // function rollDice() {}

    // function addHoldScoreClickListener() {}

    // function holdScore() {}

    // function init(config) {
    //     document.getElementById('score-0').textContent = config.firstPlayerScore;
    //     document.getElementById('score-1').textContent = config.secondPlayerScore;
    //     document.getElementById('current-0').textContent = config.firstPlayerCurrent;
    //     document.getElementById('current-1').textContent = config.secondPlayerCurrent;
    //     document.getElementById('name-0').textContent = config.firstPlayerName;
    //     document.getElementById('name-1').textContent = config.secondPlayerName;
    //     document.querySelector('.player-0-panel').classList.remove('winner');
    //     document.querySelector('.player-1-panel').classList.remove('winner');
    //     document.querySelector('.player-0-panel').classList.remove('active');
    //     document.querySelector('.player-0-panel').classList.add('active');
    //     document.querySelector('.player-1-panel').classList.remove('active');

    // }

    // init(initialGameState);

    // addStartNewGameClickListener();

    // startNewGame();

    // addRollDiceClickListener();

    // rollDice();

    // addHoldScoreClickListener();

    // holdScore();
})();