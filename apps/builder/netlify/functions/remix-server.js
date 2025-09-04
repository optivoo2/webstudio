// Netlify Function wrapper for Remix SSR
const path = require("path");

// Import the Remix server build
const build = require("../../build/server/index.js");

// Netlify Function handler
exports.handler = async (event, context) => {
  try {
    // Create a request object compatible with Remix
    const url = new URL(
      event.rawUrl || `https://${event.headers.host}${event.path}`
    );

    // Add query parameters
    if (event.queryStringParameters) {
      Object.entries(event.queryStringParameters).forEach(([key, value]) => {
        url.searchParams.set(key, value);
      });
    }

    // Create the request
    const request = new Request(url.toString(), {
      method: event.httpMethod,
      headers: new Headers(event.headers),
      body:
        event.httpMethod !== "GET" && event.httpMethod !== "HEAD"
          ? event.body
          : undefined,
    });

    // Handle the request with Remix
    const response = await build.default.fetch(request, {
      cloudflare: {
        env: {},
      },
    });

    // Convert Response to Netlify format
    const body = await response.text();
    const headers = {};

    response.headers.forEach((value, key) => {
      headers[key] = value;
    });

    return {
      statusCode: response.status,
      headers,
      body,
    };
  } catch (error) {
    console.error("Remix server error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
    };
  }
};
