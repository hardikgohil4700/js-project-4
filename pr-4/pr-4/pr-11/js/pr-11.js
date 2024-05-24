
let b;
let hyp = "";

for (b = 1; b <= 20; b++) {
    hyp += b;
    if (b < 35) {
        hyp += "-";
    }
}
document.getElementById("hypen").innerHTML = hyp;
