var letters = /^[a-zA-Z]/g;
var m = /^\w+([\.-]\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

var p1 = /\W/;
var p2 = /\w/;
var p3 = /\d/;



function Regestration() {

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var password = document.getElementById('pass').value;
    var cpassword = document.getElementById('cpass').value;
    var email = document.getElementById('email').value;
    var cemail = document.getElementById('cemail').value;



    var op = true;
if (! m.test(email))
    if (fname == '' || lname == '') {
        alert('Please Enter Your Name ');
        op = false
    }


    if (password == '') {
        alert('Please Enter Your Password')
        op = false
    }

    if (!password.match(p1)) {
        alert('please enter at least one special character')
        op = false
    }

    if (!password.match(p2)) {
        alert('you should enter at least one letter')
        op = false
    }

    if (!password.match(p3)) {
        alert('you should enter at least one number ')
        op = false
    }

    if (password.length < 8) {
        alert('Password minimum length is 8');
        op = false
    }


    if (password != cpassword) {
        alert('Check Your Password Please')
        op = false
    }

    if (email == '') {
        alert('Please Enter Your Email')
        op = false
    }


  

    if (email != cemail) {
        alert('Check Youe Email Please')
        op = false
    }
    if (localStorage.getItem("users") == null) {
        savedata()
    }
    else {
        if (Checkiemail(email)) {
            alert("user existe ")
        }
        else {
            if (op) {


                savedata();
            }
        }
    }
}
function User(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
}

function Checkiemail(e) {
    var users = JSON.parse(localStorage.getItem("users"))
    for (i = 0; i < users.length; i++) {
        var user = users[i]
        if (user.email == e) {
            return true
        }
    }
}
function savedata() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var password = document.getElementById('pass').value;
    var cpassword = document.getElementById('cpass').value;
    var email = document.getElementById('email').value;
    var cemail = document.getElementById('cemail').value;


    var a = []
    if (localStorage.getItem("users") === null) {
        localStorage.setItem("users", JSON.stringify(a))
    }
    var user = new User(fname + " " + lname, email, password)
    var users = JSON.parse(localStorage.getItem("users"))
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))

}