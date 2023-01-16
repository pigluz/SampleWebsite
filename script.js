var email = document.getElementById("email");

document.getElementById("log_in").addEventListener("click", function login() {
    document.getElementById("info").innerHTML = "We're sorry, there's no registered account on <br><b>" + email.value + "</b>!";
})

document.getElementById("sign_upp").addEventListener("click", function sign_up() {
    document.getElementById("info").innerHTML = "Account registered on <br><b>" + email.value + "</b>!";

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