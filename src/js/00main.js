'use strict';
const showResults = document.querySelector('.js_results');
const button = document.querySelector('.js_button');
const valueInputd100 = document.querySelector('#inputd100');
const valueInputd20 = document.querySelector('#inputd20');
const valueInputd12 = document.querySelector('#inputd12');
const valueInputd10 = document.querySelector('#inputd10');
const valueInputd8 = document.querySelector('#inputd8');
const valueInputd6 = document.querySelector('#inputd6');
const valueInputd4 = document.querySelector('#inputd4');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function handleRoll(number, faces) {
  let diceArray = [];
  for (let i = 0; i < number; i++) {
    diceArray.push(getRandomNumber(faces));
  }
  return diceArray;
}

function handleRolld100() {
  //debugger;
  if (valueInputd100.value !== '0') {
    const resultsAll = handleRoll(valueInputd100.value, 100);
    let resultsd100 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAll) {
      suma += parseInt(result);
      resultsd100.innerHTML = `Tiraste ${valueInputd100.value} dados d100, los resultados son ${resultsAll} El total es ${suma} `;
    }
    showResults.appendChild(resultsd100);
  }
}

function handleRolld20() {
  if (valueInputd20.value !== '0') {
    const resultsAll = handleRoll(valueInputd20.value, 20);
    let resultsd20 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAll) {
      suma += parseInt(result);
      resultsd20.innerHTML = `Tiraste ${valueInputd20.value} dados d20, los resultados son ${resultsAll} El total es ${suma} `;
    }
    showResults.appendChild(resultsd20);
  }
}
function handleRolld12() {
  if (valueInputd12.value !== '0') {
    const resultsAll = handleRoll(valueInputd12.value, 12);
    let resultsd12 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAll) {
      suma += parseInt(result);
      resultsd12.innerHTML = `Tiraste ${valueInputd12.value} dados d12, los resultados son ${resultsAll} El total es ${suma} `;
    }
    showResults.appendChild(resultsd12);
  }
}

function handleRolld10() {
  if (valueInputd10.value !== '0') {
    const resultsAll = handleRoll(valueInputd10.value, 10);
    let resultsd10 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAll) {
      suma += parseInt(result);
      resultsd10.innerHTML = `Tiraste ${valueInputd10.value} dados d10, los resultados son ${resultsAll} El total es ${suma} `;
    }
    showResults.appendChild(resultsd10);
  }
}
function handleRolld8() {
  if (valueInputd8.value !== '0') {
    const resultsAll = handleRoll(valueInputd8.value, 8);
    let resultsd8 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAll) {
      suma += parseInt(result);
      resultsd8.innerHTML = `Tiraste ${valueInputd8.value} dados d8, los resultados son ${resultsAll} El total es ${suma} `;
    }
    showResults.appendChild(resultsd8);
  }
}

function handleRolld6() {
  if (valueInputd6.value !== '0') {
    const resultsAll = handleRoll(valueInputd6.value, 6);
    let resultsd6 = document.createElement('p');
    let suma = 0;
    for (let i = 0; i < resultsAll.length; i++) {
      suma += parseInt(resultsAll[i]);
      resultsd6.innerHTML = `Tiraste ${valueInputd6.value} dados d6, los resultados son ${resultsAll} El total es ${suma} `;
    }
    showResults.appendChild(resultsd6);
  }
}
function handleRolld4() {
  if (valueInputd4.value !== '0') {
    const resultsAll = handleRoll(valueInputd4.value, 4);
    let resultsd4 = document.createElement('p');
    let suma = 0;
    for (let i = 0; i < resultsAll.length; i++) {
      suma += parseInt(resultsAll[i]);
      resultsd4.innerHTML = `Tiraste ${valueInputd4.value} dados d4, los resultados son ${resultsAll} El total es ${suma} `;
    }
    showResults.appendChild(resultsd4);
  }
}
function renderRoll(ev) {
  showResults.innerHTML = '';
  ev.preventDefault();
  handleRolld100();
  handleRolld20();
  handleRolld12();
  handleRolld10();
  handleRolld8();
  handleRolld6();
  handleRolld4();
}

button.addEventListener('click', renderRoll);
