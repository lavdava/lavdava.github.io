const form = document.getElementById('userForm');
const name_input = document.getElementById('name');
const email_input = document.getElementById('email');
const select_element = document.getElementById('selection');
const box_input = document.getElementById('agree');
const age_input = document.getElementById('age');

const name_msg = document.getElementById('name-msg');
const email_msg = document.getElementById('email-msg');
const select_msg = document.getElementById('select-msg');
const box_msg = document.getElementById('box-msg');
const age_msg = document.getElementById('age-msg');

valid_email = false;
valid_name = false;
valid_agree = false;
valid_select = false;
valid_age = false;

function validateForm() {
    if (name_input.value === '') {
        name_msg.textContent = "Name is required"
        name_msg.style.color = 'red'
        valid_name = false
    } else if (name_input.value.length < 4) {
        name_msg.textContent = 'Name must be 4 characters or longer'
        name_msg.style.color = 'orange'
        valid_name = false
    } else {
        name_msg.textContent = "Looks good"
        name_msg.style.color = 'green'
        valid_name = true
    }

    if (email_input.value === '') {
        email_msg.textContent = "Email is required"
        email_msg.style.color = 'red'
        valid_email = false
    } else if (email_input.value.length < 4) {
        email_msg.textContent = "Email must be longer than 4 characters"
        email_msg.style.color = 'orange'
        valid_email = false
    } else {
        email_msg.textContent = "Looks good!"
        email_msg.style.color = 'green'
        valid_email = true
    }

    if (box_input.checked) {
        box_msg.textContent = "Looks good!"
        box_msg.style.color = 'green'
        valid_agree = true
    } else {
        box_msg.textContent = "Please agree"
        box_msg.style.color = 'red'
        valid_agree = false
    }

    if (select_element.selectedIndex === 0) {
        select_msg.textContent = "Select a Pokémon please"
        select_msg.style.color = 'red'
        valid_select = false
    } else {
        select_msg.textContent = select_element.value + " is a good choice"
        select_msg.style.color = 'green'
        valid_select = true
    }

    if (age_input.value == 0) {
        age_msg.textContent = "Please input age"
        age_msg.style.color = 'red'
        valid_age = false;
    } else {
        age_msg.textContent = 'Looks good!'
        age_msg.style.color = 'green'
        valid_age = true;
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();

    if (valid_email === true && valid_name === true && valid_agree === true && valid_select === true && valid_age === true) {
        const name = name_input.value;
        const email = email_input.value;
        const age = age_input.value;
        const pokemon = select_element.value;

        window.location.href = `display.html?name=${name}&email=${email}&age=${age}&pokemon=${pokemon}`;
    }
});