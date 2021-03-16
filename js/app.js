// console.log('this is form validation project')

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName = false;
let validEmail = false;
let validPhone = false;
$('#success').hide();
$('#failure').hide();

// console.log(name, email, phone)

name.addEventListener('blur', () => {
    // console.log('the name is blurred')
    // validate name here

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,20}$/;
    let str = name.value;
    // console.log(regex, str)
    if (regex.test(str)) {
        // console.log('your name is valid')
        name.classList.remove('is-invalid')
        validName = true
    } else {
        // console.log('your name is invalid')
        name.classList.add('is-invalid')
        validName = false
    }
})
email.addEventListener('blur', () => {
    // console.log('the email is blurred')
    // validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    // console.log(regex, str)
    if (regex.test(str)) {
        // console.log('your email is valid')
        email.classList.remove('is-invalid')
        validEmail = true
    } else {
        // console.log('your email is invalid')
        email.classList.add('is-invalid')
        validEmail = false
    }
})
phone.addEventListener('blur', () => {
    // console.log('the phone is blurred')
    // validate phone number here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    // console.log(regex, str)
    if (regex.test(str)) {
        // console.log('your phone number is valid')
        phone.classList.remove('is-invalid')
        validPhone = true
    } else {
        // console.log('your phone number is invalid')
        phone.classList.add('is-invalid')
        validPhone = false
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    // console.log('you click the submit button')
    e.preventDefault()
        // console.log(validPhone, validName, validEmail)
    if (validEmail && validName && validPhone) {
        // console.log('name email phone number are valid. submit the form now')
        let success = document.getElementById('success')
        success.classList.add('show')
            // failure.classList.remove('show')
            // $('#failure').alert('close')
        $('#failure').hide();
        $('#success').show();
    } else {
        // console.log('one of the name or email or  phone number are not valid. hence not submit the form')
        let failure = document.getElementById('failure')
        failure.classList.add('show')
            // success.classList.remove('show')
            // $('#success').alert('close')
        $('#success').hide();
        $('#failure').show();

    }

})