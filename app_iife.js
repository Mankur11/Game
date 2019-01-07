(function () {
    var initialGameState = {
        currentDiceScore: 0,
        roundDiceScore: 0,
        holdedDiceScoreArray: [],
        activePlayerIndex: 0,
        isActiveGame: true
    };
    var gameState = {};

    function generatePlayers(playerNames) { // add player names and score to playernames array 
        return playerNames.map(function (playerName) {
            return {
                name: playerName,
                score: 0,
                activePlayerIndex:playerNames.indexOf(playerName)
            };
        });
    }


    function init(playerNames, winScore) { // expand initialGameState obj 
        var gameState = Object.assign(initialGameState, { // with playernames array elements
            players: generatePlayers(playerNames),
            winScore: winScore
        });
        setGameState(gameState);
    }

    function setGameState(state) { // expand gameState obj 
        gameState = Object.assign(gameState, state); // with properties from state
    }

    function getGameState() {
        return gameState;
    }

    function startNewGame() {
        setGameState(initialGameState);
        init(['player 1', 'player 2'], 100);
    }
    function addStartNewGameClickListener(){
        document.querySelector('.btn-new').addEventListener('click', startNewGame);
    }


    function rollDice() {
        var generateRandomValueOfDice = Math.floor(Math.random() * 6) + 1;
        setGameState({
            currentDiceScore: generateRandomValueOfDice,
            roundDiceScore: getGameState().roundDiceScore + randomValueOfDice

        })
    }
    function addRollDiceClickListener(){
        document.querySelector('.btn-roll').addEventListener('click', rollDice);
    }

     function holdScore() {
        holdedDiceScoreArray[activePlayerIndex] = roundDiceScore;
        setGameState({
            currentDiceScore: 0,
            roundDiceScore: 0,
            activePlayerIndex: 0
        })
     }
     function addHoldScoreClickListener(){
        document.querySelector('.btn-new').addEventListener('click', holdScore);
    }

     init(['player 1', 'player 2'], 100);
     console.log(getGameState());

   
})();