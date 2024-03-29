const timerElement = document.querySelector('#timer');
const textElement = document.querySelector('#message');

// monday's date in milliseconds
const targetDate = new Date('Feb 12, 2024 09:30:00').getTime();

// the interval constantly updates the difference between now and monday
// and then prints the result on screen
const timer = setInterval(function() {

    // the current date in milliseconds
    const now = new Date().getTime();

    // how many milliseconds are left till 9:30 on monday the 12th
    const waitTime = targetDate - now;

    // start with ms --> s --> m --> hr --> d
    const days = Math.floor(waitTime / (1000 * 60 * 60 * 24));
    // what doesn't fit into a day gets turned into hrs
    const hours = Math.floor((waitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // what doesn't fit into an hour gets turned into minutes
    const minutes = Math.floor((waitTime % (1000 * 60 * 60)) / (1000 * 60));
    // what doesn't fit into a minute gets turned into seconds
    const seconds = Math.floor((waitTime % (1000 * 60)) / 1000);

    // print result on screen
    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if(waitTime < 0){
        clearInterval(timer);
        timerElement.innerHTML = `0d 0h 0m 0s`
        textElement.innerHTML = 'Time for class!'
    };

}, 1);
