"Use strict";

const formEl = document.querySelector('.login-form');

const onFormElSubmit = (e) => {
    e.preventDefault();
    const objData = {}; 

    const { elements: { email, password } } = e.target;
    if (email.value === "" || password.value === '') {
        alert('please, write down the ariaes');
    }
    
    objData.email = email.value;
    objData.password = password.value;

    e.target.reset();
    console.log(objData);
};

formEl.addEventListener('submit', onFormElSubmit);

