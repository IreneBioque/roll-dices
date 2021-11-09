'use strict';
const save = document.querySelector('.js_save');
const buttonSave = document.querySelector('.js_buttonSave');
let selects = [];

const inputsSave = document.querySelectorAll('.js_inputsave');
const nameSave = document.querySelector('.js_nameSave');
const buttonPlusSavedp = document.querySelectorAll('.jsbuttonplusSaved');

const buttonSavePrint = document.querySelector('.js_savebutton');

function paintFavorites(arrayFavorites) {
  console.log('Este es arrayFavorites', arrayFavorites);
  for (let favorites of arrayFavorites) {
    let div = document.createElement('div');
    div.classList.add('savedRoll__favorite--div');
    let html = document.createElement('ul');
    html.classList.add('savedRoll__favorite--ul');
    let title = document.createElement('h3');
    title.classList.add('savedRoll__favorite--title');
    let button = document.createElement('button');
    button.classList.add('js_buttonfavorite');
    button.classList.add('savedRoll__favorite--button');
    button.setAttribute('id', favorites.name[0]);
    div.setAttribute('id', `div_${favorites.name[0]}`);
    button.innerHTML = 'Roll';
    for (const dice of favorites.dices) {
      const titleFav = favorites.name[0];
      title.innerHTML = titleFav;
      title.innerHTML += `<i class="fas fa-times-circle js_deleted lifavorite__deleted" data-id="${favorites.name[0]}">`;
      if (favorites.values !== '') {
        html.innerHTML += `<li><label for="">
                   <i class="fas fa-dice-d20 js_liDice"></i>
                   <input
                     class=${dice.class}
                     type="number"
                     name=${favorites.name[0]}
                     value=${parseInt(dice.value)}
                   />
                   
                 </label></li>`;
      }
    }

    favoritesSave.appendChild(div);
    div.appendChild(title);
    div.appendChild(html);
    div.appendChild(button);

    selects = [];
  }
  listenRoll();
  listenCloses();
  handleSelectSave();
}

function listenRoll() {
  const buttonRoll = document.querySelectorAll('.js_buttonfavorite');
  for (let button of buttonRoll) {
    button.addEventListener('click', renderRollSave);
  }
}

for (const inputSave of inputsSave) {
  inputSave.addEventListener('change', handleInputChange);
  //inputSave.addEventListener('click', handleInputChange);
}

function handleInputChange(ev) {
  console.log(nameSave.value);
  console.log(ev.currentTarget.value);
  selects.push({
    name: nameSave.value,
    id: ev.currentTarget.id,
    value: ev.currentTarget.value,
  });
}

let roll;

function onSave() {
  roll = {
    name: selects.map((select) => {
      return select.name;
    }),
    id: selects[0].name,
    dices: [],
  };
  selects.forEach((select) => {
    const dice = {
      class: select.id,
      value: select.value,
    };
    if (dice.value !== 0 && dice.value !== undefined) {
      roll.dices.push(dice);
    }
  });
  console.log('Esto es select name', selects[0].name);
  console.log('Esto es roll', roll);
  setInLocalStorage(roll);
  paintFavorites([roll]);
}

function handleSelectSave() {
  save.classList.toggle('hidden');
  nameSave.value = '';
  document.querySelector('.js_inputsaved100').value = 0;

  document.querySelector('#js_inputsaved20').value = 0;
  document.querySelector('#js_inputsaved12').value = 0;
  document.querySelector('#js_inputsaved10').value = 0;
  document.querySelector('#js_inputsaved8').value = 0;
  document.querySelector('#js_inputsaved6').value = 0;
  document.querySelector('#js_inputsaved4').value = 0;
}
buttonSave.addEventListener('click', handleSelectSave);
buttonSavePrint.addEventListener('click', onSave);
