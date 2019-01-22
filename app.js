(function () {
    var initialGameState = {
        currentDiceScore: 0,
        roundDiceScore: 0,
        activePlayerIndex: 0,
        isActiveGame: false
    };

    var gameState = {};

    function getGameState() {
        return gameState;
    }

    function generateInitialGameState(playerNames, winScore) {
        return Object.assign(initialGameState, {
            players: generatePlayers(playerNames),
            winScore: winScore
        });
    }

    function setGameState(newGameState) {
        gameState = Object.assign(gameState, newGameState);
        render();
    }

    function generatePlayers(playerNames) {
        return playerNames.map(function (playerName) {
            return {
                name: playerName,
                score: 0
            };
        });
    }

    function getNextActivePlayerIndex() {
        var state = getGameState();
        return state.players.length - 1 === state.activePlayerIndex ? 0 : state.activePlayerIndex + 1;
    }

    function nextPlayer(){
        var nextActivePlayerIndex = getNextActivePlayerIndex();
        setGameState({
        activePlayerIndex : nextActivePlayerIndex
        })
    }

    function render() {
        renderPlayerScore();
        renderRolledDice();
    }

    function renderRolledDice() {
        var diceDOM = document.querySelector('.dice');
        var state = getGameState();
        if (state.isActiveGame && state.currentDiceScore > 0) {
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + state.currentDiceScore + '.png';
        } else {
            diceDOM.style.display = 'none';
        }
    }

    function getRandomValueOfDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function rollDice() {
        var currentDiceScore = getRandomValueOfDice();
        setGameState({
            currentDiceScore: currentDiceScore,
            roundDiceScore: getGameState().roundDiceScore + currentDiceScore,
            isActiveGame: true
        })
    }

    function renderPlayerScore() {
        var state = getGameState();
        var currentScore = state.players[state.activePlayerIndex].score;
        if (state.isActiveGame) {
            document.getElementById('score-' + state.activePlayerIndex).textContent = state.roundDiceScore;
            document.getElementById('current-' + state.activePlayerIndex).textContent = currentScore;
        } else {
            state.players.map(function (player, index) {
                document.getElementById('score-' + index).textContent = '0';
                document.getElementById('current-' + index).textContent = '0';
            });
        }
    }

    function startNewGame() {
        setGameState(
            generateInitialGameState(['player 1', 'player 2'], 100)
        );
    }

    function holdScore() {
        var state = getGameState();
        var newPlayers = state.players.map(function (player, index) {
            if (index === state.activePlayerIndex) {
                var newScore = player.score + state.roundDiceScore;
                return {
                    name: player.name,
                    score: newScore
                }
            }
            return player;
        })
        setGameState({
            players: newPlayers,
            currentDiceScore: 0,
            roundDiceScore: 0
        });
        nextPlayer();
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

    function init() {
        startNewGame();
        addStartNewGameClickListener();
        addRollDiceClickListener();
        addHoldScoreClickListener();
    }

    init();
})();
