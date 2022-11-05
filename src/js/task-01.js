'use strict';

const categories = document.querySelectorAll('li.item'),
      arrCategories = [...categories];

console.log('Number of categories:', categories.length);

function getTextOfTitle(arr) {
    arr.map((el => {
        const title = el.firstElementChild.textContent;
        const num = el.querySelectorAll('li').length;

        return console.log(`Category: ${title} / Elements: ${num}`);
    }));
}

getTextOfTitle(arrCategories);