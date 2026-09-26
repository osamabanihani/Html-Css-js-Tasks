let form = document.getElementById("orderForm");

let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let phoneInput = document.getElementById("phone");
let orderInput = document.getElementById("order");

let message = document.getElementById("message");
let savedOrder = document.getElementById("savedOrder");
let savedUsername = document.getElementById("savedUsername");

let usernameRegex = /^\S+$/;
let passwordRegex = /^(?=.*\d).{8,}$/;
let phoneRegex = /^07\d{8}$/;

form.onsubmit = function(event) {
    event.preventDefault();

    let username = usernameInput.value;
    let password = passwordInput.value;
    let phone = phoneInput.value;
    let order = orderInput.value;

    if (!usernameRegex.test(username)) {
    message.innerHTML = "Username must not be empty or contain spaces.";
    return;

    }

    if (!passwordRegex.test(password)) {
        message.innerHTML =
        "Password must be at least 8 characters and contain a number.";
        return;
    }

    if (!phoneRegex.test(phone)) {
        message.innerHTML =
        "Phone must be exactly 10 digits and start with 07.";
        return;
    }

    message.innerHTML = "Welcome, " + username;

    localStorage.setItem("order", order);

    sessionStorage.setItem("username", username);

    savedOrder.innerHTML =
    "Saved Order: " + localStorage.getItem("order");

    savedUsername.innerHTML =
    "Saved Username: " + sessionStorage.getItem("username");

};