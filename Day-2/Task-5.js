let numbers = [];

for (let i = 0; i < 3; i++) {
    let value = prompt(`Enter number ${i + 1}:`);
    while (isNaN(value) || value.trim() === "") {
        value = prompt(`Invalid input. Please enter a valid number for number ${i + 1}:`);
    }
    numbers.push(Number(value));
}

let sum = numbers[0] + numbers[1] + numbers[2];
let product = numbers[0] * numbers[1] * numbers[2];
let division = numbers[0] / numbers[1] / numbers[2];

console.log(`sum of the 3 values ${numbers[0]}+${numbers[1]}+${numbers[2]} = ${sum}`);
console.log(`multiplication of the 3 values ${numbers[0]}*${numbers[1]}*${numbers[2]} = ${product}`);
console.log(`division of the 3 values ${numbers[0]}/${numbers[1]}/${numbers[2]} = ${division}`);