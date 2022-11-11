const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', validationCheck)

function validationCheck (event) {

    // console.log(event.currentTarget.value.length)

    if (event.currentTarget.value.length === 6) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
    } else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
    return
}

