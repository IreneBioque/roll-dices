'use strict';

const valueInputd100Save = document.querySelector('.js_inputsaved100');
const valueInputd20Save = document.querySelector('.js_inputsaved20');
const valueInputd12Save = document.querySelector('.js_inputsaved12');
const valueInputd10Save = document.querySelector('.js_inputsaved10');
const valueInputd8Save = document.querySelector('.js_inputsaved8');
const valueInputd6Save = document.querySelector('.js_inputsaved6');
const valueInputd4Save = document.querySelector('.js_inputsaved4');

const favoritesSave = document.querySelector('.js_favoritesdice');

function handleRolld100Save() {
  if (valueInputd100Save.value !== '0') {
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
function handleRolld20Save() {
  if (valueInputd20Save.value !== '0') {
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
function handleRolld12Save() {
  if (valueInputd12Save.value !== '0') {
    const resultsAllSave = handleRoll(valueInputd12Save.value, 12);
    let resultsd12 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAllSave) {
      suma += parseInt(result);
      resultsd12.innerHTML = `Tiraste ${valueInputd12Save.value} dados d12, los resultados son ${resultsAllSave} El total es ${suma} `;
    }
    favoritesSave.appendChild(resultsd12);
  }
}
function handleRolld10Save() {
  if (valueInputd10Save.value !== '0') {
    const resultsAllSave = handleRoll(valueInputd10Save.value, 10);
    let resultsd10 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAllSave) {
      suma += parseInt(result);
      resultsd10.innerHTML = `Tiraste ${valueInputd10Save.value} dados d10, los resultados son ${resultsAllSave} El total es ${suma} `;
    }
    favoritesSave.appendChild(resultsd10);
  }
}
function handleRolld8Save() {
  if (valueInputd8Save.value !== '0') {
    const resultsAllSave = handleRoll(valueInputd8Save.value, 8);
    let resultsd8 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAllSave) {
      suma += parseInt(result);
      resultsd8.innerHTML = `Tiraste ${valueInputd8Save.value} dados d8, los resultados son ${resultsAllSave} El total es ${suma} `;
    }
    favoritesSave.appendChild(resultsd8);
  }
}

function handleRolld6Save() {
  if (valueInputd6Save.value !== '0') {
    const resultsAllSave = handleRoll(valueInputd6Save.value, 6);
    let resultsd6 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAllSave) {
      suma += parseInt(result);
      resultsd6.innerHTML = `Tiraste ${valueInputd6Save.value} dados d6, los resultados son ${resultsAllSave} El total es ${suma} `;
    }
    favoritesSave.appendChild(resultsd6);
  }
}
function handleRolld4Save() {
  if (valueInputd4Save.value !== '0') {
    const resultsAllSave = handleRoll(valueInputd4Save.value, 4);
    let resultsd4 = document.createElement('p');
    let suma = 0;
    for (const result of resultsAllSave) {
      suma += parseInt(result);
      resultsd4.innerHTML = `Tiraste ${valueInputd4Save.value} dados d4, los resultados son ${resultsAllSave} El total es ${suma} `;
    }
    favoritesSave.appendChild(resultsd4);
  }
}

function renderRollSave() {
  handleRolld100Save();
  handleRolld20Save();
  handleRolld12Save();
  handleRolld10Save();
  handleRolld8Save();
  handleRolld6Save();
  handleRolld4Save();
}
