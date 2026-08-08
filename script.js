var passwordElem = document.querySelector('input[id="user_password"]');
var confirmPasswordElem = document.querySelector('input[id="confirm_password"]');
var formElem = document.querySelector("form");

function validatePassword() {
    if (passwordElem.value !== confirmPasswordElem.value) {
        confirmPasswordElem.setCustomValidity("Passowrds don't match");
    } else {
        confirmPasswordElem.setCustomValidity("");
    }
}

function check(event) {
    validatePassword();
    if (passwordElem.value !== confirmPasswordElem.value) {
        event.preventDefault();
        confirmPasswordElem.setCustomValidity("Passowrds don't match");
    } else {
        confirmPasswordElem.setCustomValidity("");
    }
}

passwordElem.addEventListener("input", validatePassword);
confirmPasswordElem.addEventListener("keyup", validatePassword);
formElem.addEventListener("submit", check);