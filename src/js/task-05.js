'Use strict';

const input = document.querySelector('#name-input'),
      nameUser = document.querySelector('#name-output');


const onInputChangeName = (e) => {
    nameUser.textContent = input.value;

    if (input.value === '') {
        nameUser.textContent = 'Anonymous';
    }
};

input.addEventListener('input', onInputChangeName);