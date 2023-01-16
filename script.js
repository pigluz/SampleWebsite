var email = document.getElementById("email");
var div = document.getElementsByClassName("cointainer")

document.getElementById("log_in").addEventListener("click", function login() {
    document.getElementById("wrong").innerHTML = "We're sorry, there's no registered account on <br><b>" + email.value + "</b>!";
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