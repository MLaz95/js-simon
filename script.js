const timerElement = document.querySelector('#timer');

// monday's date in milliseconds
const targetDate = new Date('Feb 12, 2024 09:30:00').getTime();

// the interval constantly updates the difference between now and monday
// and then prints the result on screen
setInterval(function() {

    // the current date in milliseconds
    const now = new Date().getTime();

    // how many milliseconds are left till 9:30 on monday the 12th
    const waitTime = targetDate - now;

    // print result on screen
    timerElement.innerHTML = waitTime;
}, 1);
