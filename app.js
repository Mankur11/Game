(function () {
    var initialGameState = {
        currentDiceScore: 0,
        roundDiceScore: 0,
        activePlayerIndex: 0,
        isActiveGame: true
    };
    var gameState = {};

    // add player names and score to playerNames array 
    function generatePlayers(playerNames) {
        return playerNames.map(function (playerName) {
            return {
                name: playerName,
                score: 0
            };
        });
    }

    function getNextPlayerIndex() {
        var state = getGameState();
        return state.players.length - 1 === state.activePlayerIndex ? 0 : state.activePlayerIndex + 1;
    }

    // return extended initialGameState object by generated players[] and winScore
    function generateInitialGameState(playerNames, winScore) {
        return Object.assign(initialGameState, {
            players: generatePlayers(playerNames),
            winScore: winScore
        });
    }

    function getGameState() {
        return gameState;
    }

    function renderRolledDice() {
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + getRandomValueOfDice() + '.png';
    }

    function render(){
        renderRolledDice();
    }

    function setGameState(newGameState) {
        gameState = Object.assign(gameState, newGameState);
        console.log(Object.assign({}, gameState));
        render();
    }

    function addStartNewGameClickListener() {
        document.querySelector('.btn-new').addEventListener('click', startNewGame);
    }

    function addRollDiceClickListener() {
        document.querySelector('.btn-roll').addEventListener('click', rollDice);
    }

    function addHoldScoreClickListener() {
        document.querySelector('.btn-hold').addEventListener('click', holdScore);
    }

    function startNewGame() {
        setGameState(
            generateInitialGameState(['player 1', 'player 2'], 100)
        );
    }

    function getRandomValueOfDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function rollDice() {
        var currentDiceScore = getRandomValueOfDice();
        setGameState({
            currentDiceScore: currentDiceScore,
            roundDiceScore: getGameState().roundDiceScore + currentDiceScore
        })
    }

    function holdScore() {
        players[activePlayerIndex].score = roundDiceScore;
        setGameState({
            currentDiceScore: 0,
            roundDiceScore: 0,
            activePlayerIndex: getNextPlayerIndex()
        })
    }

    function init() {
        startNewGame();
        addStartNewGameClickListener();
        addRollDiceClickListener();
        addHoldScoreClickListener();
        rollDice();
        rollDice();
    }

    init();
})();
