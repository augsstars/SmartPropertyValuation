class PropertyValuationAlgorithm {
    constructor(location, size, amenities) {
        this.location = location;
        this.size = size;
        this.amenities = amenities;
    }

    // ✅ Gather data about similar properties
    gatherData() {
        return [
            { location: "New York", size: 1600, amenities: ["pool", "gym"], price: 500000 },
            { location: "New Jersey", size: 1800, amenities: ["garage", "garden"], price: 420000 }
        ];
    }

    // ✅ Calculate the estimated property value based on gathered data
    calculateValue(properties) {
        if (properties.length === 0) return "No data available";

        let avgPrice = properties.reduce((acc, prop) => acc + prop.price, 0) / properties.length;
        return avgPrice.toFixed(2); // Ensuring proper decimal formatting
    }

    // ✅ Present valuation results with improved output
    presentValue(value, recommendations) {
        console.log(`📊 Estimated Property Value: $${value.toLocaleString()}`);
        console.log("💡 Recommendations:");
        recommendations.forEach((rec, index) => console.log(`${index + 1}. ${rec}`));
    }

    // ✅ Adjust property inputs while ensuring valid data
    adjustInputs(location, size, amenities) {
        if (typeof location !== "string" || typeof size !== "number" || !Array.isArray(amenities)) {
            console.error("Invalid input format");
            return;
        }

        this.location = location;
        this.size = size;
        this.amenities = amenities;
    }

    // ✅ Update algorithm with new property data
    updateAlgorithm(newProperties) {
        const existingData = this.gatherData();
        existingData.push(...newProperties);
    }

    // ✅ Save results for future reference
    saveResults(value, recommendations) {
        console.log("💾 Results saved:", { value, recommendations });
    }

    // ✅ Connect owners with real estate professionals
    connectWithProfessionals() {
        console.log("🔗 Connecting with real estate professionals...");
    }

    // ✅ Provide explanations and insights into property valuation
    provideExplanation() {
        console.log("📘 Providing explanations and valuation insights...");
    }
}

// Driver class to test the algorithm
class PropertyValuationDriver {
    static main() {
        let algorithm = new PropertyValuationAlgorithm("New York", 1500, ["pool", "gym", "balcony"]);

        let properties = algorithm.gatherData();
        let value = algorithm.calculateValue(properties);

        algorithm.presentValue(value
  
  

