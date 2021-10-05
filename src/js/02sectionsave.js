'use strict';
const save = document.querySelector('.js_save');
const buttonSave = document.querySelector('.js_buttonSave');
let selects = [];

const inputsSave = document.querySelectorAll('.js_inputsave');
const nameSave = document.querySelector('.js_nameSave');

const buttonSavePrint = document.querySelector('.js_savebutton');
function paintFavorites(arrayFavorites) {
  let html = document.createElement('ul');
  let title = document.createElement('h3');
  let button = document.createElement('button');
  button.innerHTML = 'Roll';
  for (let favorites of arrayFavorites) {
    for (const value of favorites.values) {
      for (const clas of favorites.classes) {
        const titleFav = favorites.name;
        title.innerHTML = titleFav;
        if (favorites.values !== '') {
          html.innerHTML += `<li><label for="">
                   <i class="fas fa-dice-d20 js_liDice"></i>
                   <input
                     class=${clas}
                     type="number"
                     name=""
                     value=${parseInt(value)}
                   />
                 </label></li>`;
        }
      }
    }
    favoritesSave.appendChild(title);
    favoritesSave.appendChild(html);
    favoritesSave.appendChild(button);
    button.classList.add('js_buttonfavorite');
    button.setAttribute('id', favorites.name);
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
  console.log(selects);
}

function onSave() {
  const roll = {
    name: selects[0].name,
    id: selects[0].name,
    classes: selects.map((select) => select.id),
    values: selects
      .map((select) => select.value)
      .filter((value) => value !== '' && value !== undefined),
  };
  setInLocalStorage(roll);
  paintFavorites([roll]);
}
function handleSelectSave() {
  save.classList.toggle('hidden');
}
buttonSave.addEventListener('click', handleSelectSave);
buttonSavePrint.addEventListener('click', onSave);
