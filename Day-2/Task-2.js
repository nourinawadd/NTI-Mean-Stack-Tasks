let string = prompt("Enter a string: ");
let considerCase = prompt("Consider case? (yes/no): ") === "yes";

if(!considerCase) {
    string = string.toLowerCase();
}

let reversedString = string.split('').reverse().join('');

if (string === reversedString) {
    console.log("The string is a palindrome.");
}
else {
    console.log("The string is not a palindrome.");
}