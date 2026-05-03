let attempts = 3;

function authenticate() {

    let username = document.getElementById("uname").value;
    let password = document.getElementById("pass").value;

    if (username === "janedoe" && password === "1234") {
        window.alert("Access granted! Welcome " + username);

        window.location.href = "dashboard.html";
    } 
    else {
        attempts--;

        document.getElementById("attemptsText").innerHTML = 
            "Attempts left: " + attempts;

        window.alert("Access denied! Incorrect username and/or password.");

        if (attempts === 0) {
            window.alert("Too many failed attempts. Login locked.");
            document.querySelector("button[type='submit']").disabled = true;
        }
    }
}

function clearFields() {
    document.getElementById("uname").value = "";
    document.getElementById("pass").value = "";
}