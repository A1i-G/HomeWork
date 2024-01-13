const form = document.querySelector('.myForm')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const submitBtn = document.querySelector('#btnSubmit')
const confirmpassword = document.querySelector('#confirmpassword')
const checkbox = document.querySelector('#adminb')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = {
        name: username.value,
        email: email.value
    }
    if (username.value && email.value) {
        submitBtn.removeAttribute('disabled')
        console.log('removed disabled');
    }
    console.log('user', user);
})


function removeDisabled(anyInput) {
    anyInput.addEventListener('change', () => {
        if (username.value && email.value && password.value && confirmpassword.value) {
            console.log('removed disabled');
            submitBtn.removeAttribute('disabled')
        } else {
            submitBtn.setAttribute('disabled', true)
            submitBtn.removeAttribute('disabled')
        }
    })
}

removeDisabled(username)
removeDisabled(email)
removeDisabled(password)
removeDisabled(confirmpassword)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user1 = {
        confirmpassword: confirmpassword.value,
        password: password.value
    }
    if (confirmpassword.value == password.value) {

    }
    
    {
        if (checkbox.checked  && confirmpassword.value === password.value &&  username.value && email.value && password.value && confirmpassword.value) {
            
            window.location = 'i2.html';
        }
        {
            if (checkbox.checked === false && confirmpassword.value === password.value &&  username.value && email.value && password.value && confirmpassword.value) {
                
                window.location = 'i3.html';
            }           
        if 
            (confirmpassword.value !== password.value)
            alert('Confirm Password is not match Password!')
            submitBtn.setAttribute('disabled', true)
        }
        console.log('user', user1);
}
})


// checkbox.addEventListener('change', () => {
//     if (checkbox.checked && confirmpassword.value === password.value &&  username.value && email.value && password.value && confirmpassword.value) {
        
//         window.location = 'i2.html';
        
//     }

// });
















