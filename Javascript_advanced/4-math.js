function divideBy(firstNumber) {
    return function(secondNumber) {
        // This inner function has access to firstNumber through closure
        return secondNumber / firstNumber;
    }
}

function addBy(firstNumber){
    return function(secondNumber) {
        // This inner function remembers firstNumber through closure
        return firstNumber + secondNumber;
    }
}

// Creating the four closures
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

// Testing How it works
console.log(addBy100(20));  // 120
console.log(divideBy10(20));    // 2
console.log(divideBy100(200));  // 2
console.log(addBy1000(20)); // 1020

// 🚨: The magic of closures is that each function "remembers" its own firstNumber