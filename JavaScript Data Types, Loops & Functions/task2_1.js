const menu = [
  { name: "Burger", price: 5, category: "Fast Food", available: true },
  { name: "Shawarma", price: 3, category: "Arabic Food", available: true },
  { name: "Zinger", price: 4, category: "Fast Food", available: true },
  { name: "Pizza", price: 6, category: "Italian Food", available: false },
  { name: "Mansaf", price: 8, category: "Jordanian Food", available: true }
];

function showMenu() {
  for (let i = 0; i < menu.length; i++) {

    if (menu[i].available == false) {
      continue;
    }
    console.log(menu[i].name + " - " + menu[i].price);
  }
}
showMenu();

let selectedFood = null;
while (selectedFood == null) {
  let choice = prompt("Enter food name:");
  for (let i = 0; i < menu.length; i++) {

    if (menu[i].available == false) {
      continue;
    }
    if (menu[i].name == choice) {
      selectedFood = menu[i];
      break;
    }
  }
  if (selectedFood == null) {
    alert("Food not available, try again.");
  }
}

for (let key in selectedFood) {
  console.log(key + selectedFood[key]);
}

let quantity =prompt("Enter quantity:");
let total = selectedFood.price * quantity;
document.write("Food: " + selectedFood.name + "<br>");
document.write("Quantity: " + quantity + "<br>");
document.write("Total: " + total);