'use strict';

const favoritesSave = document.querySelector('.js_favoritesdice');

function handleRolld100Save() {
  const valueInputd100Save = document.querySelectorAll('.js_inputsaved100');
  for (const valued100 of valueInputd100Save) {
    if (valued100.value !== '0') {
      const resultsAllSave = handleRoll(valued100.value, 100);
      let resultsd100 = document.createElement('p');
      let suma = 0;
      for (const result of resultsAllSave) {
        suma += parseInt(result);
        resultsd100.innerHTML = `Tiraste ${valued100.value} dados d100, los resultados son ${resultsAllSave} El total es ${suma} `;
      }
      favoritesSave.appendChild(resultsd100);
    }
  }
}
function handleRolld20Save() {
  const valueInputd20Save = document.querySelectorAll('.js_inputsaved20');
  for (const valued20 of valueInputd20Save) {
    if (valued20.value !== '0') {
      const resultsAllSave = handleRoll(valued20.value, 20);
      let resultsd20 = document.createElement('p');
      let suma = 0;
      for (const result of resultsAllSave) {
        suma += parseInt(result);
        resultsd20.innerHTML = `Tiraste ${valued20.value} dados d20, los resultados son ${resultsAllSave} El total es ${suma} `;
      }
      favoritesSave.appendChild(resultsd20);
    }
  }
}
function handleRolld12Save() {
  const valueInputd12Save = document.querySelectorAll('.js_inputsaved12');
  for (const valued12 of valueInputd12Save) {
    if (valued12.value !== '0') {
      const resultsAllSave = handleRoll(valued12.value, 12);
      let resultsd12 = document.createElement('p');
      let suma = 0;
      for (const result of resultsAllSave) {
        suma += parseInt(result);
        resultsd12.innerHTML = `Tiraste ${valued12.value} dados d12, los resultados son ${resultsAllSave} El total es ${suma} `;
      }
      favoritesSave.appendChild(resultsd12);
    }
  }
}
function handleRolld10Save() {
  const valueInputd10Save = document.querySelectorAll('.js_inputsaved10');
  for (const valued10 of valueInputd10Save) {
    if (valued10.value !== '0') {
      const resultsAllSave = handleRoll(valued10.value, 10);
      let resultsd10 = document.createElement('p');
      let suma = 0;
      for (const result of resultsAllSave) {
        suma += parseInt(result);
        resultsd10.innerHTML = `Tiraste ${valued10.value} dados d10, los resultados son ${resultsAllSave} El total es ${suma} `;
      }
      favoritesSave.appendChild(resultsd10);
    }
  }
}
function handleRolld8Save() {
  const valueInputd8Save = document.querySelectorAll('.js_inputsaved8');
  for (const valued8 of valueInputd8Save) {
    if (valued8.value !== '0') {
      const resultsAllSave = handleRoll(valued8.value, 8);
      let resultsd8 = document.createElement('p');
      let suma = 0;
      for (const result of resultsAllSave) {
        suma += parseInt(result);
        resultsd8.innerHTML = `Tiraste ${valued8.value} dados d8, los resultados son ${resultsAllSave} El total es ${suma} `;
      }
      favoritesSave.appendChild(resultsd8);
    }
  }
}

function handleRolld6Save() {
  const valueInputd6Save = document.querySelectorAll('.js_inputsaved6');
  for (const valued6 of valueInputd6Save) {
    if (valued6.value !== '0') {
      const resultsAllSave = handleRoll(valued6.value, 6);
      let resultsd6 = document.createElement('p');
      let suma = 0;
      for (const result of resultsAllSave) {
        suma += parseInt(result);
        resultsd6.innerHTML = `Tiraste ${valued6.value} dados d6, los resultados son ${resultsAllSave} El total es ${suma} `;
      }
      favoritesSave.appendChild(resultsd6);
    }
  }
}
function handleRolld4Save() {
  const valueInputd4Save = document.querySelectorAll('.js_inputsaved4');
  for (const valued4 of valueInputd4Save) {
    if (valued4.value !== '0') {
      const resultsAllSave = handleRoll(valued4.value, 4);
      let resultsd4 = document.createElement('p');
      let suma = 0;
      for (const result of resultsAllSave) {
        suma += parseInt(result);
        resultsd4.innerHTML = `Tiraste ${valued4.value} dados d4, los resultados son ${resultsAllSave} El total es ${suma} `;
      }
      favoritesSave.appendChild(resultsd4);
    }
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
