var email = document.getElementById("email");
var div = document.getElementsByClassName("cointainer")

document.getElementById("log_in").addEventListener("click", function login() {
    document.getElementById("info").innerHTML = "We're sorry, there's no registered account on <br><b>" + email.value + "</b>!";
})

document.getElementById("sign_up2").addEventListener("click", function signup() {
    document.getElementById("info").innerHTML = "Account registered on <br><b> " + email.value + "</br></b>!";

})


function togglePass() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
// found on https://www.w3schools.com/howto/howto_js_toggle_password.asp