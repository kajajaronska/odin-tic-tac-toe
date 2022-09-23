// Factory function creating players
const Player = (name,symbol) => {
    let score = 0;
    // Add variables to represent activePlayer, roundwinnner, gamewinner true/false 
    const getName = () => name;
    const getSymbol = () => symbol;
    const getScore = () => score;
    return {
        getName,getScore,getSymbol   //shorthand
    }
}


const player1 = Player('Kaja','X');
const player2 = Player('Michael','O');


// Game flow module returning object - activePlayer
const gameFlow = (()=> {
    let activePlayer = player1;

    let roundWinner; // after every round 
    let gameWinner;
    let roundCounter; // decrease by one after every round, once ZERO - announce game winner
    return {
        activePlayer,
        roundWinner,
        gameWinner,
        roundCounter
    }
})();


// Gameboard - module, because we only need one
const gameBoard = (() => {

    // let board = {
    //     // [0, 1, 2]
    // a: ['1','2','3'],
    // b: ['4','5','6'],
    // c: ['7','8','9']}

    let board = new Array (9);
    let tiles = document.querySelectorAll(".gameboard__tile");
    
    // Function that will render the contents of the gameboard array to the webpage
    let displayBoard = () => {
        
        for (let i=0; i < tiles.length; i++) {        
            tiles[i].textContent = board[i];
        }
               
    }
    displayBoard();

    return {
        getTiles:() =>  tiles,
        getBoard: () => board
    };  

})()


// Display Controller - modular pattern, because we only need one
const displayController = (() => {

    // Enabling active user to place his mark on the board
    gameBoard.getTiles().forEach(tile => {
        tile.addEventListener('click',(e)=>{
            let position = e.path[0].dataset.indexNumber-1;
            let symbol = gameFlow.activePlayer.getSymbol()
         
            tile.textContent = symbol; // update the display
            gameBoard.getBoard()[position] = symbol; // update the board array

            console.log(gameBoard.getBoard());
           
        })
    })

})()



