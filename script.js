let tiles = document.querySelectorAll(".gameboard__tile");

tiles.forEach(tile => {
    tile.addEventListener('click', function(e){
        e.target.innerHTML = 'X';
        console.log('Clicked')
    })
    console.log("Hello")
})

const gameBoard = () => {

}

const Player = (playerName) => {
    
    
    return {playerName};
}