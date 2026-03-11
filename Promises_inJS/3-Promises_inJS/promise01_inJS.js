
/*
  🧠 FIRST: WHAT PROBLEM DOES .then() SOLVE?

    JavaScript is asynchronous.

    That means:
	•	Some tasks take time (API calls, timers, file loading)
	•	JS does NOT wait
	•	Code continues running

    ❌ Without .then() → we don’t know when the async work is finished.

    ✅ .then() says:
        “Run this code AFTER the async task is successfully completed.”

    🔹 WHAT EXACTLY IS .then()?
    Definition (simple):
        .then() is a method that runs after a Promise is fulfilled (resolved).
        It takes a callback function as an argument, which is executed when the promise is resolved.
        This allows you to handle the result of the asynchronous operation once it's completed.

    🔹 WHY USE .then()?
    1. Manage Async Flow: Ensures code runs only after async tasks finish.
    2. Handle Results: Access data returned by the promise.
    3. Chain Operations: Perform multiple async tasks in sequence.

    🔹 BASIC SYNTAX:
    promise.then(onFulfilled, onRejected);

    - onFulfilled: Function called when the promise is resolved.
    - onRejected (optional): Function called if the promise is rejected.

    🔹 WHY CAN’T WE WRITE CODE DIRECTLY?
    Without .then(), code runs immediately, before the async task completes.
    This leads to errors or undefined values.

    EXAMPLE:
    const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 2000);
    });

    // Using .then() to handle the resolved value
    fetchData.then((data) => {
        console.log(data); // Output: "Data loaded" (after 2 seconds)
    });

    In this example, the message "Data loaded" is logged only after the promise is resolved,
    demonstrating how .then() manages asynchronous operations effectively.

    🔹 .then() FIXES THIS PROBLEM
    It ensures that the code inside the .then() block runs only after the promise is resolved,
    allowing us to work with the result of the async operation safely and predictably.

    🔹 .then() CAN RECEIVE DATA
    The resolve() function can pass data to the .then() handler.
    This allows us to work with the result of the async operation.

    EXAMPLE:
    const fetchUser = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "John Doe" });
        }, 1500);
    });

    fetchUser.then((user) => {
        console.log("User fetched:", user);
    });

    In this example, the user object is passed from resolve() to the .then() handler,
    allowing us to access and use the fetched user data.


    🧠 SECOND: HOW DOES .then() WORK UNDER THE HOOD?

    1. Promise Creation: A promise is created with an executor function that performs an async task.
    2. Pending State: Initially, the promise is in a "pending" state while the async task runs.
    3. Resolution: When the async task completes successfully, the promise is "resolved" with a value.
    4. .then() Execution: The .then() method is called on the promise. It registers a callback function to be executed once the promise is resolved.
    5. Callback Invocation: Once the promise is resolved, the registered callback function in .then() is invoked with the resolved value as its argument.
    6. Result Handling: Inside the callback, you can handle the result of the async operation (e.g., logging it, processing it further, etc.).

    SUMMARY:
    - .then() is essential for managing asynchronous operations in JavaScript.
    - It ensures that code dependent on async results runs only after those results are available.
    - This leads to more predictable and manageable code when dealing with tasks like API calls, timers, and file operations.

 */

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() // “My promise is SUCCESSFULLY completed”.
    }, 1000)
});

promiseOne.then(function(){
    console.log("Promise consumed");
});




new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
});




const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
});

promiseThree.then(function(user){
    console.log(user);
});




const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
});

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});




async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

consumePromiseFive();




async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers();




fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))



// --------------------------------------------------------------------------------------------------------------------- //


// ============================================
// 1. BASIC PROMISE CREATION & RESOLUTION
// ============================================
const basicPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Task completed');
        resolve('Success!');
    }, 1000);
});

basicPromise.then(result => console.log(result));

// ============================================
// 2. PROMISE WITH DATA PASSING
// ============================================
const fetchUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ id: 1, name: 'John', email: 'john@example.com' });
    }, 1000);
});

fetchUser.then(user => console.log('User:', user));

// ============================================
// 3. PROMISE CHAIN (THEN RETURNS NEW PROMISE) 
// ============================================
const chainExample = new Promise((resolve, reject) => {
    resolve(10);
})
.then(num => {
    console.log('First:', num);
    return num * 2;
})
.then(num => {
    console.log('Second:', num);
    return num * 2;
})
.then(num => console.log('Final:', num));

// ============================================
// 4. ERROR HANDLING WITH CATCH & FINALLY
// ============================================
const errorExample = new Promise((resolve, reject) => {
    reject('Database connection failed');
})
.catch(error => console.log('Error caught:', error))
.finally(() => console.log('Cleanup done'));

// ============================================
// 5. ASYNC/AWAIT (MODERN APPROACH)
// ============================================
async function getDataAsync() {
    try {
        const response = await fetch('https://api.github.com/users/octocat');
        const data = await response.json();
        console.log('GitHub user:', data);
    } catch (error) {
        console.log('Fetch error:', error);
    }
}

getDataAsync();

// ============================================
// 6. PROMISE.ALL (WAIT FOR ALL PROMISES)
// ============================================
const promise1 = Promise.resolve('First');
const promise2 = new Promise(resolve => setTimeout(() => resolve('Second'), 500));
const promise3 = fetch('https://api.github.com/users/torvalds').then(r => r.json());

Promise.all([promise1, promise2, promise3])
    .then(results => console.log('All resolved:', results))
    .catch(error => console.log('One failed:', error));

// ============================================
// 7. PROMISE.RACE (FIRST ONE TO SETTLE)
// ============================================
Promise.race([promise1, promise2])
    .then(result => console.log('Race winner:', result));


