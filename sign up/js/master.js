var signName = document.getElementById('signName')
var signEmail = document.getElementById('signEmail')
var signPassword = document.getElementById('signPassword')
var user = []
if (localStorage.getItem('user') != null) {
    user = JSON.parse(localStorage.getItem('user'))
}
else {
    user = []
}






function add() {
    if (signName.value == '' || signEmail.value == '' || signPassword.value == '') {
        document.getElementById('message').innerHTML = `<p class="text-center text-danger">All inputs is required</p>`

    }
    else {
        document.getElementById('message2').innerHTML = `<p class="text-center text-success">Success</p>`
        document.getElementById('message').classList.add('d-none')
        var obj =
        {
            name: signName.value,
            email: signEmail.value,
            password: signPassword.value
        }
        user.push(obj)
        // location.href = '../login/index.html'

        localStorage.setItem('user', JSON.stringify(user));
    }
}
    
               
     
