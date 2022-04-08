var remail = "smsmspy@gmail.com"
var rpass = "na19971998*"
function check() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    if (email == remail) {
        if (password == rpass) {
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