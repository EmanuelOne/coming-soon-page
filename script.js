// Set the date we're counting down to
var futureDate = new Date('2021/12/25').getTime();
// 1970 since 1970/1/1

// Update the count down every 1 second
// Get today's date and time
function getCountdown() {
  var now = new Date().getTime();
  // as at now

  // Find the distance between now and the count down date
  var distance = futureDate - now;
  // distance in milliseconds
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
function callBack() {
  var countdown = getCountdown();
  console.log(countdown);
  var boxes = document.getElementsByClassName('box');
  var box1 = boxes[0];
  var box2 = boxes[1];
  var box3 = boxes[2];
  var box4 = boxes[3];
  var days = countdown.days;
  var hours = countdown.hours;
  var minutes = countdown.minutes;
  var seconds = countdown.seconds;
  if (days < 10) {
    days = '0' + days;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  var paragraph = (number) => {
    return '<p>' + number + '</p>';
  };
  box1.innerHTML = '<p>' + days + '</p>';
  box2.innerHTML = '<p>' + hours + '</p>';
  box3.innerHTML = '<p>' + minutes + '</p>';
  box4.innerHTML = '<p>' + seconds + '</p>';
}
setInterval(callBack, 1000);
