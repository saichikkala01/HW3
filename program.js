function fahrenheitToKelvin(fahrenheit) {
    if (typeof fahrenheit !== "number" || isNaN(fahrenheit)) {
        throw new Error("Input must be a valid number");
    }
    // Convert temperature in degrees Fahrenheit to Kelvin
    // Formula: K = (F - 32) * 5/9 + 273.15
    return ((fahrenheit - 32) * 5) / 9 + 273.15;
}

function cubicYardsPerMinuteToCubicMetersPerMinute(cubicYardsPerMinute) {
    if (typeof cubicYardsPerMinute !== "number" || isNaN(cubicYardsPerMinute)) {
        throw new Error("Input must be a valid number");
    }
    // Convert flow rate from cubic yards per minute to cubic meters per minute
    // 1 cubic yard = 0.764555 cubic meters
    return cubicYardsPerMinute * 0.764555;
}

function hexToRgb(hexColor) {
    if (
        typeof hexColor !== "string" ||
        !hexColor.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)
    ) {
        throw new Error("Invalid HEX color code");
    }
    // Convert hexadecimal color code to RGB values
    const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const result = regex.exec(hexColor);

    return [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
    ];
}

module.exports = {
    fahrenheitToKelvin,
    cubicYardsPerMinuteToCubicMetersPerMinute,
    hexToRgb,
};
