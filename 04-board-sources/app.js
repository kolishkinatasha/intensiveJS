const board = document.querySelector('#board');
const SQUARE_NUMBER = 500;
const colors = ['#99b898', '#fecea8', '#ff847c', '#e84a5f', '#2a363b'];

for(let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    }) 

    board.append(square);
}

function setColor(elem) {
    const color = getRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d';
    elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}