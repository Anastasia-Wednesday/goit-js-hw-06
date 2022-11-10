function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector('#controls')
const inputEl = document.querySelector('#controls > input')
const boxesEl = document.querySelector('#boxes')
const createOption = document.querySelector('#controls > button')
const destroyOption = document.querySelector('#controls > button ~ button')

controlsEl.addEventListener('input', manageButtons)

let totalAmount = 0




function manageButtons () {
  destroyOption.addEventListener('click', () => {
    innerHTML = ''
  })

  createOption.addEventListener('click', () => {
    totalAmount += 1
    // console.log(totalAmount)
  })

  return totalAmount
}




function createBoxes(amount) {
const divWidth = "30px";

  for (let item of amount) {
    item = document.createElement("div")
    document.boxesEl.appendChild(newDiv);
    newDiv.style.width = divWidth
    newDiv.style.backgroundColor = getRandomHexColor

  }

}

// createBoxes(totalAmount)