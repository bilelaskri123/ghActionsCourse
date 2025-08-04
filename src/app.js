function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet; // Ensure function is exportable

if (require.main === module) {
  let name = process.argv[2] || "Bilel"; // Get name from command line argument or default to "World"
  console.log(greet(name));
}
