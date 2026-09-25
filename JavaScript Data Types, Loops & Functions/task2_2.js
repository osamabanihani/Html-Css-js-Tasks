//q1
function reverseNumber(num) {
    let conunt = "";
    num = num.toString();
    for (let i = num.length - 1; i >= 0; i--) {
    conunt += num[i];
    }
    console.log(conunt);
}
reverseNumber(532443);

//q2
for (let i = 0; i <= 15; i++) {
if (i % 2 == 0) {
console.log(i + " is even");
} else {console.log(i + " is odd");}
}

//q3
let number = prompt("Enter a number");
let result ="";

for (let i = 0; i < number.length; i++) {
result += number[i];
if (number[i] % 2 == 0 && number[i + 1] % 2 == 0) {
result += "-";
}
}
console.log(result);

//q4
function Agechecker(age) {
if (age >= 18) {console.log("The user is Adult");  
} else {console.log("The user is Minor");}
}
let age =(prompt("Enter your age"));
Agechecker(age);