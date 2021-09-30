'use strict';
const showResults = document.querySelector('.js_results');
const button = document.querySelector('.js_button');
const save = document.querySelector('.js_save');
const buttonSave = document.querySelector('.js_buttonSave');
const valueInputd100 = document.querySelector('#inputd100');
const valueInputd20 = document.querySelector('#inputd20');
const valueInputd12 = document.querySelector('#inputd12');
const valueInputd10 = document.querySelector('#inputd10');
const valueInputd8 = document.querySelector('#inputd8');
const valueInputd6 = document.querySelector('#inputd6');
const valueInputd4 = document.querySelector('#inputd4');
const valueInputd100Save = document.querySelector('.js_inputsaved100');
const valueInputd20Save = document.querySelector('.js_inputsaved20');
const valueInputd12Save = document.querySelector('.js_inputsaved12');
const valueInputd10Save = document.querySelector('.js_inputsaved10');
const valueInputd8Save = document.querySelector('.js_inputsaved8');
const valueInputd6Save = document.querySelector('.js_inputsaved6');
const valueInputd4Save = document.querySelector('.js_inputsaved4');

const favoritesSave = document.querySelector('.js_favoritesdice');



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
  } else if (valueInputd100Save.value !== '0') {
    const resultsAllSave = handleRoll(valueInputd100Save.value, 100);
    let resultsd100 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAllSave) {
      suma += parseInt(result);
      resultsd100.innerHTML = `Tiraste ${valueInputd100Save.value} dados d100, los resultados son ${resultsAllSave} El total es ${suma} `;
    }
    favoritesSave.appendChild(resultsd100);
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
  } else if (valueInputd20Save.value !== '0') {
    const resultsAllSave = handleRoll(valueInputd20Save.value, 20);
    let resultsd20 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAllSave) {
      suma += parseInt(result);
      resultsd20.innerHTML = `Tiraste ${valueInputd20Save.value} dados d20, los resultados son ${resultsAllSave} El total es ${suma} `;
    }
    favoritesSave.appendChild(resultsd20);
  }
}
function handleRolld12() {
  if (valueInputd12.value !== '') {
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
  if (valueInputd10.value !== '') {
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
  if (valueInputd8.value !== '') {
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
  if (valueInputd6.value !== '') {
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
  if (valueInputd4.value !== '') {
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

const selects = [];

console.log(selects);

const inputsSave = document.querySelectorAll('.js_inputsave');
const nameSave = document.querySelector('.js_nameSave');

const buttonSavePrint = document.querySelector('.js_savebutton');


function renderFacorites() {
  let html = document.createElement('ul');
  let title = document.createElement('h3');
  let button = document.createElement('button');
  button.innerHTML = 'Roll';
  const titleFav = nameSave.value;
  title.innerHTML = titleFav;
  for (let select of selects) {
    if (select.value !== '') {
      html.innerHTML += `<li><label for="">
                <i class="fas fa-dice-d20 js_liDice"></i>
                <input
                  class="js_inputsave"
                  type="number"
                  name=""
                  id=${select.id}
                  value=${select.value}
                />
              </label></li>`;
    }
  }
  favoritesSave.appendChild(title);
  favoritesSave.appendChild(html);
  favoritesSave.appendChild(button);
  selects.splice(0);
  button.classList.add('js_buttonfavorite');
  for (const b of button) {
    b.addEventListener('click', renderRoll);
  }

}


for (const inputSave of inputsSave) {
  inputSave.addEventListener('change', handleInputSave);
}
function handleInputSave(ev) {
  selects.push(
    {
      id: ev.currentTarget.id,
      value: ev.currentTarget.value,
    }
  );
  console.log(selects);
}


function handleSelectSave() {
  save.classList.toggle('hidden');
}
buttonSave.addEventListener('click', handleSelectSave);
buttonSavePrint.addEventListener('click', renderFacorites);

