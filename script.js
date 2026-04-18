let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function start() {
    if (!timer) {
        timer = setInterval(updateTime, 1000);
    }
}

function pause() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    pause();
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerText = "00:00:00";
}

function updateTime() {
    seconds++;

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');

    document.getElementById("display").innerText = `${h}:${m}:${s}`;
}