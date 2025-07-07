let string = prompt("Enter a string: ");
let count = 0;

while (!string || typeof string !== "string" || !string.trim()) {
  string = prompt("Invalid input. Please enter a non-empty string:");
}

string = string.toLowerCase();
for (let i = 0; i < string.length; i++) {
    if (string[i] === 'e') {
        count++;
    }
}

alert(`Number of 'e' characters: ${count}`);

