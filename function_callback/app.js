// Callback function
//     is a function passed into another function as an argument,
//     which is then invoked inside the outer function to complete some kind of routine or action.

function executeFunctionAfterSecs(callback, seconds) {
    var millisecond = seconds * 1000;
    setTimeout(callback, millisecond);
}

// callback function
function greets() {
    console.log('Greets');
}

executeFunctionAfterSecs(greets, 5);
