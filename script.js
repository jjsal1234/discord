function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
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
    sendToDiscord(randomNumber);
}

// Display random number on page load
displayRandomNumber();

// Generate and send a new random number to Discord every minute
setInterval(displayRandomNumber, 60000);
