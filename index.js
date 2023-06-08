const buttonC= document.querySelector(".btn");
const mainT= document.querySelector("h1");
let countS = 0;
let countM = 0;
let countH = 0;
let onCheck = false;

setInterval(() => {
    if (onCheck) {
        countS ++;
        if (countS > 59) {
            countS = 0;
            countM += 1;
        }
        if (countM > 59) {
            countM = 0;
            countH += 1;
        }
        mainT.innerHTML = String(countH).padStart(2, '0') + ":" +
            String(countM).padStart(2, '0') + ":" +
            String(countS).padStart(2, '0');
    }
},1000);

buttonC.addEventListener("click", () => {
    if (onCheck) {
        mainT.innerHTML = "00:00:00";
        onCheck = false;
    } else {
        countS = 0;
        countM = 0;
        countH = 0;
        onCheck = true;
    }
})