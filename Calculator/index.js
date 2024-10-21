function calculate(op, a, b) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return a / b;
        default:
            return "Error: Invalid operation.";
    }
}
var a = 9;
var b = 10;
console.log(calculate('*', a, b));
