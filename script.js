const buttonEl = document.querySelector("#formatToggle");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const dateEl = document.querySelector("#date");
const ampmEl = document.querySelector("#ampm");
const timeDisplay = document.querySelector(".time-display");
let ampm;
setInterval(() => {
  const now = new Date();
  now.setHours(24)
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let hours = now.getHours();

  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
  
  if (hours>=12) {
    ampm = "P.M"
    ampmEl.textContent = ampm
  } else {
    ampm = "A.M"
    ampmEl.textContent = ampm
  };
}, 1000);

let is24Hour = true;

buttonEl.addEventListener("click",()=>{
    is24Hour = !is24Hour
    buttonEl.textContent = is24Hour?"Switch to 24H":"Switch to 12H"
});