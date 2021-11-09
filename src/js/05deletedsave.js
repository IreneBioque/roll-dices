'use strict';

function handleClose(ev) {
  console.log(ev.currentTarget.dataset.id);
  const selectedRoll = ev.currentTarget.dataset.id;
  const arrayls = localStorage.getItem('rollArray');
  const arrayFavorites = JSON.parse(arrayls);
  const favoritesFound = arrayFavorites.findIndex((fav) => {
    return fav.id === selectedRoll;
  });
  console.log(arrayFavorites);
  console.log(favoritesFound);
  if (favoritesFound !== -1) {
    arrayFavorites.splice(favoritesFound, 1);
    const stringFavorites = JSON.stringify(arrayFavorites);
    localStorage.setItem('rollArray', stringFavorites);
    const div = document.getElementById(`div_${selectedRoll}`);
    div.remove();
  }
}

function listenCloses() {
  const listCloses = document.querySelectorAll('.js_deleted');
  for (let close of listCloses) {
    close.addEventListener('click', handleClose);
  }
}
