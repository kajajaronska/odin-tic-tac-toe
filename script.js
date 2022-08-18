let tiles = document.querySelectorAll(".gameboard__tile");

tiles.forEach(tile => {
    tile.addEventListener('click', function(e){
        e.target.innerHTML = 'X';
    })
})

const gameBoard = () => {

}

const Player = (playerName) => {
    
    
    return {playerName};
}