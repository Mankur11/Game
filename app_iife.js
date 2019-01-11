(function () {
    var initialGameState = {
        currentDiceScore: 0,
        roundDiceScore: 0,
        holdedDiceScoreArray: [],
        activePlayerIndex: 0,
        isActiveGame: true
    };
    var gameState = {};

    // add player names and score to playerNames array 
    function generatePlayers(playerNames) { 
        return playerNames.map(function (playerName) {
            return {
                name: playerName,
                score: 0,
                activePlayerIndex:playerNames.indexOf(playerName)
            };
        });
    }

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
        return gameState;
    }

    function startNewGame() {
        setInitialGameState(['player 1', 'player 2'], 100);
        getInitialGameState();
    }


    function rollDice() {
        var generateRandomValueOfDice = Math.floor(Math.random() * 6) + 1;
        setGameState({
            currentDiceScore: generateRandomValueOfDice,
            roundDiceScore: getGameState().roundDiceScore + randomValueOfDice

        })
    }
    

     function holdScore() {
        holdedDiceScoreArray[activePlayerIndex] = roundDiceScore;
        setGameState({
            currentDiceScore: 0,
            roundDiceScore: 0,
            activePlayerIndex: 0
        })
     }
     

     init();
     console.log(getInitialGameState());

   
})();
