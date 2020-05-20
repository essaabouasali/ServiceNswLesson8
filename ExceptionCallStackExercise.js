// Throwing and Handling Exceptions

//1- Create a function called divide that takes 2 numbers as parameters.
//The function should divide the first number by the second number and return the result.
// If the second number is a 0, the function should throw an Error object.

function devide(num1, num2) {
    if (num2 == 0) {
        throw new Error("num2 shouldn't be Zero");
    }
    return parseInt(num1) / parseInt(num2);
}

//console.log(devide(4,0));


//2- Call the above function inside a try/catch block.
//You should log the exception message and then continue with the program.


try {
    console.log(devide(4, 0));
} catch (e) {
    console.log(e.message);
}

console.log("program still running");