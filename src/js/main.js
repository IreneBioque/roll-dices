'use strict';

const buttonD100 = document.querySelector('.js_buttond100');
const buttonD20 = document.querySelector('.js_buttond20');
const buttonD12 = document.querySelector('.js_buttond12');
const buttonD10 = document.querySelector('.js_buttond10');
const buttonD8 = document.querySelector('.js_buttond8');
const buttonD6 = document.querySelector('.js_buttond6');
const buttonD4 = document.querySelector('.js_buttond4');
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


function handleRoll(ev) {
  const id = ev.currentTarget.id;
  if (id === 'd100') {
    const paragraphd100 = document.querySelector('.js_paragraphd100');
    paragraphd100.innerHTML = randomNumberD100;
  } else if (id === 'd20') {
    const paragraphd20 = document.querySelector('.js_paragraphd20');
    paragraphd20.innerHTML = randomNumberD20;
  } else if (id === 'd12') {
    const paragraphd12 = document.querySelector('.js_paragraphd12');
    paragraphd12.innerHTML = randomNumberD12;
  } else if (id === 'd10') {
    const paragraphd10 = document.querySelector('.js_paragraphd10');
    paragraphd10.innerHTML = randomNumberD10;
  } else if (id === 'd8') {
    const paragraphd8 = document.querySelector('.js_paragraphd8');
    paragraphd8.innerHTML = randomNumberD8;
  } else if (id === 'd6') {
    const paragraphd6 = document.querySelector('.js_paragraphd6');
    paragraphd6.innerHTML = randomNumberD6;
  } else {
    const paragraphd4 = document.querySelector('.js_paragraphd4');
    paragraphd4.innerHTML = randomNumberD4;
  }

}



buttonD100.addEventListener('click', handleRoll);
buttonD20.addEventListener('click', handleRoll);
buttonD12.addEventListener('click', handleRoll);
buttonD10.addEventListener('click', handleRoll);
buttonD8.addEventListener('click', handleRoll);
buttonD6.addEventListener('click', handleRoll);
buttonD4.addEventListener('click', handleRoll);
