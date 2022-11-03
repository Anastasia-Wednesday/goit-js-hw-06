const counterValue = document.querySelector('#value')
const decrementButtonEl = document.querySelector('[data-action="decrement"]')
const incrementButtonEl = document.querySelector('[data-action="increment"]')

decrementButtonEl.addEventListener('click', decrementFun)
incrementButtonEl.addEventListener('click', incrementFun)

let newValue = 0;

function decrementFun () {
    newValue -= 1;
    updateValue()
}

function incrementFun () {
    newValue += 1;
    updateValue()
}

function updateValue () {
    counterValue.textContent = newValue;
}

