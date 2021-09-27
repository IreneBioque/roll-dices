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
const selectValued12 = [];
const selectValued10 = [];
const selectValued8 = [];
const selectValued6 = [];
const selectValued4 = [];


for (const element of liElement) {
  element.addEventListener('click', handleRoll);
}
for (const input of inputd100) {
  input.addEventListener('change', handleInput);
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
  const id = ev.currentTarget.id;
  console.log(id);
  if (selectValued100.length === 0 &&  select !== 0 && id === 'inputd100') {
    selectValued100.push(select);
  } else if (selectValued100.length !== 0 && id === 'inputd100') {
    selectValued100.splice(0);
    selectValued100.push(select);
  } if (selectValued20.length === 0 && select !== 0 && id === 'inputd20') {
    selectValued20.push(select);
  } else if (selectValued20.length !== 0 && id === 'inputd20') {
    selectValued20.splice(0);
    selectValued20.push(select);
  } if (selectValued12.length === 0 && select !== 0 && id === 'inputd12') {
    selectValued12.push(select);
  } else if (selectValued12.length !== 0 && id === 'inputd12') {
    selectValued12.splice(0);
    selectValued12.push(select);
  } if (selectValued10.length === 0 && select !== 0 && id === 'inputd10') {
    selectValued10.push(select);
  } else if (selectValued10.length !== 0 && id === 'inputd10') {
    selectValued10.splice(0);
    selectValued10.push(select);
  } if (selectValued8.length === 0 && select !== 0 && id === 'inputd8') {
    selectValued8.push(select);
  } else if (selectValued8.length !== 0 && id === 'inputd8') {
    selectValued8.splice(0);
    selectValued8.push(select);
  } if (selectValued6.length === 0 && select !== 0 && id === 'inputd6') {
    selectValued6.push(select);
  } else if (selectValued6.length !== 0 && id === 'inputd6') {
    selectValued6.splice(0);
    selectValued6.push(select);
  } if (selectValued4.length === 0 && select !== 0 && id === 'inputd4') {
    selectValued4.push(select);
  } else if (selectValued4.length !== 0 && id === 'inputd4') {
    selectValued4.splice(0);
    selectValued4.push(select);
  }
  console.log(selectValued100 + ' ' + 'este es d100');
  console.log(selectValued20 + ' ' + 'este es d20');
  console.log(selectValued12 + ' ' + 'este es d12');
  console.log(selectValued10 + ' ' + 'este es d10');
  console.log(selectValued8 + ' ' + 'este es d8');
  console.log(selectValued6 + ' ' + 'este es d6');
  console.log(selectValued4 + ' ' + 'este es d4');


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
