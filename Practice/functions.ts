/*
Write a function that takes a number and returns its square
-Write a function greet that takes a name as input and returns "Hello <name>"
-Make a function that takes an array of numbers and returns their sum.

*/


//Square function
function calculateSquare(num : number) {
    const square = num * num;
    return square;
}
calculateSquare(12);

//Greet function
function Greetings (name : string){
    return `Hello ${name}`;
}
Greetings("June");

//Sum of Arrays function
 const arr: number[] = [];
    //declare our array variable
function sumOfArrays(){
    let totalSum = 0;
//container to store our total sum
//if this is declared inside the loop, means it will reset to 0 after every iteration
//making us lose our total
    for (let i = 0; i <arr.length; i++) {
        totalSum += arr[i];    
    }
    return totalSum;
}
arr.push(12, 54, 67, 98);
//to add items to an array that has already been defined use the '.push()' method.
sumOfArrays();