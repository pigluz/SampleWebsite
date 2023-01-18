var email = document.getElementById("email");

// sign up script
const signup = document.getElementById("signup_sg");
if (signup) signup.addEventListener("click", function (e) {
  document.getElementById('info').innerHTML = "Account registered on <br><b>" + email.value + "</b>!";
});

// log in script
const login = document.getElementById("login_lg");
if (login) login.addEventListener("click", function (e) {
    console.log(e)
    document.getElementById("info").innerHTML = "We're sorry, there's no registered account on <br><b>" + email.value + "</b>!";
});
// fix found my mklkj :crying_face::crying_face::crying_face:


// password toggle script
function togglePass() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
// found on https://www.w3schools.com/howto/howto_js_toggle_password.asp


// for recovery page 
if (document.getElementById("forgot_email").checked) {
  document.getElementById('cointainer_before').classList.toggle('cointainer');
  console.log

} else if (document.getElementById("forgot_password").checked) {

}