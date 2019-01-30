(function () {
    var initialGameState = {
        currentDiceScore: 0,
        roundDiceScore: 0,
        activePlayerIndex: 0,
        winnerPlayerIndex: null,
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
            activePlayerIndex: getNextActivePlayerIndex(),
            currentDiceScore: 0,
            roundDiceScore: 0,
            isOnePointRolledOnDice: false
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

    function isOnePointRolledOnDice() {
        return getGameState().currentDiceScore === 1;
    }

    function rollDice() {
        var currentDiceScore = getRandomValueOfDice();
        var state = getGameState();
        setGameState({
            currentDiceScore: currentDiceScore,
            roundDiceScore: getGameState().roundDiceScore + currentDiceScore,
            isActiveGame: true
        });

        if (isOnePointRolledOnDice()) {
            setGameState({
                isOnePointRolledOnDice: true
            });
            setTimeout(nextPlayer, 2000);   
        } else {
            setGameState({
                isOnePointRolledOnDice: false
            });
        }
    }

    function renderPlayerRolledOneOnDice(index) {
        var state = getGameState();
        if (state.isOnePointRolledOnDice) {
            document.querySelector('.rolled-one').classList.add('rolled-one-message');
            document.querySelector('.rolled-one').textContent = 'player-' + index + ' rolled 1';
        } else {
            document.querySelector('.rolled-one').classList.remove('rolled-one-message');
        }
    }

    function renderPlayers() {
        var state = getGameState();
        state.players.map(function (player, index) {
            if (state.isActiveGame) {
                document.querySelector('#name-' + index).textContent = player.name;
                document.querySelector('.player-' + index + '-panel').classList.remove('winner');
                document.getElementById('score-' + state.activePlayerIndex).textContent = state.roundDiceScore;
                document.getElementById('current-' + index).textContent = player.score;
            } else if (index === state.winnerPlayerIndex) {
                document.querySelector('#name-' + index).textContent = 'Winner!';
                document.querySelector('.player-' + index + '-panel').classList.add('winner');
            }

            if (index === state.activePlayerIndex) {
                document.getElementById('score-' + index).textContent = state.roundDiceScore;
                document.querySelector('.player-' + index + '-panel').classList.add('active');
            } else {
                document.getElementById('score-' + index).textContent = '0';
                document.querySelector('.player-' + index + '-panel').classList.remove('active');
            }

            document.getElementById('current-' + index).textContent = player.score;
        })
        renderPlayerRolledOneOnDice(state.activePlayerIndex + 1);
    }

    function isGameFinished() {
        var state = getGameState();
        if (state.players[state.activePlayerIndex].score >= state.winScore) {
            return true;
        }
        return false;
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
        })
        setGameState({
            players: newPlayers,
        });
        if (isGameFinished()) {
            setGameState({
                isActiveGame: false,
                winnerPlayerIndex: state.activePlayerIndex
            })
        } else {
            nextPlayer();
        }
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