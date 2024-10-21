function calculate(op: string, a: number, b: number): number | string {
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

const a=9;
const b=10;
console.log(calculate('*', a, b));