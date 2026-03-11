
/**
Important Note:
fetch() does NOT directly give data
It gives a Response object. To extract data, we need to use methods like .json(), .text(), etc. on the Response object.


🔥 WHAT IS response?
response is an object representing the HTTP response from the server.
It contains:
	•	status code (200, 404, etc.)
	•	headers
	•	body (raw data)

Example:
Response {
  status: 200,
  ok: true,
  headers: Headers,
  body: ReadableStream
}
👉 It is NOT the actual data yet

// Example of extracting JSON data from the response

fetch('https://api.example.com/data')
  .then(response => {
    console.log(response.status); // e.g., 200
    return response.json(); // Extract JSON data from the response body
  })
  .then(data => {
    console.log(data); // Actual data from the API
  })
  .catch(error => console.error('Error:', error));


=> Why response.json()?
response.json() is a method that reads the response body and parses it as JSON.
It returns a Promise that resolves to the parsed JavaScript object.
Converts it into a JS object.

Example:
fetch('https://api.example.com/data')
  .then(response => response.json()) // Parses JSON body
  .then(data => {
    console.log(data); // Actual data
  });

*/

/**

Fetch API Cheat Sheet

The Fetch API provides a modern, promise-based way to make asynchronous HTTP requests in JavaScript. It is widely supported in browsers and allows developers to easily interact with RESTful APIs and handle network operations.
    @module FetchAPI
    * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    * @see https://fetch.spec.whatwg.org/
    * @example
    // Basic GET request
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

    // POST request with JSON body
    fetch("https://api.example.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "John", age: 30 }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
*/ 

// ===== BASIC FETCH =====
// Simple GET request
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// ===== FETCH WITH OPTIONS (POST) =====
fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer token",
  },
  body: JSON.stringify({ name: "John", age: 30 }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// ===== ALL HTTP METHODS =====
// GET
fetch(url, { method: "GET" });

// POST
fetch(url, { method: "POST", body: JSON.stringify(data) });

// PUT
fetch(url, { method: "PUT", body: JSON.stringify(data) });

// DELETE
fetch(url, { method: "DELETE" });

// PATCH
fetch(url, { method: "PATCH", body: JSON.stringify(data) });

// HEAD
fetch(url, { method: "HEAD" });

// ===== FETCH PROPERTIES & OPTIONS =====
const options = {
  method: "GET", // HTTP method
  headers: {}, // Custom headers
  body: null, // Request body
  mode: "cors", // 'cors', 'no-cors', 'same-origin'
  credentials: "include", // 'omit', 'same-origin', 'include'
  cache: "default", // 'default', 'no-store', 'reload', 'no-cache', 'force-cache'
  redirect: "follow", // 'follow', 'error', 'manual'
  referrer: "about:client",
  integrity: "", // Subresource integrity
  signal: abortController.signal, // AbortSignal for cancellation
};

// ===== RESPONSE PROPERTIES =====
fetch(url).then((response) => {
  console.log(response.status); // Status code (200, 404, etc.)
  console.log(response.statusText); // Status text ("OK", "Not Found")
  console.log(response.ok); // true if status 200-299
  console.log(response.headers); // Headers object
  console.log(response.url); // Final URL
  console.log(response.type); // Response type
  console.log(response.redirected); // Was redirected?

  // Response body methods (only one can be used)
  return response.json(); // Parse as JSON
  // return response.text();               // Parse as text
  // return response.blob();               // Parse as blob
  // return response.arrayBuffer();        // Parse as ArrayBuffer
  // return response.formData();           // Parse as FormData
  // return response.clone();              // Clone response
});

// ===== ERROR HANDLING =====
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    // Network errors
    console.error("Fetch error:", error.message);
    // Common errors: TypeError (network failure), no CORS access, invalid URL
  });

// ===== ABORT REQUEST =====
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000);

fetch(url, { signal: controller.signal })
  .then((response) => response.json())
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Request was cancelled");
    }
  })
  .finally(() => clearTimeout(timeoutId));

// ===== ASYNC/AWAIT =====
async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Status: ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// ===== SENDING FORM DATA =====
const formData = new FormData();
formData.append("name", "John");
formData.append("file", fileInput.files[0]);

fetch(url, {
  method: "POST",
  body: formData,
  // Don't set Content-Type header for FormData
});

// ===== TIMEOUT EXAMPLE =====
function fetchWithTimeout(url, timeout = 5000) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), timeout),
    ),
  ]);
}
