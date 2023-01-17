var email = document.getElementById("email");

//log in script
document.getElementById("login").addEventListener("click", function login() {
    document.getElementById("info").innerHTML = "We're sorry, there's no registered account on <br><b>" + email.value + "</b>!";
})

// sign up script
document.getElementById("signupp").addEventListener("click", function signupp() {
  document.getElementById('info').innerHTML = "Account registered on <br><b>" + email.value + "</b>!";
})

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
