import Board from './board.js';

const board = new Board(4);
const fieldBoard = board.createField();
const items = Array.from(fieldBoard.querySelectorAll('.el'))

const randomIndex = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createImg = function () {
  const img = document.createElement('img');
  img.src = '../src/img/goblin.png';
  img.classList.add('picture');
  return img;
};

const picture = createImg();

setInterval(() => {
    const index = randomIndex(0, 15);
    if(items[index].children) {
       items[index].textContent = '';
    }
    items[index].appendChild(picture)
}, 800);
