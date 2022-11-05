function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color'),
      valueColor = document.querySelector('.color');

const onBtnElClick = (e) => {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  
  valueColor.innerHTML = randomColor;
};

btnEl.addEventListener('click', onBtnElClick);

