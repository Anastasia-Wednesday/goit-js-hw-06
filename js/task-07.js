const rangeEl = document.querySelector('#font-size-control')
const textEl = document.getElementById('text')

rangeEl.addEventListener('change', rangeValueFunction)

function rangeValueFunction (event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`
}

