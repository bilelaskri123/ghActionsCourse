const assert = require("assert");
const greet = require("./app"); // Adjust the path as necessary

try {
  assert.strictEqual(greet("Bilel"), "Hello, Bilel!");
  assert.strictEqual(greet("World"), "Hello, World!");
} catch (error) {
  console.error("Test failed:", error);
  process.exit(1); // Exit with a failure code
}
