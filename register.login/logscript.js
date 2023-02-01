var email = document.getElementById("email");
var name = document.getElementById("name");
var password = document.getElementById("pass");

//login site
/// sign up script
const signup = document.getElementById("signup_sg");
if (signup) signup.addEventListener("click", function (e) {
  document.getElementById('info').innerHTML = "Account registered on <br><b>" + email.value + "</b>!";
});

/// log in script
const login = document.getElementById("login_lg");
if (login) login.addEventListener("click", function (e) {
    document.getElementById("info").innerHTML = "We're sorry, there's no registered account on <br><b>" + email.value + "</b>!";
});
//////////// fix found by mklkj :crying_face::crying_face::crying_face:


// password toggle script
function togglePass() {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
}
// found on https://www.w3schools.com/howto/howto_js_toggle_password.asp


// for recovery page

/// email recovery
const email_reco = document.getElementById("submit_recovery_em")
if (email_reco) email_reco.addEventListener("click", function (e) {
  document.getElementById("reco_info").innerHTML = "We sent a code to your phone number. <br> Please now enter your code <b>below</b>:";
  document.getElementsByClassName("code_div").style.visibility = "visible";
})

///password recovery 
const pass_reco = document.getElementById("submit_recovery_ps")
if (pass_reco) pass_reco.addEventListener("click", function (e) {
  document.getElementById("reco_info").innerHTML = "We sent a code to your email. <br> Please now enter your code <b>below</b>:";
  document.getElementsByClassName("code_div").style.visibility = "visible";
})

////recovery info
var code = document.getElementById("code_input");
const code_info = document.getElementById("submit_code");
if (code_info) code_info.addEventListener("click", function (e) {
  document.getElementById("code_info").innerHTML = "<b>" + code.value + "</b><br>Wrong code.";
})
