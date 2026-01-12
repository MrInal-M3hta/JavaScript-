// ============================================
// BASIC IF-ELSE
// ============================================

// Simple if statement
if (true) {
    console.log("This executes");
}

// if-else
let age = 15;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// if - else if - else
let score = 75;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}

// ============================================
// TERNARY OPERATOR (Conditional)
// ============================================

let status = age >= 18 ? "Adult" : "Minor";
let message = score > 50 ? "Pass" : "Fail";

// Nested ternary
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";

// ============================================
// SWITCH STATEMENT
// ============================================

let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Unknown day");
}

// Switch with fallthrough
let type = "admin";
switch (type) {
    case "admin":
    case "moderator":
        console.log("Has elevated privileges");
        break;
    case "user":
        console.log("Regular user");
        break;
}

// ============================================
// LOGICAL OPERATORS (AND, OR, NOT)
// ============================================

// AND (&&) - both conditions must be true
if (age > 18 && score > 80) {
    console.log("Qualified");
}

// OR (||) - at least one condition must be true
if (age < 5 || age > 65) {
    console.log("Get discount");
}

// NOT (!) - negates condition
if (!false) {
    console.log("This executes");
}

// ============================================
// TRUTHY & FALSY VALUES
// ============================================

// Falsy: false, 0, -0, 0n, "", null, undefined, NaN
// Truthy: everything else

if ("hello") {
    console.log("Non-empty string is truthy");
}

if (0) {
    console.log("This won't execute");
} else {
    console.log("0 is falsy");
}

// ============================================
// SHORT-CIRCUIT EVALUATION
// ============================================

let user = null;
let name = user && user.name; // name is null (short-circuits)

let value = "" || "default"; // value is "default"

// Practical use
function login(user) {
    user && console.log("User logged in:", user);
}

// ============================================
// NULLISH COALESCING (??)
// ============================================

// Only considers null/undefined as nullish
let count = 0;
let result = count ?? 10; // result is 0 (not 10)

let empty = null;
let fallback = empty ?? "default"; // fallback is "default"

// ============================================
// OPTIONAL CHAINING (?.)
// ============================================

let obj = { user: { name: "Iron Man" } };
console.log(obj?.user?.name); // "Iron Man"
console.log(obj?.admin?.role); // undefined (no error)

// With function calls
obj?.user?.getName?.();

// With arrays
let arr = [1, 2, 3];
console.log(arr?.[0]); // 1

// ============================================
// ADVANCED: CONTROL FLOW PATTERNS
// ============================================

// Guard clauses (early return)
function process(data) {
    if (!data) return "No data";
    if (data.length === 0) return "Empty";
    return "Processing...";
}

// Early exit pattern
function validateUser(user) {
    if (!user) throw new Error("User required");
    if (!user.email) throw new Error("Email required");
    if (!user.password) throw new Error("Password required");
    return true;
}

// Conditional assignment
let config = {};
if (process.env.DEBUG) {
    config.logLevel = "verbose";
}

// ============================================
// ADVANCED: OBJECT/ARRAY PATTERNS
// ============================================

// Object lookup (alternative to switch)
let actions = {
    login: () => console.log("Logging in"),
    logout: () => console.log("Logging out"),
    register: () => console.log("Registering")
};

let action = "login";
actions[action]?.(); // Calls login function

// Multiple conditions with array includes
let allowedRoles = ["admin", "moderator"];
if (allowedRoles.includes(user.role)) {
    console.log("Access granted");
}

// ============================================
// ADVANCED: DESTRUCTURING IN CONDITIONS
// ============================================

let person = { age: 25, country: "Japan" };
let { age: personAge } = person;

if (personAge >= 18) {
    console.log("Adult");
}

// Array destructuring
let [first, second] = [10, 20];
if (first > 5) {
    console.log("First is greater");
}

// ============================================
// ADVANCED: CONTROL FLOW WITH PROMISES/ASYNC
// ============================================

// Promise-based control flow
function fetchData(url) {
    return fetch(url)
        .then(res => res.ok ? res.json() : Promise.reject("Failed"))
        .catch(err => console.log("Error:", err));
}

// Async/await control flow
async function getData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error("Network error");
        return await response.json();
    } catch (error) {
        console.log("Error:", error);
    }
}

// ============================================
// CHECKING IF ARRAY IS EMPTY
// ============================================

let arr1 = [];
let arr2 = [1, 2, 3];

// Check if array is empty
if (arr1.length === 0) {
    console.log("Array is empty");
}

// Check if array is NOT empty
if (arr2.length > 0) {
    console.log("Array has items");
}

// Using optional chaining
if (arr1?.length) {
    console.log("Array has items");
} else {
    console.log("Array is empty");
}

// ============================================
// CHECKING IF OBJECT IS EMPTY
// ============================================

let obj1 = {};
let obj2 = { name: "Iron Man" };

// Check if object is empty
if (Object.keys(obj1).length === 0) {
    console.log("Object is empty");
}

// Alternative: using Object.entries()
if (Object.entries(obj1).length === 0) {
    console.log("Object is empty");
}

// Using JSON.stringify()
if (JSON.stringify(obj1) === "{}") {
    console.log("Object is empty");
}

// Check if object is NOT empty
if (Object.keys(obj2).length > 0) {
    console.log("Object has properties");
}

// Practical helper function
function isEmpty(value) {
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === "object" && value !== null) return Object.keys(value).length === 0;
    return false;
}

console.log(isEmpty([])); // true
console.log(isEmpty({})); // true
console.log(isEmpty([1, 2])); // false
console.log(isEmpty({ a: 1 })); // false