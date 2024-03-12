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
