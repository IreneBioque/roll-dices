'use strict';

// const button = document.querySelector('.js_button');
// const selectd100 = document.querySelector('.js_selectd100');
// const selectd20 = document.querySelector('.js_selectd20');
const liElement = document.querySelectorAll('.js_liDice');
const inputd100 = document.querySelectorAll('.js_inputd100');


function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const selectValued100 = [];
const selectValued20 = [];



for (const element of liElement) {
  element.addEventListener('click', handleRoll);
}
for (const input of inputd100) {
  input.addEventListener("change", handleInput);
}


function handleRoll(ev) {
  const id = ev.currentTarget.id;
  const number = parseInt(ev.currentTarget.id);
  for (const element of liElement) {
    if (id === element.id) {
      const numbere = getRandomNumber(number) * selectValued100 ;
      console.log(numbere);
    }
  }
}
function handleInput(ev) {
  const select = parseInt(ev.currentTarget.value);
  if (selectValued100.length === 0) {
    selectValued100.push(select);
  } else if (selectValued100.length !== 0) {
    selectValued100.splice(0);
    selectValued100.push(select);
  }
  console.log(select);
  console.log(selectValued100);
}
// function handleSelect(ev) {
//   const select = parseInt(ev.currentTarget.value);
//   const id = ev.currentTarget.id;
//   if (id === 'dicesd100') {
//     if (selectValued100.length === 0) {
//       selectValued100.push(select);
//     } else if (selectValued100.length !== 0) {
//       selectValued100.splice(0);
//       selectValued100.push(select);
//     }
//   } else if (id === 'dicesd20') {
//     if (selectValued20.length === 0) {
//       selectValued20.push(select);
//     } else if (selectValued20.length !== 0) {
//       selectValued20.splice(0);
//       selectValued20.push(select);
//     }
//   }
//   console.log(selectValued100);
//   console.log(selectValued20);
// }


// button.addEventListener('click', handleRoll);
// selectd100.addEventListener('change', handleSelect);
// selectd20.addEventListener('change', handleSelect);
