function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input[type="number"]'),
  btnAdd = document.querySelector("[data-create]"),
  btnRem = document.querySelector("[data-destroy]"),
  boxEl = document.querySelector("#boxes");

function createBoxes(amount) {
  let size = 30;
  let boxes = [];

  for (let i = 0; i < amount; i += 1) {
    size += 10;

    const boxEl = document.createElement("div");
    boxEl.classList.add("box");
    boxEl.style.width = size + "px";
    boxEl.style.height = size + "px";
    boxEl.style.backgroundColor = getRandomHexColor();

    boxes.push(boxEl);
  }

  boxEl.append(...boxes);
}

const onBtnAddClick = () => {
  createBoxes(Number(inputEl.value));
  inputEl.value = "";
};

const onBtnRemClick = () => {
  boxEl.innerHTML = "";
};

btnAdd.addEventListener("click", onBtnAddClick);
btnRem.addEventListener("click", onBtnRemClick);
