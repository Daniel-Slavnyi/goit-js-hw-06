'use strict';

const categories = document.querySelectorAll('li.item');

console.log('Number of categories:', categories.length);

categories.forEach(i => {
    const title = i.firstElementChild.textContent;
    const num = i.querySelectorAll('li').length;

    console.log(`Category: ${title} / Elements: ${num}`);
});
