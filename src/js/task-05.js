const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', outputChange)

function outputChange (event) {
    outputEl.textContent = event.currentTarget.value
}