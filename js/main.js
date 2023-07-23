const startBtn = document.querySelector(".btn-start")
const pauseBtn = document.querySelector(".btn-pause")
const resetBtn = document.querySelector(".btn-reset")
const display = document.querySelector("#display")

let starTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener('click', () => {
    if(paused){
        paused = false;
        starTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 500)
    }

})

pauseBtn.addEventListener('click', () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - starTime;
        clearInterval(intervalId);
    }
})

resetBtn.addEventListener('click', () => {
        paused = true;
        elapsedTime = 0;
        currentTime = 0;
        starTime = 0;
        clearInterval(intervalId);

        display.textContent = "00:00:00";
    }
)


function updateTime(){
    elapsedTime = Date.now() - starTime;

    secs = Math.floor(elapsedTime / 1000 % 60);
    mins = Math.floor(elapsedTime / (1000 * 60) % 60);
    hrs = Math.floor(elapsedTime / (1000 * 60 * 60) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs  = pad(hrs);

    display.textContent = `${hrs}:${mins}:${secs}`

    function pad(x){
        return ("0" + x).length > 2 ? x : "0" + x;
    }

}