'use strict';

const buttonD100 = document.querySelector('.js_buttond100');
const buttonD20 = document.querySelector(".js_buttond20");
const buttonD12 = document.querySelector(".js_buttond12");
const buttonD10 = document.querySelector(".js_buttond10");
const buttonD8 = document.querySelector(".js_buttond8");
const buttonD6 = document.querySelector(".js_buttond6");
const buttonD4 = document.querySelector(".js_buttond4");
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumberD100 = getRandomNumber(100);
const randomNumberD20 = getRandomNumber(20);
const randomNumberD12 = getRandomNumber(12);
const randomNumberD10 = getRandomNumber(10);
const randomNumberD8 = getRandomNumber(8);
const randomNumberD6 = getRandomNumber(6);
const randomNumberD4 = getRandomNumber(4);


function handleRoll() {
  const paragraphd100 = document.querySelector(".js_paragraphd100");
  paragraphd100.innerHTML = randomNumberD100;
}



buttonD100.addEventListener('click', handleRoll);