(function () {
    var initialGameState = {
        currentDiceScore: 0,
        roundDiceScore: 0,
        activePlayerIndex: 0,
        isActiveGame: true
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

    function nextPlayer() {
        setGameState({
            activePlayerIndex: getNextActivePlayerIndex()
        })
    }

    function render() {
        renderPlayers();
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

    function renderPlayers() {
        var state = getGameState();
        state.players.map(function (player, index) {
            if (isWinner(player)) {
                document.querySelector('#name-' + index).textContent = 'Winner!';
                document.querySelector('.player-' + index + '-panel').classList.add('winner');
            } else {
                document.querySelector('#name-' + index).textContent = player.name;
                document.querySelector('.player-' + index + '-panel').classList.remove('winner');
                document.getElementById('current-' + index).textContent = player.score;
                document.getElementById('score-' + index).textContent = '0';
            }
        })
        document.getElementById('score-' + state.activePlayerIndex).textContent = state.roundDiceScore;
    }

    function isWinner(player) {
        var state = getGameState();
        var activePlayer = state.players[state.activePlayerIndex];
        return !isActiveGame() && activePlayer.name === player.name;
    }

    function isActiveGame() {
        var state = getGameState();
        var activePlayer = state.players[state.activePlayerIndex];
        if (activePlayer.score >= state.winScore) {
            return false;
        }
        return true;
    }

    function startNewGame() {
        setGameState(
            generateInitialGameState(['player 1', 'player 2'], 20)
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
        });
        setGameState({
            players: newPlayers,
            currentDiceScore: 0,
            roundDiceScore: 0  
        });
        setGameState({  
            isActiveGame: isActiveGame() 
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