document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navbarButton = document.getElementById('navbarButton');

    hamburgerMenu.addEventListener('click', function() {
        if (navbarButton.style.display === 'flex') {
            navbarButton.style.display = 'none';
        } else {
            navbarButton.style.display = 'flex';
        }
    });
});


document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const firstName = document.getElementById('firstName').value.trim();
    const surname = document.getElementById('surName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    document.getElementById('firstNameError').textContent = '';
    document.getElementById('surnameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneNumberError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'First name is required!';
        isValid = false;
    }
    else if(firstName.length <= 1){
        document.getElementById('firstNameError').textContent = 'First name length must be longer than 1!';
        isValid = false;
    }
    else{
        let containNum = false;
        for(let i = 0; i < firstName.length; i++){
            if(firstName[i] >= '0' && firstName[i] <= '9'){
                containNum = true;
                break;
            }
        }

        if(containNum) {
            document.getElementById('firstNameError').textContent = 'First name cannot contain number!';
            isValid = false;
        }
    }

    if (surname === '') {
        document.getElementById('surnameError').textContent = 'Surname is required!';
        isValid = false;
    }
    else if(surname.length <= 1){
        document.getElementById('surnameError').textContent = 'Surname length must be more than 1!';
        isValid = false;
    }
    else {
        let containNum = false;
        for(let i = 0; i < surname.length; i++){
            if(surname[i] >= '0' && surname[i] <= '9'){
                containNum = true;
                break;
            }
        }

        if(containNum) {
            document.getElementById('surnameError').textContent = 'Surname  cannot contain number!';
            isValid = false;
        }
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required!';
        isValid = false;
    }
    else if(email.length <= 1){
        document.getElementById('emailError').textContent = 'Email length must be more than 1!';
        isValid = false;
    }
    else if(!email.endsWith('.com')) {
        document.getElementById('emailError').textContent = 'Email must end with .com!';
        isValid = false;
    }
    else{
        let containAt = false;
        for(let i = 0; i < email.length; i++){
            if(email[i] == '@'){
                containAt = true;
                break;
            }
        }
        
        if(!containAt){
            document.getElementById('emailError').textContent = 'Email must contain \'@\'!';
        isValid = false;
        }
    }

    if (phoneNumber === '') {
        document.getElementById('phoneNumberError').textContent = 'Phone number is required!';
        isValid = false;
    }
    else if(phoneNumber.length < 12) {
        document.getElementById('phoneNumberError').textContent = 'Phone number length must be more than 12!';
        isValid = false;
    }
    else{
        let containAlphabet = false;

        for(let i = 0; i < phoneNumber.length; i++){
            if((phoneNumber[i] >= 'a' && phoneNumber[i] <= 'z') || (phoneNumber[i] >= 'A' && phoneNumber[i] <= 'Z')){
                containAlphabet = true;
                break;
            }
        }

        if(containAlphabet){
            document.getElementById('phoneNumberError').textContent = 'Phone number cannot contain alphabet!';
            isValid = false;
        }

    } 

    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required!';
        isValid = false;
    }
    else if(password.length < 12){
        document.getElementById('passwordError').textContent = 'Password length must be more than 12!';
        isValid = false;
    }
    else{
        let containUpper = false;
        for(let  i = 0; i < password.length; i++){
            if(password[i] >= 'A' && password[i] <= 'Z'){
                containUpper = true;
                break;
            }
        }
            
        if(!containUpper){
            document.getElementById('passwordError').textContent = 'Password must contain uppercase!';
            isValid = false;
        }

    }

    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').textContent = 'Confirm password is required!';
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match!';
        isValid = false;
    }


    if (isValid) {
        alert('Registration successful!');
        window.location.href = "/html/home.html"
    }
});
