// Q1 Create a method called addNumbers. The function should take 2 numbers as its parameters and
// return the sum of those numbers. Both parameters should default to 0 if they are not provided.

const addnumbers =( num1 = 0 , num2 = 0) =>
{
    return num1 + num2 ;
}

console.log(addnumbers());

// q2

function sayhello( name , greeting = "Hello")
{
    console.log(name +" " + greeting);
}

sayhello("essa");