"use strict";

const categories = document.querySelectorAll("li.item");

console.log("Number of categories:", categories.length);

categories.forEach((i) => {
  const title = i.firstElementChild.textContent;
  const num = i.querySelectorAll("li").length;

  console.log(`Category: ${title} / Elements: ${num}`);
});

fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
  .then((response) => response.json())
  .then((data) => console.log(data));

// const horses = [
//   "Secretariat",
//   "Eclipse",
//   "WestAustralian",
//   "FlyingFox",
//   "Sebiscuit",
// ];

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function run(horse) {
//   return new Promise((resolve) => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   });
// }

// const promises = horses.map((horse) => run(horse));

// Promise.race(promises).then(({ horse, time }) =>
//   console.log(
//     `%c 🥇 Our winner is ${horse}, she done the race for ${time} sec`,
//     "color: tomato; font-size: 14px"
//   )
// );

// Promise.all(promises).then((all) => console.log(all));
