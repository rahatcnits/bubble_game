var timer = 60;

function getNewHit() {
  var rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = rn;
}

function makeBubble() {
  var clutter = "";

  for (let i = 1; i <= 168; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
    }
  }, 1000);
}

makeBubble();
runTimer();
getNewHit();
