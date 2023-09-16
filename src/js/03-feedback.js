import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let savedFormData =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};
const { email, message } = form.elements;

returnForm();
form.addEventListener('submit', handleSubmit);
form.addEventListener('input', throttle(saveFormData, 500));

function saveFormData(e) {
  savedFormData = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(savedFormData));
}

function returnForm() {
  if (savedFormData) {
    email.value = savedFormData.email ?? '';
    message.value = savedFormData.message ?? '';
  }
}

function handleSubmit(evt) {
  evt.preventDefault();
  if ((form.elements.email.value && form.elements.message.value) === '') {
    return alert('Please fill in all the fields!');
  } else {
    savedData = localStorage.getItem('feedback-form-state');
    console.log(savedData);

    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    savedFormData = {};
  }
}
