function toggleSettings() {
    var settingsPopup = document.getElementById("settingsPopup");
    if (settingsPopup.style.display === "block" || settingsPopup.style.display === "") {
        settingsPopup.style.display = "none";
    } else {
        settingsPopup.style.display = "block";
    }
}

function showCategory(categoryName) {
    var categories = document.querySelectorAll(".category");
    categories.forEach(function(category) {
        category.classList.remove("active");
    });
    var category = document.getElementById(categoryName);
    category.classList.add("active");
}

function setTheme(theme) {
    // Apply selected theme
    if (theme === 'dark') {
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
    }
}

function toggleCustomWebhooks() {
    var customWebhooksCheckbox = document.getElementById('customWebhooks');
    // Implement logic to toggle custom webhooks
    if (customWebhooksCheckbox.checked) {
        // Custom webhooks enabled
        alert("Custom webhooks enabled!");
    } else {
        // Custom webhooks disabled
        alert("Custom webhooks disabled!");
    }
}
