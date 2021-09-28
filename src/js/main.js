'use strict';

const button = document.querySelector('.js_button');


function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function handleRoll(number, faces) {
  let arrayTirada = [];
  for (let i = 0; i < number; i++) {
    arrayTirada.push(getRandomNumber(faces));
    console.log(arrayTirada);
  }
  return arrayTirada;
}


function handleInput() {
  let showResults = document.querySelector('.js_results');
  showResults.innerHTML = '';
  let valueInput = document.querySelector('#inputd100').value;
  if (valueInput !== '') {
    let resultsd100 = document.createElement('p');
    resultsd100.innerHTML = `Tiraste ${valueInput} dados, los resultados son ${handleRoll(valueInput, 100)}`;

    showResults.appendChild(resultsd100);
  }
  valueInput = document.querySelector('#inputd20').value;
  if (valueInput !== '') {
    let resultsd20 = document.createElement('p');
    resultsd20.innerHTML = `Tiraste ${valueInput} dados, los resultados son ${handleRoll(valueInput,20)}`;
    showResults.appendChild(resultsd20);
  }
  valueInput = document.querySelector('#inputd12').value;
  if (valueInput !== '') {
    let resultsd12 = document.createElement('p');
    resultsd12.innerHTML = `Tiraste ${valueInput} dados, los resultados son ${handleRoll(valueInput,12)}`;
    showResults.appendChild(resultsd12);
  }
  valueInput = document.querySelector('#inputd10').value;
  if (valueInput !== '') {
    let resultsd10 = document.createElement('p');
    resultsd10.innerHTML = `Tiraste ${valueInput} dados, los resultados son ${handleRoll(valueInput,12)}`;
    showResults.appendChild(resultsd10);
  }
  valueInput = document.querySelector('#inputd8').value;
  if (valueInput !== '') {
    let inputd8 = document.createElement('p');
    inputd8.innerHTML = `Tiraste ${valueInput} dados, los resultados son ${handleRoll(valueInput,8)}`;
    showResults.appendChild(inputd8);
  }
  valueInput = document.querySelector('#inputd6').value;
  if (valueInput !== '') {
    let inputd6 = document.createElement('p');
    inputd6.innerHTML = `Tiraste ${valueInput} dados, los resultados son ${handleRoll(valueInput,6)}`;
    showResults.appendChild(inputd6);
  }
  valueInput = document.querySelector('#inputd4').value;
  if (valueInput !== '') {
    let inputd4 = document.createElement('p');
    inputd4.innerHTML = `Tiraste ${valueInput} dados, los resultados son ${handleRoll(valueInput,4)}`;
    showResults.appendChild(inputd4);
  }
}
button.addEventListener('click', handleInput);