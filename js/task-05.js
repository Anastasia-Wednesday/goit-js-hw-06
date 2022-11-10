const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', outputChange)

function outputChange (event) {
    if (event.currentTarget.value != "") {
        outputEl.textContent = event.currentTarget.value
            } else {
        outputEl.textContent = "Anonymous"
        }
    
}