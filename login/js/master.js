var user = []
user = JSON.parse(localStorage.getItem('user'))
var signEmail = document.getElementById('signEmail')
var signPassword = document.getElementById('signPassword')
var login = document.getElementById('login')
login.addEventListener('click', function () {
    if (signEmail.value == '' || signPassword.value == '') {
        document.getElementById('message').innerHTML = `<p class="text-center text-danger">All inputs is required</p>`
        document.getElementById('message2').classList.add('d-none')
        document.getElementById('message3').classList.add('d-none')
    }
    else {
        checkuser()
    }
})

function checkuser() {

    for (var i = 0; i < user.length; i++) {
        if (signEmail.value == user[i].email && signPassword.value == user[i].password) {
            document.getElementById('message').classList.add('d-none')
            document.getElementById('message2').innerHTML = `<p class="text-center text-success">Success</p>`
            var m = user[i].name
            localStorage.setItem('username', m)
            location.href = '../../home/index2.html'
            break
        }
        else if(signEmail.value != user[i].email || signPassword.value != user[i].password)
        {
            document.getElementById('message3').innerHTML = `<p class="text-center text-danger">incorrect email or password</p>`
            document.getElementById('message2').classList.add('d-none')
            document.getElementById('message').classList.add('d-none')
            

            
        }
    }
}