console.log("JavaScript connected!");
document.getElementById("myText").innerHTML = "New Text";

let city = "Delhi";
const country = "India";

console.log("City:", city);
console.log("Country:", country);

let name = "Dhruvi";

let age = 20;

let isStudent = true;

let place;

let address = null;

console.log("String:", name);
console.log("Number:", age);
console.log("Boolean:", isStudent);
console.log("Undefined:", city);
console.log("Null:", address);

let agee = 20;

if (agee > 18) {
    console.log("Adult");
} else {
    console.log("Not Adult");
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

console.log("Product:", multiply(5, 4));

// Arrow function to check if a number is even
const isEven = (n) => {
    return n % 2 === 0;
};

console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEven(7));