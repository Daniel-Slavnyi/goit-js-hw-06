'Use strict';

const inputEl = document.querySelector('#font-size-control'),
      textEl = document.querySelector('#text');
      
const onInputElChangeSize = (e) => {
    console.log(e.target.value);
    textEl.style.fontSize = e.target.value + "px";
};

inputEl.addEventListener('input', onInputElChangeSize);