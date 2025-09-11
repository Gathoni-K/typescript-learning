/*
-Allows us to extract values from objects or arrays and assign them to variables in a 
single operation.
-It is essentially pattern matching.
-A syntax making it possible to unpack values from array or properties from
objects into distinct varuables/
-Can be used in locations receiving data, such as the left-hand of an assignment.

-Uses similar syntax but uses it on the left-side of the assignment instead
-It performs the reverse operation of an array declaration, by declaring each element
in the collection as a separate variable.

*/
const arr = [1, 2, 3];
const [a, b, c] = arr;
//a = 1, b = 2, c = 3


const obj = { e, f, g };
const { e, f, g } = obj;
//This is equivalent to a = obj,a, b = obj.b


/*      BINDING AND ASSIGNMENT       */
//For both object and array destructuring, there are 2 patterns.

//**BINDING
/*
-Pattern starts with a declaration keyword like 'const'
-The each individual property must be bound either to a variable or further destructured.
*/
const Obj = { x: 1, y:{z: 5}};
const {
    x,
    y: { z: j},
    //destructuring farther of our 'y'
    //it is telling JS, navigate to the y property, look inside it for a property called 'z'
    //then create a new variable with the value of 'z' in it.
} = Obj;


/* All variables share the same declaration so if some variables are to be re-assignable while the others are
to be read-only, one must destrucure twice, once with 'let' and once with 'const'
-The 'let' and 'const' keywords control whetehr the destructured variables themselves can be reassigned, not the 
original object properties. 
*/
const numbers = {a: 2, b: {c: 3} };
const {a} = numbers;
//a cannot then be re-assigned.
let {
    b: {c : d},
    //our variable d can be re-assigned.
} = numbers;
