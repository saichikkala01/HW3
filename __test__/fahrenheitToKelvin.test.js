const { fahrenheitToKelvin } = require("../program");

describe("Fahrenheit to Kelvin Conversion", () => {
    test("Test Case 1: Normal case, 32°F should equal 273.15 K", () => {
        // Reason: Standard temperature conversion, ensuring the function works for typical use cases.
        expect(fahrenheitToKelvin(32)).toBeCloseTo(273.15);
    });

    test("Test Case 2: Negative Fahrenheit value, -40°F should equal 233.15 K", () => {
        // Reason: Testing negative temperature conversion, checking if the function handles negative input correctly.
        expect(fahrenheitToKelvin(-40)).toBeCloseTo(233.15);
    });

    test("Test Case 3: Extreme high Fahrenheit value, 1000°F should equal 810.927 K", () => {
        // Reason: Testing extreme high temperature conversion, ensuring the function produces accurate results for large values.
        expect(fahrenheitToKelvin(1000)).toBeCloseTo(810.927);
    });

    test("Test Case 4: Decimal Fahrenheit value, 98.6°F should equal 310.15 K", () => {
        // Reason: Testing decimal temperature conversion, ensuring the function handles decimal inputs correctly.
        expect(fahrenheitToKelvin(98.6)).toBeCloseTo(310.15);
    });

    test("Test Case 5: Non-numeric input should throw an error", () => {
        // Reason: Testing error handling, ensuring the function throws an error for invalid input types.
        expect(() => {
            fahrenheitToKelvin("not a number");
        }).toThrow("Input must be a valid number");
    });
});
