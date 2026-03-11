// ===== 1. BASIC ERROR TYPES =====

// SyntaxError - occurs at parse time
// const x = ;  // SyntaxError: Unexpected token

// ReferenceError - undefined variable
// console.log(undefinedVar);  // ReferenceError

// TypeError - wrong type operation
const obj = null;
// obj.property;  // TypeError: Cannot read property

// RangeError - invalid range
// const arr = new Array(-1);  // RangeError

// ===== 2. TRY-CATCH-FINALLY =====

try {
    const result = riskyOperation();
} catch (error) {
    console.error('Caught error:', error.message);
} finally {
    console.log('Cleanup code always runs');
}

// ===== 3. CUSTOM ERRORS =====

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

throw new CustomError('Something went wrong');

// ===== 4. ERROR HANDLING PATTERNS =====

// Pattern 1: Async/Await with try-catch
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Fetch failed:', error);
        throw error;
    }
}

// Pattern 2: Promise with .catch()
fetch(url)
    .then(res => res.json())
    .catch(err => console.error('Error:', err));

// ===== 5. ERROR STACK TRACE =====

try {
    throw new Error('Test error');
} catch (e) {
    console.log(e.stack);  // Shows call stack
}

// ===== 6. GLOBAL ERROR HANDLERS =====

// Uncaught promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled rejection:', reason);
});

// Uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught exception:', error);
});

// ===== 7. VALIDATION & DEFENSIVE CODING =====

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Arguments must be numbers');
    }
    if (b === 0) {
        throw new RangeError('Division by zero');
    }
    return a / b;
}

// ===== 8. ERROR CHAINS =====

class ValidationError extends Error {
    constructor(message, originalError) {
        super(message);
        this.originalError = originalError;
    }
}

try {
    // some code
} catch (error) {
    throw new ValidationError('Validation failed', error);
}

// ===== 9. PRACTICAL EXAMPLES =====

// Example 1: Safe JSON parsing
function safeJsonParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Invalid JSON:', error.message);
        return null;
    }
}

safeJsonParse('{"name": "John"}');  // Works
safeJsonParse('invalid json');      // Returns null

// Example 2: Retry logic with error handling
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await fetch(url).then(r => r.json());
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            console.log(`Retry ${i + 1}/${maxRetries}`);
        }
    }
}

// Example 3: Error in array operations
function processArray(arr) {
    try {
        return arr.map(item => {
            if (!item.id) throw new Error(`Missing id in item: ${JSON.stringify(item)}`);
            return item.id * 2;
        });
    } catch (error) {
        console.error('Processing failed:', error.message);
        return [];
    }
}

processArray([{id: 1}, {id: 2}, {name: 'invalid'}]);