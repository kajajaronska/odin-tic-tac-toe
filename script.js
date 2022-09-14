// Factory function creating players
const player = (name,symbol) => {
    return {
        name,symbol,    //shorthand
        score: 0
    }
}

const player1 = player('Kaja','X');
const player2 = player('Michael','O');

console.log(player1,player2)

// Game flow module returning object - activePlayer
const gameFlow = (()=> {
    let activePlayer;
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
    return {
    // [0, 1, 2]
    a: ['','',''],
    b: ['','',''],
    c: ['','','']}
})()

console.log(gameBoard)

// Display Controller - module, because we only need one
const displayController = (() => {
    let tiles = document.querySelectorAll(".gameboard__tile");

    tiles.forEach(tile => {
        tile.addEventListener('click', function(e){
            // e.target.innerHTML = 'X';
            console.log(e.target)
        })
    })

})()
