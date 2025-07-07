function sum(args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number' || isNaN(args[i]) || args[i] === null) {
            return "Invalid input, all arguments must be numbers";
        }
        total += args[i];
    }

    return total;
}

// example usage
console.log(sum([1, 2, 3]));
console.log(sum([1, 2, '3']));
console.log(sum([1, 2, 'hi']));
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));