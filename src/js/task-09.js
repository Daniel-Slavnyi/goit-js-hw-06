function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color'),
      valueColor = document.querySelector('.color');

const onBtnElClick = (e) => {
  document.body.style.backgroundColor = getRandomHexColor();
  
  valueColor.innerHTML = getRandomHexColor();
};

btnEl.addEventListener('click', onBtnElClick);

