
let nameInput = document.getElementById("customerName");
let orderSelect = document.getElementById("order");
let submitBtn = document.getElementById("submitBtn");

let heading = document.getElementsByTagName("h1");
heading[0].style.color = "blue";

let result = document.getElementsByClassName("result");

let restaurantBox = document.querySelector(".restaurant");
restaurantBox.style.borderRadius = "20px";

submitBtn.onclick = function () {
let customerName = nameInput.value;
let order = orderSelect.value;

result[0].innerHTML =
"Hello " + customerName + "! Your order is " + order + ".";
};

submitBtn.onmouseover = function () {
submitBtn.style.backgroundColor = "green";
};

submitBtn.onmouseout = function () {
submitBtn.style.backgroundColor = "orange";
};