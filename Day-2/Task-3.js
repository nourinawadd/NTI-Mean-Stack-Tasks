let string = prompt("Enter a string: ");
let count = 0;

string = string.toLowerCase();
for (let i = 0; i < string.length; i++) {
    if (string[i] === 'e') {
        count++;
    }
}

console.log(`Number of 'e' characters: ${count}`);