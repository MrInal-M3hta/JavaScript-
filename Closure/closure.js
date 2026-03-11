// function makeFunc() {
//         const name = "Mozilla";
//         function displayName() {
//             console.log(name);
//         }
//         return displayName;
//     }

//     const myFunc = makeFunc();
//     myFunc();


function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3


