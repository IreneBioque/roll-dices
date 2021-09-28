'use strict';
const showResults = document.querySelector('.js_results');
const button = document.querySelector('.js_button');
const save = document.querySelector('.js_save');
const liElement = document.querySelectorAll('.js_liDice');
// const buttonSave = document.querySelector('.js_buttonSave');

for (const element of liElement) {
  element.addEventListener('click', handleSelect);
}

function handleSelect(ev) {
  save.innerHTML = '';
  const id = ev.currentTarget.id;
  console.log(ev.currentTarget.id);
  if (id === '100') {
    const html = ` <h3>Tirada guardada</h3> <li > <label for=""> 
            <i class="fas fa-dice-d20 js_liDice" id=${id} ></i>
            <input class="js_inputd100" type="number" name="" id="inputd100" value=2 />
          </label>
        </li>`;
    save.innerHTML += html;
  }
}

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
  let valueInput = document.querySelector('#inputd100').value;
  if (valueInput !== '') {
    const resultsAll = handleRoll(valueInput, 100);
    let resultsd100 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAll) {
      suma += parseInt(result);
      resultsd100.innerHTML = `Tiraste ${valueInput} dados, los resultados son ${resultsAll} El total es ${suma} `;
    }
    showResults.appendChild(resultsd100);
  }
}

function handleRolld20() {
  let valueInput = document.querySelector('#inputd20').value;
  if (valueInput !== '') {
    const resultsAll = handleRoll(valueInput, 20);
    let resultsd20 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAll) {
      suma += parseInt(result);
      resultsd20.innerHTML = `Tiraste ${valueInput} dados, los resultados son ${resultsAll} El total es ${suma} `;
    }
    showResults.appendChild(resultsd20);
  }
}
function handleRolld12() {
  let valueInput = document.querySelector('#inputd12').value;
  if (valueInput !== '') {
    const resultsAll = handleRoll(valueInput, 12);
    let resultsd12 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAll) {
      suma += parseInt(result);
      resultsd12.innerHTML = `Tiraste ${valueInput} dados, los resultados son ${resultsAll} El total es ${suma} `;
    }
    showResults.appendChild(resultsd12);
  }
}

function handleRolld10() {
  let valueInput = document.querySelector('#inputd10').value;
  if (valueInput !== '') {
    const resultsAll = handleRoll(valueInput, 10);
    let resultsd10 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAll) {
      suma += parseInt(result);
      resultsd10.innerHTML = `Tiraste ${valueInput} dados, los resultados son ${resultsAll} El total es ${suma} `;
    }
    showResults.appendChild(resultsd10);
  }
}
function handleRolld8() {
  let valueInput = document.querySelector('#inputd8').value;
  if (valueInput !== '') {
    const resultsAll = handleRoll(valueInput, 8);
    let resultsd8 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAll) {
      suma += parseInt(result);
      resultsd8.innerHTML = `Tiraste ${valueInput} dados, los resultados son ${resultsAll} El total es ${suma} `;
    }
    showResults.appendChild(resultsd8);
  }
}

function handleRolld6() {
  let valueInput = document.querySelector('#inputd6').value;
  if (valueInput !== '') {
    const resultsAll = handleRoll(valueInput, 6);
    let resultsd6 = document.createElement('p');
    let suma = 0;
    for (let i = 0; i < resultsAll.length; i++) {
      suma += parseInt(resultsAll[i]);
      resultsd6.innerHTML = `Tiraste ${valueInput} dados, los resultados son ${resultsAll} El total es ${suma} `;
    }
    showResults.appendChild(resultsd6);
  }
}
function handleRolld4() {
  let valueInput = document.querySelector('#inputd4').value;
  if (valueInput !== '') {
    const resultsAll = handleRoll(valueInput, 4);
    let resultsd4 = document.createElement('p');
    let suma = 0;
    for (let i = 0; i < resultsAll.length; i++) {
      suma += parseInt(resultsAll[i]);
      resultsd4.innerHTML = `Tiraste ${valueInput} dados, los resultados son ${resultsAll} El total es ${suma} `;
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
