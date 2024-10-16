

let error = document.querySelector('.error');

let password = document.getElementById('password');

let confirmPassword = document.getElementById('confirmPassword');

let form = document.getElementById('form');

let btn = document.querySelector('.btn');

form.addEventListener('submit',(e) => {

    // alert('Password');

    e.preventDefault();
    errorMessage();
     
    if(password.value === ''){
        errorMessage("Enter Password and Confirm Password"); 

    }else if(password.value.length <= 5) {

        // console.log("first")

        errorMessage("Password must be at least 6 characters")
    }else if(password.value && confirmPassword.value === '') {

        errorMessage("Enter Confirm Password");

    }else if(password.value !== confirmPassword.value) {

        errorMessage("Password do not match");
    }else{
        // alert("Password is correct");
        swal.fire({
            icon: "success",
            title: "Success",
            text: "Password is correct Thank you!",
            confirmButtonText: "OK",
        })
        
    }

    form.reset();
});

const errorMessage = (text) => {
    if(text == null){
        error.classList.remove('active');
    }else{
        error.classList.add('active');
        error.innerHTML = text;
    }
}