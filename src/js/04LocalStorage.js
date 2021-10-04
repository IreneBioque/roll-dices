'use strict';

function setInLocalStorage(roll) {
  console.log(roll);
  let rollArray = [];
  const localStorageShows = localStorage.getItem('rollArray');
  if (localStorageShows !== null) {
    const arrayFavorites = JSON.parse(localStorageShows);
    rollArray = [...arrayFavorites, roll];
  } else {
    rollArray = [roll];
  }
  console.log(rollArray);
  // the object is converted into a string
  const stringFavorites = JSON.stringify(rollArray);
  // Save the array and the string locally
  localStorage.setItem('rollArray', stringFavorites);
}

function getLocalStorage() {
  // Take the local array
  const localStorageShows = localStorage.getItem('rollArray');
  // convertirlo a objeto
  if (localStorageShows !== null) {
    const arrayFavorites = JSON.parse(localStorageShows);
    // selects = arrayFavorites;
    // Call function painfavorites so that favorites are painted when the page is reloaded.
    paintFavorites(arrayFavorites);
  }
}

//  Call LocalStorage here because we want it to be saved when the page reloads.
getLocalStorage();
