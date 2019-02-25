var RootDetection = require("nativescript-root-detection").RootDetection;
var rootDetection = new RootDetection();

describe("greet function", function() {
    it("exists", function() {
        expect(rootDetection.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(rootDetection.greet()).toEqual("Hello, NS");
    });
});