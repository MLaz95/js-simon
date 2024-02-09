const timerElement = document.querySelector('#timer');


// today's date in milliseconds
const now = new Date().getTime();

// monday's date in milliseconds
const targetDate = new Date('Feb 12, 2024 09:30:00').getTime();

// how many milliseconds are left till 9:30 on monday 12th
const waitTime = targetDate - now;

console.log(now)
console.log(targetDate)
console.log(waitTime);

