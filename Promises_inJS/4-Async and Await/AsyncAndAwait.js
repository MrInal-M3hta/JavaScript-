/**
 * Comprehensive guide to Async/Await in JavaScript
 * 
 * @module AsyncAndAwait
 * @description Demonstrates async functions, await expressions, error handling, 
 * and various patterns for managing asynchronous operations
 */

/**
 * Basic async function that always returns a Promise
 * @async
 * @function fetchData
 * @returns {Promise<string>} Resolves with "Hello World"
 * @example
 * fetchData().then(result => console.log(result)); // "Hello World"
 */

/**
 * Fetches data from an API using await to pause execution
 * @async
 * @function getData
 * @returns {Promise<Object>} Resolves with parsed JSON data from the API
 * @description Uses await to pause execution until each Promise resolves
 */

/**
 * Fetches user data with error handling using try/catch
 * @async
 * @function getUserData
 * @param {number} userId - The ID of the user to fetch
 * @returns {Promise<Object|undefined>} User object or undefined if error occurs
 * @throws {Error} Logs error if user not found or network request fails
 */

/**
 * Processes sequential API calls where each depends on previous result
 * @async
 * @function processSequential
 * @returns {Promise<Object>} Object containing user, posts, and comments
 * @description Demonstrates sequential await - each call waits for previous to complete
 */

/**
 * Processes multiple independent API calls in parallel using Promise.all
 * @async
 * @function processParallel
 * @returns {Promise<Object>} Object containing user, posts, and comments
 * @description All Promises execute simultaneously for better performance
 * @throws {Error} Rejects if any single Promise fails
 */

/**
 * Handles multiple Promises with individual success/failure tracking
 * @async
 * @function handleMultiple
 * @returns {Promise<void>}
 * @description Uses Promise.allSettled to handle both fulfilled and rejected promises
 */

/**
 * Processes array items sequentially with async operations
 * @async
 * @function processArray
 * @returns {Promise<void>}
 * @description Loops through array with await inside for sequential processing
 */

/**
 * Mock function: Simulates fetching user by ID
 * @function fetchUser
 * @param {number} id - User ID
 * @returns {Promise<Object>} Resolves with user object
 */

/**
 * Mock function: Simulates fetching posts by user ID
 * @function fetchPosts
 * @param {number} userId - User ID
 * @returns {Promise<Array>} Resolves with array of post objects
 */

/**
 * Mock function: Simulates fetching comments by post ID
 * @function fetchComments
 * @param {number} postId - Post ID
 * @returns {Promise<Array>} Resolves with array of comment objects
 */



// ============================================
// 1. BASIC ASYNC FUNCTION
// ============================================

// Async function always returns a Promise
async function fetchData() {
    return "Hello World";
}

fetchData().then(result => console.log(result)); // "Hello World"


// ============================================
// 2. AWAIT - PAUSE EXECUTION
// ============================================

async function getData() {
    // await pauses execution until Promise resolves
    const data = await fetch('https://api.example.com/data');
    const json = await data.json();
    return json;
}


// ============================================
// 3. ERROR HANDLING WITH TRY/CATCH
// ============================================

async function getUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/user/${userId}`);
        if (!response.ok) throw new Error('User not found');
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error fetching user:', error.message);
    }
}


// ============================================
// 4. MULTIPLE AWAITS IN SEQUENCE
// ============================================

async function processSequential() {
    const user = await fetchUser(1);
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    return { user, posts, comments };
}


// ============================================
// 5. PARALLEL EXECUTION WITH PROMISE.ALL
// ============================================

async function processParallel() {
    // Execute all Promises simultaneously
    const [user, posts, comments] = await Promise.all([
        fetchUser(1),
        fetchPosts(1),
        fetchComments(1)
    ]);
    return { user, posts, comments };
}


// ============================================
// 6. PROMISE.ALLSETTLED - ALL RESULTS
// ============================================

async function handleMultiple() {
    const results = await Promise.allSettled([
        fetchUser(1),
        fetchUser(2),
        fetchUser(999) // might fail
    ]);
    
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log('Success:', result.value);
        } else {
            console.log('Failed:', result.reason);
        }
    });
}


// ============================================
// 7. ASYNC IN LOOPS
// ============================================

async function processArray() {
    const users = [1, 2, 3];
    
    // Sequential processing
    for (const userId of users) {
        const user = await fetchUser(userId);
        console.log(user);
    }
}

// Dummy functions for examples
function fetchUser(id) {
    return Promise.resolve({ id, name: `User ${id}` });
}

function fetchPosts(userId) {
    return Promise.resolve([{ id: 1, userId }]);
}

function fetchComments(postId) {
    return Promise.resolve([{ id: 1, postId, text: 'Great!' }]);
}



