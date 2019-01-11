(function () {
    var initialGameState = {
        currentDiceScore: 0,
        roundDiceScore: 0,
        holdedDiceScoreArray: [],
        activePlayerIndex: 0,
        isActiveGame: true
    };
    var gameState = {};

<<<<<<< HEAD
    // add player names and score to playerNames array 
    function generatePlayers(playerNames) { 
=======
    function generatePlayers(playerNames) { // add player names and score to playernames array 
>>>>>>> df3f6d955948d2c388dd2c289640c22995f8d0dd
        return playerNames.map(function (playerName) {
            return {
                name: playerName,
                score: 0,
                activePlayerIndex:playerNames.indexOf(playerName)
            };
        });
    }

<<<<<<< HEAD
    // expand initialGameState obj with playerNames array elements
    // and return extended GameState variable which already includes players and winScore
    
    function setInitialGameState (playerNames, winScore){
        var gameState = Object.assign(initialGameState, { 
            players: generatePlayers(playerNames),
            winScore: winScore
        });
    }

    function getInitialGameState (){
        return gameState;
    }

    function init() { 
        setInitialGameState(gameState);

        function addStartNewGameClickListener(){
            document.querySelector('.btn-new').addEventListener('click', startNewGame);
        }
        function addRollDiceClickListener(){
            document.querySelector('.btn-roll').addEventListener('click', rollDice);
        }
        function addHoldScoreClickListener(){
            document.querySelector('.btn-new').addEventListener('click', holdScore);
        }
    
    }

    // expand gameState obj with properties from state
    function setInitialGameState(state) { 
        gameState = Object.assign(gameState, state); 
    }

    function getInitialGameState() {
=======

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
>>>>>>> df3f6d955948d2c388dd2c289640c22995f8d0dd
        return gameState;
    }

    function startNewGame() {
<<<<<<< HEAD
        setInitialGameState(['player 1', 'player 2'], 100);
        getInitialGameState();
=======
        setGameState(initialGameState);
        init(['player 1', 'player 2'], 100);
    }
    function addStartNewGameClickListener(){
        document.querySelector('.btn-new').addEventListener('click', startNewGame);
>>>>>>> df3f6d955948d2c388dd2c289640c22995f8d0dd
    }


    function rollDice() {
        var generateRandomValueOfDice = Math.floor(Math.random() * 6) + 1;
        setGameState({
            currentDiceScore: generateRandomValueOfDice,
            roundDiceScore: getGameState().roundDiceScore + randomValueOfDice

        })
    }
<<<<<<< HEAD
    
=======
    function addRollDiceClickListener(){
        document.querySelector('.btn-roll').addEventListener('click', rollDice);
    }
>>>>>>> df3f6d955948d2c388dd2c289640c22995f8d0dd

     function holdScore() {
        holdedDiceScoreArray[activePlayerIndex] = roundDiceScore;
        setGameState({
            currentDiceScore: 0,
            roundDiceScore: 0,
            activePlayerIndex: 0
        })
     }
<<<<<<< HEAD
     

     init();
     console.log(getInitialGameState());

   
})();
=======
     function addHoldScoreClickListener(){
        document.querySelector('.btn-new').addEventListener('click', holdScore);
    }

     init(['player 1', 'player 2'], 100);
     console.log(getGameState());

   
})();
>>>>>>> df3f6d955948d2c388dd2c289640c22995f8d0dd
