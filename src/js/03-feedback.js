import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
};

const formData = {};

refs.form.addEventListener('input', throttle(e => {

    formData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    return formData

}, 500));

refs.form.addEventListener('submit', onFormSubmit);



populateTextarea();


function onFormSubmit(evt) {
    evt.preventDefault(); 

    console.log("Email:", refs.email.value);
    console.log("Message:", refs.message.value);
    
  evt.currentTarget.reset();
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
        return formData
    };
}

