

let con = " ";
let patternq = document.getElementById("pr-13");
let numrows = 5;

for (p = numrows; p >= 2; p--) {
    for (let j = 5; j >= p; j--) {
        con += j + " ";
    }
    con += "<br/>";
}
patternq.innerHTML = (con);
