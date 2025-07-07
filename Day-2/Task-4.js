let name = prompt("Enter your name: ");

while (!name || name.trim() === "" || name === null) {
    name = prompt("Name cannot be empty. Please enter your name: ");
}

while(name.length <3) {
    name = prompt("Name must be at least 3 characters long. Please enter your name: ");
}

let phone = prompt("Enter your phone number: ");
while (!phone || phone.trim() === "" || phone === null) {
    phone = prompt("Phone number cannot be empty. Please enter your phone number: ");
}

while (!/^\d{11}$/.test(phone)) {
    phone = prompt("Phone number must be 11 digits long. Please enter your phone number: ");
}

let email = prompt("Enter your email: ");
while (!email || email.trim() === "" || email === null) {
    email = prompt("Email cannot be empty. Please enter your email: ");
}

while (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    email = prompt("Invalid email format. Please enter a valid email: ");
}

alert(`Welcome ${name}! Your phone number is ${phone} and your email is ${email}.`);
