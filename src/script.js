// Toggle Banner Visibility
document.getElementById("toggle-button").addEventListener("click", function () {
  const banner = document.getElementById("banner");
  if (banner.style.display === "none") {
    banner.style.display = "block";
    startCountdown(); // Restart the countdown when the banner is shown
  } else {
    banner.style.display = "none";
    clearInterval(countdownInterval); // Stop the countdown when the banner is hidden
  }
});

// Countdown Timer for Banner
const countdownElement = document.getElementById("timer");
const countdownDuration = 5 * 60 * 1000; // 5 minutes in milliseconds
let targetDate;
let countdownInterval;

function startCountdown() {
  targetDate = new Date(new Date().getTime() + countdownDuration); // Set new target date
  clearInterval(countdownInterval); // Clear any existing intervals
  countdownInterval = setInterval(updateCountdown, 1000); // Start the countdown
  updateCountdown(); // Initial call to set countdown immediately
}

function updateCountdown() {
  const now = new Date();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    document.getElementById("banner").style.display = "none"; // Hide the banner
    clearInterval(countdownInterval); // Stop the countdown
    countdownElement.innerHTML = "Time is up!";
    return;
  }

  const minutes = Math.floor(timeLeft / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${minutes}m ${seconds}s`;
}

// Initial setup
startCountdown(); // Start the countdown when the page loads
