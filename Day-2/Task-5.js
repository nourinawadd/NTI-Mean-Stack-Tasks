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
let divisionResult;
if (numbers[1] === 0 || numbers[2] === 0) {
    divisionResult = "Cannot divide by zero";
} else {
    let division = numbers[0] / numbers[1] / numbers[2];
    divisionResult = `${numbers[0]}/${numbers[1]}/${numbers[2]} = ${division}`;
}

document.getElementById("sum").innerText = `${numbers[0]}+${numbers[1]}+${numbers[2]} = ${sum}`;
document.getElementById("product").innerText = `${numbers[0]}*${numbers[1]}*${numbers[2]} = ${product}`;
document.getElementById("division").innerText = divisionResult;