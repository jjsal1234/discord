let countdownInterval;

function generateRandomNumber() {
    return Math.floor(Math.random() * 1000001); // Generates a random number between 0 and 1 million
}

function sendToDiscord(randomNumber) {
    const webhookURL = 'https://discord.com/api/webhooks/1216854549579694180/tDEnQF-tW3PXYnOQCyVW84RtGMt4C5Zmd2ZtazCIhba1psWUP8D-OAcvVIdAhBYrEklf';
    const data = {
        content: 'Random Number: ' + randomNumber
    };
    
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            console.error('Error sending message to Discord:', response.statusText);
        } else {
            console.log('Message sent to Discord successfully.');
        }
    })
    .catch(error => {
        console.error('Error sending message to Discord:', error);
    });
}

function displayRandomNumber() {
    var randomNumber = generateRandomNumber();
    console.log('Random Number:', randomNumber);
    document.getElementById("randomNumber").textContent = "Random Number: " + randomNumber;
    sendToDiscord(randomNumber);
}

function startCountdown() {
    let secondsLeft = 60;
    countdownInterval = setInterval(function() {
        document.getElementById("countdown").textContent = "Time until next number: " + secondsLeft + " seconds";
        secondsLeft--;
        if (secondsLeft < 0) {
            clearInterval(countdownInterval);
            displayRandomNumber();
            startCountdown();
        }
    }, 1000);
}

function generateNewNumber() {
    clearInterval(countdownInterval);
    window.location.reload(); // Reload the page
}

// Display random number on page load
displayRandomNumber();
startCountdown();
