function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector('#controls')
const inputEl = document.querySelector('#controls > input')
const boxesEl = document.querySelector('#boxes')

controlsEl.addEventListener('input', manageButtons)

let amount = []

function manageButtons () {
  const createOption = document.querySelector('#controls > button')
  const destroyOption = document.querySelector('#controls > button ~ button')

  destroyOption.addEventListener('click', () => {
    inputEl.value = 0
  })

  createOption.addEventListener('click', () => {
    // amount = inputEl.value
    amount.push(1)
    console.log(amount)
  })
}


  for (let item of amount) {
    document.createElement("div")

  }

// function createBoxes(amount) {
//   document.createElement("div")*amount
// }

// createBoxes(amount)

// boxesEl.insertAdjacentHTML("afterbegin", (amount) => {
//   document.createElement("div")*amount
// })

// const boxEl = document.createElement("div")

// boxesEl.append(boxEl)
// console.log(boxesEl)