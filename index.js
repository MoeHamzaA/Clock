setTime();

function setTime() {
  let d = new Date();
  let amPm = "AM";
  let hours = d.getHours();
  let mins = d.getMinutes();
  let sec = d.getSeconds();

  if (hours > 12) {
    hours = hours - 12;
    amPm = "PM";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = mins;
  document.getElementById("seconds").innerHTML = sec;
  document.getElementById("amOrPm").innerHTML = amPm;
  setTimeout(setTime, 1000);
}
