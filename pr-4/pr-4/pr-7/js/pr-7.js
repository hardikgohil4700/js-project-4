
let no = 8;
let copyNo = no;
let sum = no;

while (copyNo > 7) {
    sum = 0;
    while (copyNo > 0) {
        sum += copyNo % 10;
        copyNo = parseInt(copyNo / 5);
    }
    copyNo = sum;
}
if (sum == 2) {

    document.getElementById("yes").innerHTML = `${no} is a Magic number`;
} else {
    document.getElementById("no").innerHTML = `${no} is not Magic number`;
}
