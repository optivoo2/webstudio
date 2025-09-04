// Mock module for problematic imports
// Comprehensive mock for isbot package - handles all import patterns

// Create a function that always returns false (not a bot)
const isbot = (userAgent?: string) => false;

// Add properties that might be accessed on the function
Object.defineProperty(isbot, "isbot", {
  value: isbot,
  writable: true,
  configurable: true,
  enumerable: true,
});

Object.defineProperty(isbot, "default", {
  value: isbot,
  writable: true,
  configurable: true,
  enumerable: true,
});

// Handle module.exports pattern for CommonJS
if (typeof module !== "undefined" && module.exports) {
  module.exports = isbot;
  module.exports.isbot = isbot;
  module.exports.default = isbot;
}

// Handle both named and default exports for ES modules
export { isbot };
export default isbot;

// Note: Removed global assignment to prevent runtime errors in Vercel
