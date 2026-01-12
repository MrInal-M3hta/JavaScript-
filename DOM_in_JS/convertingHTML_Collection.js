// 1. HTMLCollection to Array - Using Array.from()
const htmlCollection = document.querySelectorAll('.item');
const arrayFromCollection = Array.from(htmlCollection);

// 2. HTMLCollection to Array - Using spread operator
const arraySpread = [...htmlCollection];

// 3. HTMLCollection to Array - Using Array.prototype.slice
const arraySlice = Array.prototype.slice.call(htmlCollection);

// 4. HTMLCollection to Array - Using for loop
const arrayForLoop = [];
for (let i = 0; i < htmlCollection.length; i++) {
    arrayForLoop.push(htmlCollection[i]);
}

// 5. HTMLCollection to Object - Using forEach and reduce
const objectFromCollection = Array.from(htmlCollection).reduce((obj, element, index) => {
    obj[index] = element;
    return obj;
}, {});

// 6. HTMLCollection to Object - Using Object.assign with spread
const objectAssign = Object.assign({}, [...htmlCollection]);

// 7. HTMLCollection to Object - With custom keys
const objectWithKeys = Array.from(htmlCollection).reduce((obj, element) => {
    obj[element.id || element.className] = element;
    return obj;
}, {});

// 8. HTMLCollection to Map
const mapFromCollection = new Map(Array.from(htmlCollection).map((el, i) => [i, el]));

// 9. HTMLCollection to Set
const setFromCollection = new Set(htmlCollection);