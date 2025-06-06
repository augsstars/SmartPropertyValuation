// Ensure script runs only if button exists
document.addEventListener("DOMContentLoaded", function () {
    let startButton = document.getElementById("startButton");
    let formContainer = document.getElementById("formContainer");

    if (startButton && formContainer) {
        startButton.addEventListener("click", function() {
            formContainer.style.display = "block";
        });
    }
});

// Capture user input for house search
function searchHouses() {
    let style = document.getElementById("style").value;
    let bedrooms = document.getElementById("bedrooms").value;
    let bathrooms = document.getElementById("bathrooms").value;
    let preferences = document.getElementById("preferences").value;

    console.log("Searching for:", style, bedrooms, bathrooms, preferences);
    alert("Looking for houses with " + style + ", " + bedrooms + " bedrooms, " + bathrooms + " bathrooms, and preferences: " + preferences);
}
