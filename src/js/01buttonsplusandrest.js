const buttonPlus = document.querySelectorAll(".js_buttonplus");
const buttonRest = document.querySelectorAll(".js_buttonrest");

for (const buttonP of buttonPlus) {
  buttonP.addEventListener("click", incrementar);
}
for (const buttonR of buttonRest) {
  buttonR.addEventListener("click", decrement);
}

function incrementar(ev) {
  ev.preventDefault();
  const id = ev.currentTarget.id;
  if (id === "buttonplusd100") {
    valueInputd100.value = parseInt(valueInputd100.value) + 1;
  } else if (id === "buttonplusd20") {
    valueInputd20.value = parseInt(valueInputd20.value) + 1;
  } else if (id === "buttonplusd12") {
    valueInputd12.value = parseInt(valueInputd12.value) + 1;
  } else if (id === "buttonplusd10") {
    valueInputd10.value = parseInt(valueInputd10.value) + 1;
  } else if (id === "buttonplusd8") {
    valueInputd8.value = parseInt(valueInputd8.value) + 1;
  } else if (id === "buttonplusd6") {
    valueInputd6.value = parseInt(valueInputd6.value) + 1;
  } else {
    valueInputd4.value = parseInt(valueInputd4.value) + 1;
  }
}
function decrement(ev) {
  ev.preventDefault();
  const id = ev.currentTarget.id;
  if (id === "buttonrestd100" && parseInt(valueInputd100.value) > 0) {
    valueInputd100.value = parseInt(valueInputd100.value) - 1;
  } else if (id === "buttonrestd20" && parseInt(valueInputd20.value) > 0) {
    valueInputd20.value = parseInt(valueInputd20.value) - 1;
  } else if (id === "buttonrestd12" && parseInt(valueInputd12.value) > 0) {
    valueInputd12.value = parseInt(valueInputd12.value) - 1;
  } else if (id === "buttonrestd10" && parseInt(valueInputd10.value) > 0) {
    valueInputd10.value = parseInt(valueInputd10.value) - 1;
  } else if (id === "buttonrestd8" && parseInt(valueInputd8.value) > 0) {
    valueInputd8.value = parseInt(valueInputd8.value) - 1;
  } else if (id === "buttonrestd6" && parseInt(valueInputd6.value) > 0) {
    valueInputd6.value = parseInt(valueInputd6.value) - 1;
  } else {
    valueInputd4.value = parseInt(valueInputd4.value) - 1;
  }
}
