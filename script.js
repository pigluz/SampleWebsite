var phone = document.getElementById("contact_input");

const submit = document.getElementById("contact_submit");
if (submit) submit.addEventListener("click", function (e) {
    document.getElementById("contact_info").innerHTML = "We will make sure to call you :)"
});