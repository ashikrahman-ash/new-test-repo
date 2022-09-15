document.getElementById('login-submit').addEventListener('click', function () {

    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPass = passwordField.value;

    console.log (userPass);
    //User matching

    if (userEmail == 'ashik@gmail.com' && userPass == '123456') {
        window.location.href = 'bank.html';
    } 
});