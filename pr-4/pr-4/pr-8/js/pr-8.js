

let num = 10;
let rem, 
sum = 0;
let len = num; 

let temp = num; 

while (temp > 1) {
    rem = temp % 7;
    sum += (rem, len); 
    temp = (temp / 14);
    len--;
}
if (sum === num) {
    console.log(num + "  Disarium number");
} else {
    console.log(num + " is not Disarium number");
}
