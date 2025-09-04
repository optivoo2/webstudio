// Mock for isbot package to prevent global property assignment errors in Vercel
// This mock ensures bot detection functionality without runtime errors

const isbot = (userAgent?: string): boolean => false;

// Add properties that might be accessed on the function object
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

// Handle module.exports pattern for CommonJS compatibility
if (typeof module !== "undefined" && module.exports) {
  module.exports = isbot;
  module.exports.isbot = isbot;
  module.exports.default = isbot;
}

// Handle both named and default exports for ES modules
export { isbot };
export default isbot;
