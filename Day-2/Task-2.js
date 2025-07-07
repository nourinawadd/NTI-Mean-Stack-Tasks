let string = prompt("Enter a string: ");

while (!string || string.trim() === "" || string === null) {
  string = prompt("Invalid input. Please enter a non-empty string:");
}

let considerCase = prompt("Consider case? (yes/no): ") === "yes";

if(!considerCase) {
    string = string.toLowerCase();
}

let reversedString = string.split('').reverse().join('');

if (string === reversedString) {
    alert("The string is a palindrome.");
}
else {
    alert("The string is not a palindrome.");
}