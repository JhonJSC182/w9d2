// Add your import statements for View and Game here
import View from './ttt-view';
import Game from '../ttt_node/game';

document.addEventListener("DOMContentLoaded", () => {
  const rootEle = document.querySelector('.ttt')
  
  const game = new Game();
  const view = new View(game, rootEle);

  
  
});