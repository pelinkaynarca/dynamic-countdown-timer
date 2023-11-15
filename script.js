// Declare global variables
let timer; // To store the setInterval instance
let timeInSeconds; // To store the remaining time in seconds
let isPaused = false; // To track whether the timer is paused or not

// Function to start the timer
function startTimer() {
    // Get the input time from the user
    const inputMinutes = parseInt(document.getElementById('inputTime').value);

    // Validate the input
    if (isNaN(inputMinutes) || inputMinutes <= 0) {
        alert("Lütfen geçerli bir sayı giriniz.");
        return;
    }

    // Convert minutes to seconds
    timeInSeconds = inputMinutes * 60;

    // Clear any existing intervals and reset paused state
    clearInterval(timer);
    isPaused = false;

    // Update the timer display
    updateTimerDisplay();

    // Set up a new interval to decrement the time every second
    timer = setInterval(function () {
        // Check if the timer is not paused and there is time remaining
        if (!isPaused && timeInSeconds > 0) {
            // Decrement the time
            timeInSeconds--;

            // Update the timer display
            updateTimerDisplay();
        } else if (timeInSeconds === 0) {
            // If time has expired, clear the interval, show alert, and optionally perform additional actions
            clearInterval(timer);
            alert("Süre bitti!");
        }
    }, 1000);
}

// Function to pause/resume the timer
function pauseResumeTimer() {
    isPaused = !isPaused; // Toggle the paused state
}

// Function to update the timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    // Display the formatted time
    document.getElementById('timer').innerText = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Function to format time with leading zeros
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
