function updateSettings() {
    const intervalInput = document.getElementById("intervalInput");
    const generateInterval = parseInt(intervalInput.value, 10);
    const themeSelect = document.getElementById("themeSelect");
    const selectedTheme = themeSelect.value;
    
    // Update settings
    localStorage.setItem("generateInterval", generateInterval);
    localStorage.setItem("theme", selectedTheme);
}
