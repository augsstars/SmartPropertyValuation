function validateForm() {
    let style = document.getElementById("style").value.trim();
    let bedrooms = document.getElementById("bedrooms").value.trim();
    let bathrooms = document.getElementById("bathrooms").value.trim();

    if (style === "" || bedrooms === "" || bathrooms === "") {
        alert("Please fill out all required fields.");
        return false;
    }

    return true;
}
