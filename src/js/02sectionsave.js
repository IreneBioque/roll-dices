'use strict';
const save = document.querySelector('.js_save');
const buttonSave = document.querySelector('.js_buttonSave');
let selects = [];

const inputsSave = document.querySelectorAll('.js_inputsave');
const nameSave = document.querySelector('.js_nameSave');

const buttonSavePrint = document.querySelector('.js_savebutton');

function paintFavorites(arrayFavorites) {
  for (let favorites of arrayFavorites) {
    let div = document.createElement('div');
    let html = document.createElement('ul');
    let title = document.createElement('h3');
    let parrafo = document.createElement('p');
    let button = document.createElement('button');
    parrafo.classList.add(`${favorites.name}`);
    button.classList.add('js_buttonfavorite');
    button.setAttribute('id', favorites.name);
    button.innerHTML = 'Roll';
    for (const dice of favorites.dices) {
      const titleFav = favorites.name;
      title.innerHTML = titleFav;
      if (favorites.values !== '') {
        html.innerHTML += `<li><label for="">
                   <i class="fas fa-dice-d20 js_liDice"></i>
                   <input
                     class=${dice.class}
                     type="number"
                     name=${favorites.name}
                     value=${parseInt(dice.value)}
                   />
                 </label></li>`;
      }
    }
    favoritesSave.appendChild(div);
    div.appendChild(title);
    div.appendChild(html);
    div.appendChild(parrafo);
    div.appendChild(button);

    selects = [];
  }
  listenRoll();
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
}
function handleInputChange(ev) {
  selects.push({
    name: nameSave.value,
    id: ev.currentTarget.id,
    value: ev.currentTarget.value,
  });
}

function onSave() {
  const roll = {
    name: selects[0].name,
    id: selects[0].name,
    dices: [],
  };
  selects.forEach((select) => {
    const dice = {
      class: select.id,
      value: select.value,
    };
    if (dice.value !== '' && dice.value !== undefined) {
      roll.dices.push(dice);
    }
  });
  setInLocalStorage(roll);
  paintFavorites([roll]);
}
function handleSelectSave() {
  save.classList.toggle('hidden');
}
buttonSave.addEventListener('click', handleSelectSave);
buttonSavePrint.addEventListener('click', onSave);
