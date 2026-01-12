// Safe sessionStorage wrapper + examples
// Provides a lightweight in-memory polyfill when `sessionStorage` is not available

const storage = (typeof sessionStorage !== 'undefined' && sessionStorage) ? sessionStorage : (() => {
    let store = {};
    return {
        setItem(key, value) { store[key] = String(value); },
        getItem(key) { return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null; },
        removeItem(key) { delete store[key]; },
        clear() { store = {}; },
        key(index) { return Object.keys(store)[index] || null; },
        get length() { return Object.keys(store).length; }
    };
})();

// 1. setItem() - Store a value
storage.setItem('username', 'Luffy');
storage.setItem('power', 'Gum_Gum');

// 2. getItem() - Retrieve a value
const username = storage.getItem('username');
console.log(username); // 'Luffy' or null if unavailable

// 3. removeItem() - Delete a specific item
storage.removeItem('power');

// 4. clear() - (Not called automatically here to avoid surprising wipes)
// storage.clear();

// 5. key() - Get key by index (guarded)
storage.setItem('item1', 'value1');
storage.setItem('item2', 'value2');
const firstKey = storage.length > 0 ? storage.key(0) : null;
console.log(firstKey); // 'item1' or null

// 6. length - Get number of items
console.log(storage.length); // 2 (or value in polyfill)

// Practical Example: Storing objects (use JSON)
const user = { name: 'Zoro', age: 21 };
storage.setItem('user', JSON.stringify(user));

// Retrieve and parse object (guard parsing)
const retrievedUser = storage.getItem('user') ? JSON.parse(storage.getItem('user')) : null;
console.log(retrievedUser); // { name: 'Zoro', age: 21 } or null

// Update a property in stored object
if (retrievedUser) {
    retrievedUser.age = 26;
    storage.setItem('user', JSON.stringify(retrievedUser));
}

// Verify update
const updatedUser = storage.getItem('user') ? JSON.parse(storage.getItem('user')) : null;
console.log(updatedUser); // { name: 'Zoro', age: 26 } or null

// Remove specific item
storage.removeItem('item1');

// Example helpers for common operations
function saveObject(key, obj) {
    storage.setItem(key, JSON.stringify(obj));
}

function getObject(key, defaultValue = null) {
    const raw = storage.getItem(key);
    if (raw === null) return defaultValue;
    try { return JSON.parse(raw); } catch (e) { return defaultValue; }
}

function updateObjectProperty(key, prop, value) {
    const obj = getObject(key, {});
    obj[prop] = value;
    saveObject(key, obj);
}

function removeKey(key) {
    storage.removeItem(key);
}

function clearAll() {
    storage.clear();
}

// Example usage:
saveObject('settings', { volume: 70, brightness: 50 });
const settings = getObject('settings');
console.log(settings); // { volume: 70, brightness: 50 }

updateObjectProperty('settings', 'volume', 80);
console.log(getObject('settings')); // { volume: 80, brightness: 50 }

removeKey('settings');
console.log(getObject('settings')); // null

clearAll();
console.log(storage.length); // 0

// Note: no top-level `export` here to keep the file safe for plain script usage.
