
function swappingValues(a, b) {
    console.log("Before swapping: a =", a, "and b =", b);
    
    a = a + b;
    b = a - b;
    a = a - b;
    
    console.log("After swapping: a =", a, "and b =", b);
}
let x = 20;
let y = 5;
swappingValues(x, y);
