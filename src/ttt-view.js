class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.el.addEventListener('click', this.handleClick);
  }
  
  setupBoard() {
    const board = document.createElement('ul');

    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        // inside, we want to create the li on the documents
        // look up dataset in order to create a data attribute on the li
          // so we can give the li a position attribute
          // basically assigning a dynamic [row,col] for every li
          const innerList = document.createElement('li')
          
          innerList.dataset.row = row
          innerList.dataset.column = column
         
           //append the li's to the ul 
          board.appendChild(innerList)
      }
    }
    //outside of the loop, we append ul to the element
    this.el.appendChild(board)
  }
  //figure out what position
  //play it if its valid
  //add it onto the board
  handleClick(e) {
    //target is where the position originated
    e.target.dataset.row;
    e.target.dataset.column;
    console.log(e.target);

  }

  makeMove(square) {
    
  }
  
  handleGameOver() {
  }
}

export default View;