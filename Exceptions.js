function addnumber(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        throw new Error("n1 and n2 must be number");
    }
    return parseFloat(number1) + parseFloat(number2);
}

// console.log(addnumber(12,12)); // output is 24

// console.log(addnumber("12a",12)); // output is Error


// try catch fially

try {
    console.log(addnumber("12a",12));
} catch (e) {
    console.log(e.message);
}
finally {

console.log("Finally always runs");
}

console.log("This code is still running");
