function check() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var user = Checkiemail(email)

    if (email == user.email) {
        if (password == user.password) {
            alert("welcome")
        }
        else {
            alert("wrong password or email")
        }
    }
    else {
        alert("wrong password or email")
    }
}

function Checkiemail(e) {
    var users = JSON.parse(localStorage.getItem("users"))
    for (i = 0; i < users.length; i++) {
        var user = users[i]
        if (user.email == e) {
            return user
        }
    }
}