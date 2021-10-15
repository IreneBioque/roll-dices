'use strict';
const valueInputd100Saved = document.querySelector('#js_inputsaved100');
const valueInputd20Saved = document.querySelector('#js_inputsaved20');
const valueInputd12Saved = document.querySelector('#js_inputsaved12');
const valueInputd10Saved = document.querySelector('#js_inputsaved10');
const valueInputd8Saved = document.querySelector('#js_inputsaved8');
const valueInputd6Saved = document.querySelector('#js_inputsaved6');
const valueInputd4Saved = document.querySelector('#js_inputsaved4');
const buttonPlusSaved = document.querySelectorAll('.js_buttonplusSaved');
const buttonRestSaved = document.querySelectorAll('.js_buttonrestSaved');

for (const buttonPlus of buttonPlusSaved) {
  buttonPlus.addEventListener('click', incrementarSaved);
}
for (const buttonRest of buttonRestSaved) {
  buttonRest.addEventListener('click', decrementSaved);
}

function incrementarSaved(ev) {
  ev.preventDefault();
  const id = ev.currentTarget.id;
  if (id === 'buttonplusd100Saved') {
    valueInputd100Saved.value = parseInt(valueInputd100Saved.value) + 1;
  } else if (id === 'buttonplusd20Saved') {
    valueInputd20Saved.value = parseInt(valueInputd20Saved.value) + 1;
  } else if (id === 'buttonplusd12Saved') {
    valueInputd12Saved.value = parseInt(valueInputd12Saved.value) + 1;
  } else if (id === 'buttonplusd10Saved') {
    valueInputd10Saved.value = parseInt(valueInputd10Saved.value) + 1;
  } else if (id === 'buttonplusd8Saved') {
    valueInputd8Saved.value = parseInt(valueInputd8Saved.value) + 1;
  } else if (id === 'buttonplusd6Saved') {
    valueInputd6Saved.value = parseInt(valueInputd6Saved.value) + 1;
  } else {
    valueInputd4Saved.value = parseInt(valueInputd4Saved.value) + 1;
  }
}
function decrementSaved(ev) {
  ev.preventDefault();
  const id = ev.currentTarget.id;
  if (id === 'buttonrestd100Saved' && parseInt(valueInputd100Saved.value) > 0) {
    valueInputd100Saved.value = parseInt(valueInputd100Saved.value) - 1;
  } else if (
    id === 'buttonrestd20Saved' &&
    parseInt(valueInputd20Saved.value) > 0
  ) {
    valueInputd20Saved.value = parseInt(valueInputd20Saved.value) - 1;
  } else if (
    id === 'buttonrestd12Saved' &&
    parseInt(valueInputd12Saved.value) > 0
  ) {
    valueInputd12Saved.value = parseInt(valueInputd12Saved.value) - 1;
  } else if (
    id === 'buttonrestd10Saved' &&
    parseInt(valueInputd10Saved.value) > 0
  ) {
    valueInputd10Saved.value = parseInt(valueInputd10Saved.value) - 1;
  } else if (
    id === 'buttonrestd8Saved' &&
    parseInt(valueInputd8Saved.value) > 0
  ) {
    valueInputd8Saved.value = parseInt(valueInputd8Saved.value) - 1;
  } else if (
    id === 'buttonrestd6Saved' &&
    parseInt(valueInputd6Saved.value) > 0
  ) {
    valueInputd6Saved.value = parseInt(valueInputd6Saved.value) - 1;
  } else if (
    id === 'buttonrestd4Saved' &&
    parseInt(valueInputd4Saved.value) > 0
  ) {
    valueInputd4Saved.value = parseInt(valueInputd4Saved.value) - 1;
  }
}
