
const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', SubmitFun)

function SubmitFun(event) {

    event.preventDefault();

    const result = {
      email: null,
      password: null,
    }

    const {
      elements: { email, password }
    } = event.currentTarget;
  
    if (email.value === "" || password.value === "") {
      return alert('Please fill the form');
    }

    result.email = email.value;
    result.password = password.value 
  
    console.log(result)
    event.currentTarget.reset();
  }