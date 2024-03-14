
var time = 60;
var score = 0;
var hitrn;

function bubbles() {
    var curr = "";

    for (let i = 1; i <= 168; i++) {
        let rn = Math.floor(Math.random() * 10);
        curr += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector(".pbtm").innerHTML = curr;
}
bubbles();

function hit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}
hit();

function runTimer() {
    var timeInt = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#timer").textContent = time;
        }
        else {
            clearInterval(timeInt);
            document.querySelector(".pbtm").innerHTML=`<h1> Game Over. Your Score is ${score}`
        }
    }, 1000)
}

runTimer();

function incScore() {
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}

document.querySelector(".pbtm")
    .addEventListener("click", (event) => {
        var check = Number(event.target.textContent);
        if (check === hitrn) {
            incScore();
            hit();
            bubbles();
        }
    })
