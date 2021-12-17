import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector(".feedback-form input");
const textareaEl = document.querySelector(".feedback-form textarea");


const FORM_STATE = "feedback-form-state";
let data = {};
formFillOut()

formEl.addEventListener('input', throttle(onInputChange, 500));
formEl.addEventListener('submit',  onFormSubmit)

function onInputChange(){

     data.email = emailEl.value;
     data.message = textareaEl.value;
localStorage.setItem(FORM_STATE, JSON.stringify(data));
    console.log(data);

}
function onFormSubmit (evt) {
    evt.preventDefault();
    console.log(data)
    console.log('Message sent!');
    evt.target.reset();
    localStorage.removeItem(FORM_STATE);
}

function formFillOut(){
const savedData = JSON.parse(localStorage.getItem(FORM_STATE));
if (savedData === null || savedData === undefined) {
    return
}
data = savedData;

if(savedData){
    console.log(savedData);
    emailEl.value = savedData.email;
    textareaEl.value = savedData.message;
}
}
