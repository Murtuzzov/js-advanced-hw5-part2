// ЗАДАЧА No1
//  Реализуйте функцию с использованием lodash для вычисления суммы
// массива чисел каждый раз, когда пользователь прокручивает страницу.

// const array = [1, 2, 3, 4, 5];
// document.addEventListener("scroll", () => {
//   let sum = _.sum(array);
//   console.log(sum);
// });

//ЗАДАНИЕ No2
// Разработайте функцию, которая изменяет цвет фона веб-страницы в
// зависимости от позиции прокрутки.

// const container = document.querySelector(".body-container");
// const output = document.querySelector(".output");

// let scrollCounter = 0;

// document.addEventListener("scroll", () => {
//   scrollCounter = window.scrollY;
//   output.textContent = scrollCounter;
//   if (scrollCounter <= 1000) {
//     container.style.backgroundColor = "lightgreen";
//   } else if (scrollCounter > 1000 && scrollCounter <= 2000) {
//     container.style.backgroundColor = "yellow";
//   } else {
//     container.style.backgroundColor = "red";
//   }
// });


//ЗАДАНИЕ No3
// const output = document.querySelector(".output");
// let counter = 0;

// document.addEventListener("scroll", () => {
//   counter = window.scrollY;
//   output.textContent = counter;
// });

// const button = document.querySelector(".btn");
// const modal = document.querySelector(".modal");
// let count = 0;

// button.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// document.addEventListener("scroll", () => {
//   count = window.scrollY;

//   if (count === 2412) {
//     modal.style.display = "block";
//   }
// });