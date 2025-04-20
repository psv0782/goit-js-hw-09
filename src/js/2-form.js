const STORAGE_KEY = 'feedback-form-state';

const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');

populateText();

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

function populateText() {
  const text = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (text) {
    form.querySelector('input').value = text.email;
    form.querySelector('textarea').value = text.message;
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
});