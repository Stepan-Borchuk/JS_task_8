import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
    button: document.querySelector('.feedback-form button')};

populateTextarea();

const formData = {};

refs.form.addEventListener('input', throttle(e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    if (formData.email && formData.message) {
        refs.button.disabled = false;
    }
}, 500));

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault(); 

    console.log("Email:", refs.email.value);
    console.log("Message:", refs.message.value);
    
    evt.currentTarget.reset();
    refs.button.disabled = true;
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
    try {
        const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (savedForm.email) {
        refs.email.value = savedForm.email;
            if (savedForm.message) {
                refs.message.value = savedForm.message;
            }
        }
    } catch (error) {
        return
    };
}

if (refs.email.value && refs.message.value) {
    refs.button.disabled = false;
}