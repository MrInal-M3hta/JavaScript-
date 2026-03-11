// Digital Clock Script Basic Version
/*
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");



setInterval(()=>{
    let myDate = new Date();

    hrs.innerHTML = myDate.getHours();
    min.innerHTML = myDate.getMinutes();
    sec.innerHTML = myDate.getSeconds();

},1000);
*/

// Digital Clock Script Improved Version
/*
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function updateClock() {
    const now = new Date();

    hrs.textContent = String(now.getHours()).padStart(2, "0");
    min.textContent = String(now.getMinutes()).padStart(2, "0");
    sec.textContent = String(now.getSeconds()).padStart(2, "0");
}

updateClock();              // run immediately
setInterval(updateClock, 1000);
*/ 

// Digital Clock Script with AM/PM
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const ampm = document.getElementById("ampm"); 

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    hrs.textContent = String(hours).padStart(2, "0");
    min.textContent = String(minutes).padStart(2, "0");
    sec.textContent = String(seconds).padStart(2, "0");

    if (ampm) ampm.textContent = period;
}

updateClock();
setInterval(updateClock, 1000);

/*
🔹 WHY THESE IMPROVEMENTS MATTER

Change              Why
textContent         Safer & faster than innerHTML
padStart()          Proper digital clock format
Function wrapper    Clean & reusable
Immediate call      No 1-second blank screen
*/