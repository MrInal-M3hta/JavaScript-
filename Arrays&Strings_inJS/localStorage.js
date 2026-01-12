// Lightweight helpers to store/manipulate arrays in localStorage (browser-safe with in-memory fallback).

const _memoryStore = {};
function _getStorage() {
    if (typeof localStorage === 'undefined') return {
        getItem: (k) => (_memoryStore.hasOwnProperty(k) ? _memoryStore[k] : null),
        setItem: (k, v) => { _memoryStore[k] = String(v); },
        removeItem: (k) => { delete _memoryStore[k]; },
        clear: () => { Object.keys(_memoryStore).forEach(k => delete _memoryStore[k]); }
    };
    return localStorage;
}

const storage = _getStorage();

function saveArray(key, array) {
    if (!Array.isArray(array)) throw new TypeError('saveArray expects an Array');
    storage.setItem(key, JSON.stringify(array));
}

function getArray(key) {
    const raw = storage.getItem(key);
    if (raw === null) return [];
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function addItem(key, item) {
    const arr = getArray(key);
    arr.push(item);
    saveArray(key, arr);
    return arr;
}

function insertAt(key, index, item) {
    const arr = getArray(key);
    const i = Math.max(0, Math.min(index, arr.length));
    arr.splice(i, 0, item);
    saveArray(key, arr);
    return arr;
}

function updateAt(key, index, newItem) {
    const arr = getArray(key);
    if (index < 0 || index >= arr.length) return null;
    arr[index] = newItem;
    saveArray(key, arr);
    return arr;
}

function removeAt(key, index) {
    const arr = getArray(key);
    if (index < 0 || index >= arr.length) return arr;
    arr.splice(index, 1);
    saveArray(key, arr);
    return arr;
}

function removeByValue(key, value) {
    const arr = getArray(key).filter(v => v !== value);
    saveArray(key, arr);
    return arr;
}

function findIndex(key, predicate) {
    const arr = getArray(key);
    return arr.findIndex(predicate);
}

function clearKey(key) {
    storage.removeItem(key);
}

function clearAll() {
    storage.clear();
}

// Example usage:
const KEY = 'myItems';
saveArray(KEY, []);                // initialize
addItem(KEY, { id: 1, text: 'A' });
addItem(KEY, { id: 2, text: 'B' });
console.log(getArray(KEY));
updateAt(KEY, 1, { id: 2, text: 'B updated' });
removeByValue(KEY, { id: 1, text: 'A' }); // note: object identity matters for removeByValue
removeAt(KEY, 0);
clearKey(KEY);

export {
    saveArray,
    getArray,
    addItem,
    insertAt,
    updateAt,
    removeAt,
    removeByValue,
    findIndex,
    clearKey,
    clearAll
};
