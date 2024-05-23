function calculateExpression(b, a, c){
    return(b * b * 4 * a * c) / (2 * a);
}


const b = 20;
const a = 15;
const c = 5;
const result = calculateExpression(b, a, c);
console.log("expreesion is:", result);

