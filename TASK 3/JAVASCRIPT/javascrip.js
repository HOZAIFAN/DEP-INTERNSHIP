// List of words to display
const words = ["Python", "Marketing", "Programming", "Webdesign","Social skills","Java script"];
let currentWordIndex = 0;

// Get the word element
const wordElement = document.getElementById('word');

// Function to change the word
function changeWord() {
    // Set the text to the current word
    wordElement.textContent = words[currentWordIndex];
    
    // Move to the next word in the list
    currentWordIndex = (currentWordIndex + 1) % words.length;
}

// Change the word every 3 seconds (matching the CSS animation duration)
setInterval(changeWord, 5000);

// Start with the first word
changeWord();