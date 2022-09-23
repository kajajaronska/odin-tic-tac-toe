// Factory function creating players
const Player = (name,symbol) => {
    let score = 0;
    const getName = () => name;
    const getSymbol = () => symbol;
    const getScore = () => score;
    return {
        getName,getScore,getSymbol   //shorthand
    }
}

const player1 = Player('Kaja','X');
const player2 = Player('Michael','O');

// console.log(player1.getScore())


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

// activePlayer = 'Kaja';

// console.log(activePlayer);

// Gameboard - module, because we only need one
const game = (() => {

    let board = {
        // [0, 1, 2]
    a: ['X','O','X'],
    b: ['O','X','O'],
    c: ['O','O','X']}
    
    // Function that will render the contents of the gameboard array to the webpage
    let displayBoard = () => {
        
    }


    return {board}

})()


// console.log(gameBoard.a)


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



// const Player = (name, level) => {
//     let health = level * 2;
//     const getLevel = () => level;
//     const getName  = () => name;
//     const die = () => {
//       // uh oh
//     };
//     const damage = x => {
//       health -= x;
//       if (health <= 0) {
//         die();
//       }
//     };
//     const attack = enemy => {
//       if (level < enemy.getLevel()) {
//         damage(1);
//         console.log(`${enemy.getName()} has damaged ${name}`);
//       }
//       if (level >= enemy.getLevel()) {
//         enemy.damage(1);
//         console.log(`${name} has damaged ${enemy.getName()}`);
//       }
//     };
//     return {attack, damage, getLevel, getName};
//   };

//   const player1 = Player('Kaja','3');

//   console.log(player1.getLevel())