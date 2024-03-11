function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
}

function sendToDiscord(randomNumber) {
    const webhookURL = 'YOUR_DISCORD_WEBHOOK_URL';
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
        }
    })
    .catch(error => {
        console.error('Error sending message to Discord:', error);
    });
}

function displayRandomNumber() {
    var randomNumber = generateRandomNumber();
    sendToDiscord(randomNumber);
}

// Display random number on page load
displayRandomNumber();

// Generate and send a new random number to Discord every minute
setInterval(displayRandomNumber, 60000);
