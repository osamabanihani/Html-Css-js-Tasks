const userName = prompt("Enter your name:");
const userAge = prompt("Enter your age:");
const userGender = prompt("Enter your gender:");

let valid = false;
let isAvailable = false;
let userChoice;
let orderStatus;

    if (userGender == "male") {
    alert("Welcome Mr. " + userName);
    }else{
    alert("Welcome Ms. " + userName);
    } 

    if (userAge < 16) {
    alert("eligible to order");
    } else {
    userChoice = prompt("Please enter one of them Burger, Shawarma, Zinger");
    if (userChoice == "burger" ||userChoice == "Shawarma" ||userChoice == "Zinger") {
        alert("Your order is prepared");
        valid = true;
        isAvailable = true;
    } else {
        alert("Invalid order Please try again");
        valid = false;
        isAvailable = false;
    }

    if (isAvailable) {
        alert("The order can be prepared");

    } else {
        alert("The order cannot be prepared");
    }

    if (userAge >= 18 && valid) {
        orderStatus = "Order confirmed";
        alert(orderStatus);

    } else if (userAge < 18 || !valid) {
        orderStatus = "Order requires verification";
        alert(orderStatus);
    }
    document.write("<h2> Order Summary</h2>");
    document.write("<h4> Customer Name: " + userName + "</h4>");
    document.write("<h4> Gender: " + userGender + "</h4>");
    document.write("<h4> Age: " + userAge + "</h4>");
    document.write("<h4> Order: " + userChoice + "</h4>");
    document.write("<h4> Order Status: " + orderStatus + "</h4>");
}