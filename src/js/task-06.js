"Use strict";

const inputEl = document.querySelector('#validation-input');

const onInputElBlur = (e) => {
    if (Number(e.target.dataset.length) === inputEl.value.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
   }
};

inputEl.addEventListener('blur', onInputElBlur);

