
const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', SubmitFun)

function SubmitFun(event) {

    event.preventDefault();

    const {
      elements: { email, password }
    } = event.currentTarget;
  
    if (email.value === "" || password.value === "") {
      return alert('Please fill the form');
    }
  
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
  }