import Game from "./game.js"
import GameView from "./gameView.js"



let game = new Game();
let gameView = new GameView();






let tiles = document.querySelectorAll(".board-tile")
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
        document.querySelector(".restart")
.addEventListener("click", () => {
    onRestartClick();
})
    })
})


function onTileClick(i){

    game.makeMove(i);
    gameView.updateBoard(game);

}

function onRestartClick() {
    
    game = new Game();
    gameView.updateBoard(game);

}



