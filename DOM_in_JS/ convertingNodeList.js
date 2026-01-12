// 1. Using Array.from()
const nodeList = document.querySelectorAll('.item');
const arrayFromNodeList = Array.from(nodeList);

// 2. Using spread operator (...)
const arraySpread = [...document.querySelectorAll('.item')];

// 3. Using Array.prototype.slice.call()
const arraySlice = Array.prototype.slice.call(document.querySelectorAll('.item'));

// 4. Using for loop (traditional)
const nodeList2 = document.querySelectorAll('.item');
const arrayTraditional = [];
for (let i = 0; i < nodeList2.length; i++) {
    arrayTraditional.push(nodeList2[i]);
}

// 5. Converting to array of objects with properties
const nodeListToObjects = Array.from(document.querySelectorAll('.item')).map(node => ({
    element: node,
    text: node.textContent,
    id: node.id,
    classes: node.className,
    html: node.innerHTML
}));

// 6. Using forEach (works directly on NodeList in modern browsers)
const results = [];
document.querySelectorAll('.item').forEach(node => {
    results.push({
        tag: node.tagName,
        text: node.innerText,
        dataset: node.dataset
    });
});

// 7. Filter and map combined
const filtered = Array.from(document.querySelectorAll('.item'))
    .filter(node => node.textContent.trim().length > 0)
    .map(node => ({ element: node, value: node.value }));