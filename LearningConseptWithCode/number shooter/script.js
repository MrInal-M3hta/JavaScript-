let numberContainer = document.querySelector('.numberContainer');
let timerValue = document.querySelector('.timerValue');
let targetValue = document.querySelector('.targetValue');
let scoreValue = document.querySelector('.scoreValue');
let numberOfCircles = 85;
let timer = 5;
let target;

restartGame();
startTimer();

function restartGame() {
    timerReset();
    generateTarget();
    generateNumbers();
    scoreValue.innerText = 0;
}

function timerReset() {
    timerValue.innerText = timer
    timer = 5;
}

function startTimer() {
    setInterval(() => {
        if (timer <= 0) {
            numberContainer.innerHTML = `
                <div>Game Over 
                <button onclick=restartGame()>Reset Game</button>
                </div>
                `;
            return;
        }
        timer--;
        timerValue.innerText = timer;
    }, 1000);
}

function generateTarget() {
    target = Math.ceil(Math.random() * 10)
    targetValue.innerText = target;
}

function generateNumbers() {
    numberContainer.innerHTML = ''
    for (let i = 1; i <= numberOfCircles; i++) {

        let divElem = document.createElement('div')
        divElem.className = 'circle';
        let number = Math.ceil(Math.random() * 10)
        divElem.innerText = number;

        numberContainer.append(divElem)
    }
}

numberContainer.addEventListener('click', function (event) {
    if (event.target.className === 'circle') {
        let number = Number(event.target.innerText)
        if (target === number) {
            let sv = Number(scoreValue.innerText)
            sv += 10;
            scoreValue.innerText = sv;
        }
        generateTarget();
    }
})