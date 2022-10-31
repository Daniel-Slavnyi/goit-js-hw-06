const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');


ingredients.forEach(el => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = el;
    listEl.append(itemEl);
});