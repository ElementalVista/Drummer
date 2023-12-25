 

// Function to play sound when a key is pressed
function PlaySound(event) {
    // Select the audio element corresponding to the pressed key
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    // Select the key element corresponding to the pressed key
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    // If no audio element is found, exit the function
    if (!audio) return;

    // Rewind the audio to the start to allow multiple key presses without waiting
    audio.currentTime = 0;
    // Play the audio
    audio.play();
    // Add the 'playing' class to the key element for styling effects
    key.classList.add('playing');
}

// Function to remove the 'playing' class after the CSS transition ends
function removeTransition(event) {
    // Skip if the transition is not related to the 'transform' property
    if (event.propertyName !== 'transform') return;
    // Remove the 'playing' class from the current element
    this.classList.remove('playing');
}

// Select all elements with class 'key'
const keys = document.querySelectorAll('.key');

// Add a 'transitionend' event listener to each key element
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Add a 'keydown' event listener to the window to trigger the PlaySound function
window.addEventListener('keydown', PlaySound);

// Refresh the background image every 30 seconds
function refreshURL() {
    // Define the URL for the background image using Unsplash with a drummer tag
    let imageRefresh = 'https://source.unsplash.com/1920x1080/?drummer';
    // Add a timestamp to the URL to force a refresh
    imageRefresh += '?' + new Date().getTime();
    // Set the background image of the document body
    document.body.style.backgroundImage = 'url(' + imageRefresh + ')';
}

// Call the refreshURL function to set the initial background image
refreshURL();

// Set an interval to refresh the background image every 30 seconds (30,000 milliseconds)
setInterval(refreshURL, 30000);