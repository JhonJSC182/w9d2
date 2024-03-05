class View {
  constructor(game, el) {
    this.setupBoard();
  }
  
  setupBoard() {
    const boardSize = this.game.board.grid.length;
    const board = document.createElement('ul');

    for (let row = 0; row < boardSize; row++) {
      for (let column = 0; column < boardSize; column++) {
        
      }
    }
  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;