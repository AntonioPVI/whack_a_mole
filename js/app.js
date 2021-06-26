const square = document.querySelector('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;

function randomSquare() {
    square.forEach(element => {
        element.classList.remove('mole');
    });

    let randomPosition = square[Math.floor(Math.random()*9)];
    randomPosition.classList.add('mole');

    //asign id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id;

    square.forEach(element => {
        element.addEventListener('mouseup', () => {
            if (element.id === hitPosition) {
                result += result;
                score.textContent = result;
            }
        });
    });
}