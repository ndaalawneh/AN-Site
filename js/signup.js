
var letters = /^[a-zA-Z]/g;
var m= /^\w+([\.-]\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

var p1 = /\W/;
var p2 = /\w/ ;
var p3 = /\d/ ;



function Regestration(){

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var password = document.getElementById('pass').value;
    var cpassword = document.getElementById('cpass').value;
    var email = document.getElementById('email').value;
    var cemail = document.getElementById('cemail').value;

  
    



    if (fname =='' || lname== '') {
        alert('Please Enter Your Name ');
       
    }
    
    if (fname.match(letters) && lname.match(letters)) {
        alert('The Name Has Been Accepted')
    }

    if(password ==''){
        alert('Please Enter Your Password')
    }
    
    if(!password.match(p1)){
        alert('please enter at least one special character')
    }

    if(!password.match(p2)){
        alert('you should enter at least one letter')
    }

    if(!password.match(p3)){
        alert('you should enter at least one number ')
    }
   
    if(password.length<8){
        alert ('Password minimum length is 8');
    }
    

    if(!password.match(cpassword)){
        alert('Check Your Password Please')
    }

    if(email==''){
        alert('Please Enter Your Email')
    }

   
     if(!email.match(m)){
         alert('Invailed Email')
     }

     if(!email.match(cemail)){
         alert('Check Youe Email Please')
     }
}