let Fahrenheit = (fah) => {
    let c;
    c = (fah - 32) / 1.8; 
    return c; 
}

let fah = 100;
let celsius = Fahrenheit(fah); 
document.querySelector("span").innerHTML = celsius; 
