// submit data in the form
const username=document.getElementById('userFullName');
const user_phone=document.getElementById('phone');
const user_email=document.getElementById('email');
const user_password=document.getElementById('password');
const confirmpassword=document.getElementById('confirmpassword');
const signup_btn=document.getElementById('signup');

function create_account(){
//validate the form
if(username.value=="" && user_phone.value=="" && user_email.value=="" && user_password.value==""){
    alert("The name, phone, email, and password fields are required ");
    }
    else if(user_phone.value==""){
    alert("Enter the phone");
    }
    else if(user_password.value.length <4 || user_password.value.length >8){
        alert("The password should be between 4 & 8 characters");
    }else if(user_password.value!=confirmpassword.value){
        alert("The Password doesnot match");
    }else{
        var person={
        fullName: username.value,
        phone: user_phone.value,
        email: user_email.value,
        password: user_password.value
    };
    var userr=localStorage.setItem('User', JSON.stringify(person));
     window.open("./index.html");
        }
}

//login

 function loginUser(){
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    var user=JSON.parse(localStorage.getItem('User'));
    
    if(email=="" && password==""){
       alert("Please provide your email and password");
        }
    else if(email==user.email && password==user.password){
        window.open("./contacts.html");
        return true;
        }else{
            document.getElementById('login_error').innerHTML="Invalid login";
            return false;
        }
 }