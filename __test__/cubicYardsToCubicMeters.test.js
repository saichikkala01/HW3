const { cubicYardsPerMinuteToCubicMetersPerMinute } = require("../program");

describe("Cubic Yards per Minute to Cubic Meters per Minute Conversion", () => {
    test("Test Case 1: Normal case, 10 cubic yards per minute should equal approximately 7.64555 cubic meters per minute", () => {
        // Reason: Standard flow rate conversion, ensuring the function produces accurate results for typical use cases.
        expect(cubicYardsPerMinuteToCubicMetersPerMinute(10)).toBeCloseTo(
            7.64555,
        );
    });

    test("Test Case 2: Zero cubic yards per minute should equal 0 cubic meters per minute", () => {
        // Reason: Testing flow rate conversion with zero input, ensuring the function handles zero values correctly.
        expect(cubicYardsPerMinuteToCubicMetersPerMinute(0)).toBe(0);
    });

    test("Test Case 3: Large value, 1000 cubic yards per minute should equal approximately 764.555 cubic meters per minute", () => {
        // Reason: Testing flow rate conversion with large input, ensuring the function produces accurate results for large values.
        expect(cubicYardsPerMinuteToCubicMetersPerMinute(1000)).toBeCloseTo(
            764.555,
        );
    });

    test("Test Case 4: Negative cubic yards per minute, -5 cubic yards per minute should equal approximately -3.822775 cubic meters per minute", () => {
        // Reason: Testing negative flow rate conversion, checking if the function handles negative input correctly.
        expect(cubicYardsPerMinuteToCubicMetersPerMinute(-5)).toBeCloseTo(
            -3.822775,
        );
    });

    test("Test Case 5: Non-numeric input should throw an error", () => {
        // Reason: Testing error handling, ensuring the function throws an error for invalid input types.
        expect(() => {
            cubicYardsPerMinuteToCubicMetersPerMinute("not a number");
        }).toThrow("Input must be a valid number");
    });
});
