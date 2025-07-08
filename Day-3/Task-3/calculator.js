let currentInput = "";

function EnterNumber(value) {
    currentInput += value;
    document.getElementById("Answer").value = currentInput;
}

function EnterOperator(operator) {
    // prevent two operators in a row
    if (currentInput === "") return;
    const lastChar = currentInput.slice(-1);
    if ("+-*/".includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    document.getElementById("Answer").value = currentInput;
}

function EnterEqual() {
    try {
        // evaluate the expression
        const result = eval(currentInput);
        document.getElementById("Answer").value = result;
        currentInput = result.toString();
    } catch (e) {
        document.getElementById("Answer").value = "Error";
        currentInput = "";
    }
}

function EnterClear() {
    currentInput = "";
    document.getElementById("Answer").value = "";
}