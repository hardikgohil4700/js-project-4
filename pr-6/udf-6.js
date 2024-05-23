function calculateExpression(a, b){
    return (a * a) + (2 * a * b) + (b * b);
}

const a = 10;
const b = 8;
const result = calculateExpression(a,b);
console.log("expression is:", result);