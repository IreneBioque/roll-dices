'use strict';

function handleClose(ev) {
  console.log(ev.currentTarget.dataset.id);
  const selectedRoll = ev.currentTarget.dataset.id;
  const Prueba = localStorage.getItem('rollArray');
  const arrayFavoritesPrueba = JSON.parse(Prueba);
  const favoritesFound = arrayFavoritesPrueba.findIndex((fav) => {
    return fav.id === selectedRoll;
  });
  console.log(arrayFavoritesPrueba);
  console.log(favoritesFound);
  if (favoritesFound !== -1) {
    arrayFavoritesPrueba.splice(favoritesFound, 1);
    console.log('Esto es variable prueba', arrayFavoritesPrueba);
    const stringFavoritesPrueba = JSON.stringify(arrayFavoritesPrueba);
    localStorage.setItem('rollArray', stringFavoritesPrueba);
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
