function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorEl = document.querySelector('.color')
const buttonEl = document.querySelector('.change-color')
buttonEl.addEventListener('click', changeColor)

function changeColor() {

  let newColor = getRandomHexColor()
  colorEl.textContent = newColor;
  document.body.style.backgroundColor = newColor;
}