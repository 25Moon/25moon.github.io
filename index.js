const roll1= document.querySelector(".btn-r1");
const roll2= document.querySelector(".btn-r2");
const skip1= document.querySelector(".btn-s1");
const skip2= document.querySelector(".btn-s2");
let turn = 1;
let output1 = 0;
let output2 = 0;
const p1RollsLeft = document.querySelector(".p1-rolls-left");
const p2RollsLeft = document.querySelector(".p2-rolls-left");
const outcome = document.querySelector(".outcome");
let clicks1 = 3;
let clicks2 = 3;
let prev1 = document.querySelector(".dice1.p1");
let prev2 = document.querySelector(".dice1.p2");
let p1wins = 0;
let p2wins = 0;

//Event P1
roll1.addEventListener("click", () => {
    if (turn === 1 && clicks1 > 0) {
        prev1.classList.add("hidden");
        output1 = Math.ceil(Math.random() * 9);
        prev1 = document.querySelector(".dice" + output1 + ".p1");
        prev1.classList.remove("hidden");
        clicks1--;
        turn = 0;
        p1RollsLeft.innerHTML = clicks1 + " Rolls Left";
    }
})
skip1.addEventListener("click", () => {
        if (turn === 1 && clicks1 > 0) {
            clicks1--;
            turn = 0;
            p1RollsLeft.innerHTML = clicks1 + " Rolls Left";
    }
})

//Event P2
roll2.addEventListener("click", () => {
    if (turn === 0) {
        prev2.classList.add("hidden");
        output2 = Math.ceil(Math.random() * 9);
        prev2 = document.querySelector(".dice" + output2 + ".p2");
        prev2.classList.remove("hidden");
        clicks2--;
        turn = 1;
        p2RollsLeft.innerHTML = clicks2 + " Rolls Left";
        }
    if (clicks2 === 0) {
        endGame();
    }

})
skip2.addEventListener("click", () => {
        if (turn === 0) {
            clicks2--;
            turn = 1;
            p2RollsLeft.innerHTML = clicks2 + " Rolls Left";
        }
        if (clicks2 === 0) {
            endGame();
        }
})
function endGame() {
    if (output1 > output2) {
        outcome.innerHTML = "Player 1 Won!";
        p1wins++;
        let tally = document.querySelector(".p1winC .claw:nth-child(" + p1wins + ")");
        tally.classList.remove("hidden")
    } else if (output2 > output1) {
        outcome.innerHTML = "Player 2 Won!";
        p2wins++;
        let tally = document.querySelector(".p2winC .claw:nth-child(" + p2wins + ")");
        tally.classList.remove("hidden")
    } else {
        outcome.innerHTML = "Tie!";
    }
    setTimeout(function () {
        outcome.innerHTML = "";
        clicks1 = 3;
        clicks2 = 3;
        p1RollsLeft.innerHTML = clicks1 + " Rolls Left";
        p2RollsLeft.innerHTML = clicks2 + " Rolls Left";
        prev1.classList.add("hidden");
        prev2.classList.add("hidden");
        prev1 = document.querySelector(".dice1.p1");
        prev2 = document.querySelector(".dice1.p2");
        prev1.classList.remove("hidden");
        prev2.classList.remove("hidden");
        if (p1wins === 5 || p2wins === 5) {
            outcome.innerHTML = "GAME OVER";
        }
    }, 2000)
}
