var signName = document.getElementById('signName');
var signEmail = document.getElementById('signEmail');
var signPassword = document.getElementById('signPassword');

var user = [];
if (localStorage.getItem('user') !== null) {
    user = JSON.parse(localStorage.getItem('user'));
}

function add() {
    var userEmail = signEmail.value.toLowerCase(); 
   
    var isEmailExist = user.some(function(item) {
        return item.email.toLowerCase() === userEmail;
    });

    if (signName.value === '' || userEmail === '' || signPassword.value === '') {
        document.getElementById('message').innerHTML = `<p class="text-center text-danger">All inputs are required</p>`;
        document.getElementById('message2').innerHTML = ''; 
        document.getElementById('message4').innerHTML = '';
    }
    else if (isEmailExist) {
        document.getElementById('message4').innerHTML = `<p class="text-center text-danger">Email already exists</p>`;
        document.getElementById('message2').innerHTML = ''; 
    }
    else {
        document.getElementById('message2').innerHTML = `<p class="text-center text-success">Success</p>`;
        document.getElementById('message').classList.add('d-none');
        document.getElementById('message4').innerHTML = '';
        var obj = {
            name: signName.value,
            email: userEmail, 
            password: signPassword.value
        };
        user.push(obj);
        localStorage.setItem('user', JSON.stringify(user));
    }
}
