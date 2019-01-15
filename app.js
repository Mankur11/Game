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

    function setGameState(newGameState) {
        gameState = Object.assign(gameState, newGameState);
    }

    function addStartNewGameClickListener() {
        document.querySelector('.btn-new').addEventListener('click', startNewGame);
    }

    function addRollDiceClickListener() {
        document.querySelector('.btn-roll').addEventListener('click', rollDice);
    }

    function addHoldScoreClickListener() {
        document.querySelector('.btn-new').addEventListener('click', holdScore);
    }

    function init() {
        addStartNewGameClickListener();
        addRollDiceClickListener();
        addHoldScoreClickListener();
    }

    // expand gameState obj with properties from state
    function generateInitialGameState(state) {
        gameState = Object.assign(gameState, state);
    }

    function startNewGame() {
        generateInitialGameState(['player 1', 'player 2'], 100);
        getInitialGameState();
    }

    function generateRandomValueOfDice() {
        var generateRandomValueOfDice = Math.floor(Math.random() * 6) + 1;
    }

    function rollDice() {
        generateRandomValueOfDice();
        setGameState({
            currentDiceScore: generateRandomValueOfDice,
            roundDiceScore: getGameState().roundDiceScore + randomValueOfDice
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

    init();
    console.log(getInitialGameState());
})();