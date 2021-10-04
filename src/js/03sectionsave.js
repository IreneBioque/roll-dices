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
  const titleFav = nameSave.value;
  title.innerHTML = titleFav;
  for (let favorites of arrayFavorites) {
    console.log(favorites.values);
    if (favorites.values !== '') {
      html.innerHTML += `<li><label for="">
                 <i class="fas fa-dice-d20 js_liDice"></i>
                 <input
                   class="js_inputsave"
                   type="number"
                   name=""
                   value=${parseInt(favorites.values)}
                 />
               </label></li>`;
    }
    favoritesSave.appendChild(title);
    favoritesSave.appendChild(html);
    favoritesSave.appendChild(button);
    selects = [];
    button.classList.add('js_buttonfavorite');
    button.addEventListener('click', renderRollSave);
    handleSelectSave();
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
    id: getRandomNumber(200),
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
