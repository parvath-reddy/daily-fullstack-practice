let a = prompt("Enter first number:");
let b = prompt("Enter second number:");
//error handling for numeric input
if (isNaN(a) || isNaN(b)) {
    throw new SyntaxError("Please enter valid numbers");
}

let sum = parseInt(a) + parseInt(b);

function main () {

    //try catch block to handle potential errors
    let x = 10; // multiplier
    try {
        console.log('The sum is: ' + sum * x);
        return true
        
    } catch (error) {
        console.log('An error occurred: ');
        return false;
        
    }
    //finally block to execute code regardless of error
    finally {
        console.log('files are being closed and db is bening closed');
    }
}
let c = main();