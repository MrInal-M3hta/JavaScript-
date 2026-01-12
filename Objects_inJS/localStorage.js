// Small reusable helpers and one-piece examples for storing objects in localStorage.

// Check support
function isLocalStorageAvailable() {
    try {
        const testKey = '__ls_test__';
        localStorage.setItem(testKey, '1');
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

// Save an object (overwrites)
function saveObject(key, obj) {
    if (!isLocalStorageAvailable()) return false;
    try {
        localStorage.setItem(key, JSON.stringify(obj));
        return true;
    } catch (e) {
        return false;
    }
}

// Retrieve an object, with optional default
function getObject(key, defaultValue = null) {
    if (!isLocalStorageAvailable()) return defaultValue;
    const raw = localStorage.getItem(key);
    if (raw === null) return defaultValue;
    try {
        return JSON.parse(raw);
    } catch (e) {
        return defaultValue;
    }
}

// Update a single property of a stored object (creates object if missing)
function updateObjectProperty(key, prop, value) {
    const obj = getObject(key, {});
    obj[prop] = value;
    return saveObject(key, obj);
}

// Remove a key
function removeKey(key) {
    if (!isLocalStorageAvailable()) return false;
    localStorage.removeItem(key);
    return true;
}

// Clear everything (use with caution)
function clearAll() {
    if (!isLocalStorageAvailable()) return false;
    localStorage.clear();
    return true;
}

// Ensure an array exists at obj[arrayProp] and push an item
function addToArrayInObject(key, arrayProp, item) {
    const obj = getObject(key, {});
    if (!Array.isArray(obj[arrayProp])) obj[arrayProp] = [];
    obj[arrayProp].push(item);
    return saveObject(key, obj);
}

/* Examples */

// 1) Save and read a simple object
saveObject('user', { id: 1, name: 'Luffy' });
console.log(getObject('user')); // -> { id: 1, name: 'Luffy' }

// 2) Update a single property
updateObjectProperty('user', 'age', 19);
console.log(getObject('user')); // -> { id: 1, name: 'Luffy', age: 19 }

// 3) Work with arrays inside an object
addToArrayInObject('cart', 'items', { productId: 101, qty: 2 });
addToArrayInObject('cart', 'items', { productId: 102, qty: 1 });
console.log(getObject('cart')); // -> { items: [ {...}, {...} ] }

// 4) Remove and clear
removeKey('user');
clearAll();