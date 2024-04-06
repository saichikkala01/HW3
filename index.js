const {
    fahrenheitToKelvin,
    cubicYardsPerMinuteToCubicMetersPerMinute,
    hexToRgb,
} = require("./program");

const TEMPERATURE = 32;
const CUBICYARDSPERMINUTE = 10;
const HEX_COLOR = "#FF0000";
console.log(fahrenheitToKelvin(TEMPERATURE)); // Output: 273.15
console.log(cubicYardsPerMinuteToCubicMetersPerMinute(CUBICYARDSPERMINUTE)); // Output: 7.64555
console.log(hexToRgb(HEX_COLOR)); // Output: [255, 0, 0]
