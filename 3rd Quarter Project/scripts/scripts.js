function login() {
    var inputUser = document.getElementById("username").value;
    var inputPass = document.getElementById("password").value;
    
    if (inputUser == "" && inputPass != "") {
        document.getElementById("alert").innerHTML = "Please enter your username."
        document.getElementById("label_user").innerHTML = "Username: " + "*".fontcolor("red");
        document.getElementById("label_pass").innerHTML = "Password: ";
        console.log("Login error: Empty username field");
    }
    else if (inputUser != "" && inputPass == "") {
        document.getElementById("alert").innerHTML = "Please enter your password."
        document.getElementById("label_pass").innerHTML = "Password: " + "*".fontcolor("red");
        document.getElementById("label_user").innerHTML = "Username: ";
        console.log("Login error: Empty password field");
    }
    else if (inputUser == "" && inputPass == "") {
        document.getElementById("alert").innerHTML = "Please enter your username and password."
        document.getElementById("label_user").innerHTML = "Username: " + "*".fontcolor("red");
        document.getElementById("label_pass").innerHTML = "Password: " + "*".fontcolor("red");
        console.log("Login error: Empty username and password field");
    }
    else {
        document.getElementById("alert").innerHTML = "Verifying details. Logging you in soon."
        document.getElementById("label_user").innerHTML = "Username: ";
        document.getElementById("label_pass").innerHTML = "Password: ";
        console.log("Login submitted for processing");
    }
}