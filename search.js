function searchHouses() {
    if (!validateForm()) return;

    let style = document.getElementById("style").value;
    let bedrooms = document.getElementById("bedrooms").value;
    let bathrooms = document.getElementById("bathrooms").value;
    let preferences = document.getElementById("preferences").value;

    console.log("Searching for:", style, bedrooms, bathrooms, preferences);
    alert("Looking for houses with " + style + ", " + bedrooms + " bedrooms, " + bathrooms + " bathrooms, and preferences: " + preferences);

    // Future Zillow API Call (Not functional yet)
    // fetchZillowListings();
}

// Placeholder for Zillow API
async function fetchZillowListings() {
    let location = document.getElementById("location").value;
    let apiUrl = `https://api.zillow.com/example-endpoint?location=${encodeURIComponent(location)}`;

    try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        console.log("Zillow listings:", data);
    } catch (error) {
        console.error("Error fetching Zillow listings:", error);
    }
}
