import throttle from 'lodash.throttle';

const form  = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

console.log(form.querySelector('textarea[name="message"]'))
console.log(form.message)
console.log(form.email)
form.addEventListener('input', throttle(() => {
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}, 500))

window.onload = function() {
  localData = localStorage.getItem("feedback-form-state")
  if (localData) {
    const formData = JSON.parse(localData);
    form.email.value = formData.email;
    form.message.value = formData.message;
  }  
};

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  console.log(formData);
  localStorage.removeItem("feedback-form-state")
  form.reset();
})