import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
let savedData = localStorage.getItem('feedback-form-state');
const formData = {};

returnForm();
form.addEventListener('submit', handleSubmit);
form.addEventListener('input', throttle(saveFormData, 500));

function saveFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleSubmit(evt) {
  evt.preventDefault();
  console.log(savedData);

  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function returnForm() {
  const savedFormData = JSON.parse(savedData);
  if (!savedData) return;
  form.elements.email.value = savedFormData.email ?? '';
  form.elements.message.value = savedFormData.message ?? '';
}
