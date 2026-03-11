// // 1. BASIC PROMISE WITH THEN CHAINING
// function fetchUser(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId > 0) {
//         resolve({ id: userId, name: "John Doe" });
//       } else {
//         reject(new Error("Invalid user ID"));
//       }
//     }, 1000);
//   });
// }

// // Then chaining
// fetchUser(1)
//   .then((user) => {
//     console.log("User:", user);
//     return user.id; // Pass to next then
//   })
//   .then((userId) => {
//     console.log("User ID:", userId);
//     return fetchUser(userId);
//   })
//   .then((user) => {
//     console.log("Fetched again:", user);
//   })
//   .catch((error) => {
//     console.log("Error in chain:", error.message);
//   });

// // 2. TRY-CATCH WITH ASYNC-AWAIT (Modern approach)
// async function getUserData(userId) {
//   try {
//     const user = await fetchUser(userId);
//     console.log("User fetched:", user);

//     const userId2 = user.id;
//     const user2 = await fetchUser(userId2);
//     console.log("Second fetch:", user2);

//     return user2;
//   } catch (error) {
//     console.log("Error caught:", error.message);
//     throw error; // Re-throw if needed
//   } finally {
//     console.log("Cleanup code here");
//   }
// }

// getUserData(1);

// // 3. MIXING THEN AND CATCH
// fetchUser(2)
//   .then((user) => {
//     console.log("Success:", user);
//   })
//   .catch((error) => {
//     console.log("Failed:", error.message);
//   })
//   .finally(() => {
//     console.log("Operation completed");
//   });


// // ========================================================================================================================= //


// // Example: resolve with a value
// function simplePromise() {
//     return new Promise((resolve, reject) => {
//         // resolve is called with a value
//         resolve("Success!");
//     });
// }

// simplePromise().then((value) => {
//     console.log(value); // Output: "Success!"
// });

// // Example: resolve with an object
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         // resolve passes data to the next handler
//         resolve({ id: 1, name: "Alice", role: "admin" });
//     });
// }

// fetchUserData().then((userData) => {
//     console.log("User data received:", userData);
// });

// // Example: resolve with another promise
// function chainedPromise() {
//     return new Promise((resolve) => {
//         // resolve can accept another promise
//         resolve(fetchUser(5));
//     });
// }

// chainedPromise().then((user) => {
//     console.log("Chained result:", user);
// });

// // Example: resolve in async context
// function delayedResolve() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Done after 2 seconds");
//         }, 2000);
//     });
// }

// delayedResolve().then((msg) => console.log(msg));


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    // return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userTwo.greeting());



