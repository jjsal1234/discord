function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
}

function displayRandomNumber() {
    var randomNumber = generateRandomNumber();
    document.getElementById("randomNumber").textContent = "Random Number: " + randomNumber;
}

// Display random number on page load
displayRandomNumber();

// Generate and display a new random number every minute
setInterval(displayRandomNumber, 60000);
