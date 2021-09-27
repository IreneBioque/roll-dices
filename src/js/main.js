'use strict';

const buttonD100 = document.querySelector('.js_buttond100');
const buttonD20 = document.querySelector('.js_buttond20');
const buttonD12 = document.querySelector('.js_buttond12');
const buttonD10 = document.querySelector('.js_buttond10');
const buttonD8 = document.querySelector('.js_buttond8');
const buttonD6 = document.querySelector('.js_buttond6');
const buttonD4 = document.querySelector('.js_buttond4');
const selectd100 = document.querySelector('.js_selectd100');
const selectd20 = document.querySelector('.js_selectd20');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// const randomNumberD100 = getRandomNumber(100) * 3;
//  console.log(randomNumberD100);
// const randomNumberD20 = getRandomNumber(20);
// const randomNumberD12 = getRandomNumber(12);
// const randomNumberD10 = getRandomNumber(10);
// const randomNumberD8 = getRandomNumber(8);
// const randomNumberD6 = getRandomNumber(6);
// const randomNumberD4 = getRandomNumber(4);

const selectValued100 = [];
const selectValued20 = [];

console.log(selectValued100);

function handleRoll(ev) {
  const id = ev.currentTarget.id;

  if (id === 'd100') {
    const paragraphd100 = document.querySelector('.js_paragraphd100');
    paragraphd100.innerHTML = getRandomNumber(100) * selectValued100;
  } else if (id === 'd20') {
    const paragraphd20 = document.querySelector('.js_paragraphd20');
    paragraphd20.innerHTML = getRandomNumber(20) * selectValued20;
  } else if (id === 'd12') {
    const paragraphd12 = document.querySelector('.js_paragraphd12');
    paragraphd12.innerHTML = getRandomNumber(12);
  } else if (id === 'd10') {
    const paragraphd10 = document.querySelector('.js_paragraphd10');
    paragraphd10.innerHTML = getRandomNumber(10);
  } else if (id === 'd8') {
    const paragraphd8 = document.querySelector('.js_paragraphd8');
    paragraphd8.innerHTML = getRandomNumber(8);
  } else if (id === 'd6') {
    const paragraphd6 = document.querySelector('.js_paragraphd6');
    paragraphd6.innerHTML = getRandomNumber(6);
  } else {
    const paragraphd4 = document.querySelector('.js_paragraphd4');
    paragraphd4.innerHTML = getRandomNumber(4);
  }

}

function handleSelect(ev) {
  const select = parseInt(ev.currentTarget.value);
  const id = ev.currentTarget.id;
  if (id === 'dicesd100') {
    if (selectValued100.length === 0) {
      selectValued100.push(select);
    } else if (selectValued100.length !== 0) {
      selectValued100.splice(0);
      selectValued100.push(select);
    }
  } else if (id === 'dicesd20') {
    if (selectValued20.length === 0) {
      selectValued20.push(select);
    } else if (selectValued20.length !== 0) {
      selectValued20.splice(0);
      selectValued20.push(select);
    }
  }
  console.log(selectValued100);
  console.log(selectValued20);
}


buttonD100.addEventListener('click', handleRoll);
buttonD20.addEventListener('click', handleRoll);
buttonD12.addEventListener('click', handleRoll);
buttonD10.addEventListener('click', handleRoll);
buttonD8.addEventListener('click', handleRoll);
buttonD6.addEventListener('click', handleRoll);
buttonD4.addEventListener('click', handleRoll);


selectd100.addEventListener('change', handleSelect);
selectd20.addEventListener('change', handleSelect);