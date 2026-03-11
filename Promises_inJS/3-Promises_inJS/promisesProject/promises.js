function basicPromise() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Basic Promise Resolved!");
        }, 1000);
    });

    promise.then(result => {
        document.getElementById("output").textContent = result;
    });
}

function promiseChain() {
    new Promise((resolve) => {
        setTimeout(() => resolve(5), 500);
    })
    .then(num => {
        const result = num * 2;
        document.getElementById("output2").textContent = `Step 1: ${result}`;
        return result;
    })
    .then(num => {
        const result = num + 10;
        document.getElementById("output2").textContent += ` → Step 2: ${result}`;
        return result;
    })
    .catch(err => {
        document.getElementById("output2").textContent = `Error: ${err}`;
    });
}

async function asyncAwaitExample() {
    try {
        const result = await new Promise((resolve) => {
            setTimeout(() => resolve("Async/Await Complete!"), 1000);
        });
        document.getElementById("output3").textContent = result;
    } catch (err) {
        document.getElementById("output3").textContent = `Error: ${err}`;
    }
}