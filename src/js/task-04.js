'Use strict';

const btnDecr = document.querySelector('[data-action="decrement"]'),
      btnIncr = document.querySelector('[data-action="increment"]'),
      score = document.querySelector('#value');
      
let counterValue = 0;

const onBtnDecrClick = (e) => {
    counterValue -= 1;
    score.textContent = counterValue;
};

const onBtnIncrClick = (e) => {
    counterValue += 1;
    score.textContent = counterValue;
};

btnDecr.addEventListener('click', onBtnDecrClick);
btnIncr.addEventListener('click', onBtnIncrClick);
