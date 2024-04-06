const { hexToRgb } = require("../program");

describe("HEX to RGB Conversion", () => {
    test("Test Case 1: Normal case, '#FF0000' should equal [255, 0, 0]", () => {
        // Reason: Standard color conversion, ensuring the function produces accurate results for typical use cases.
        expect(hexToRgb("#FF0000")).toEqual([255, 0, 0]);
    });

    test("Test Case 2: Lowercase hex value, '#00ff00' should equal [0, 255, 0]", () => {
        // Reason: Testing lowercase hexadecimal input, ensuring the function handles lowercase input correctly.
        expect(hexToRgb("#00ff00")).toEqual([0, 255, 0]);
    });

    test("Test Case 3: Mixed case hex value, '#1a2B3c' should equal [26, 43, 60]", () => {
        // Reason: Testing mixed case hexadecimal input, ensuring the function handles mixed case input correctly.
        expect(hexToRgb("#1a2B3c")).toEqual([26, 43, 60]);
    });

    test("Test Case 4: Short hex value, '#fff' should throw an error", () => {
        // Reason: Testing short hexadecimal input, ensuring the function handles short input correctly.
        expect(() => {
            hexToRgb("#fff");
        }).toThrow("Invalid HEX color code");
    });

    test("Test Case 5: Invalid hex value, '#zzz' should throw an error", () => {
        // Reason: Testing error handling, ensuring the function throws an error for invalid hexadecimal input.
        expect(() => {
            hexToRgb("#zzz");
        }).toThrow("Invalid HEX color code");
    });

    test("Test Case 6: Non-string input should throw an error", () => {
        // Reason: Testing error handling, ensuring the function throws an error for invalid input types.
        expect(() => {
            hexToRgb(123);
        }).toThrow("Invalid HEX color code");
    });
});
