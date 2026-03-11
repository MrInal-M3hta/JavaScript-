// Outer function
function outer() {
    let outerVar = "I'm from outer scope";
    
    // Inner function has access to outerVar
    function inner() {
        let innerVar = "I'm from inner scope";
        console.log(innerVar);      // "I'm from inner scope"
        console.log(outerVar);      // "I'm from outer scope"
    }
    
    inner();
}

outer();

// ------ Another Example with Closure ------
function makeCounter() {
    let count = 0;  // This variable is in lexical scope
    
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3