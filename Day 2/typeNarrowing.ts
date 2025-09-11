/*
It is TS way of figuring out the kind of type it is handling.
Used when there are union types and a method available to one type is not 
available for the other type in that union.

*/


//Use of typeof
function printAll(strs: string | string [] | null) {
//define our parameter, strs , which can be of type string, array or null
    if (typeof strs === "object") {
        for (const s of strs) {
/*
The above error appears because in JS, typeof null is actually an object
 typeof null === "object" is normal in JS
-The point is that an array, type null  are objects in JS.
 */
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        //do nothing
    }
}

function detectType(val: number | string) {
   if (typeof val === "string") {
    return val.toLowerCase();
   }
   else{
    return val * val;
   }
}
detectType("low");
detectType(20);


function provideId(id : string | null) {
    if(!id) {
//here our id becomes null, so this block of code will run if our id is null
        console.log("Please provide the ID");
        return;
    }
    //this line will only run if our ID is a string and not null
    id.toLowerCase();
}

function PrintAll(strs: string | string[] | null){
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

/*
DO NOT DO WHATEVER THE BLOCK OF CODE ABOVE JUST DID, BUT WHY?
-Because it does not handle the case where it is an empty string, an 
important case that should be considered when writing code.

*/


//TRUTHINESS NARROWING
/*
Falsy values in JS Include:
0, Nan, "", 0n, null, undefined
 */

function printall(strs: string | string[] | null){
    if (strs && typeof strs === "object") {
        //checks if our strs variable is either an array or null, because both are objects in JS.
        for (const s of strs){
            console.log(s)
        }
    } else if (typeof strs === "string"){
        console.log(strs)
    }
}
//this is the correct way of dealing with the error we had earlier encountered.



//EQUALITY NARROWING.
//Uses switch statements and equality checks to narrow types

function example(x: string | number, y: string | boolean) {
    if (x === y) {
        //if x is equal to y, then their types must be the same
        //block of code runs if both parameters x and y are strings
        x.toUpperCase();
        y.toLowerCase();
    } else{
        console.log(x);
        //here our x is a number
        console.log(y);
        //here our y is a boolean
    }
}

interface Container{
    value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number){
    //removes both 'null' and 'undefined' from the type
    if (container.value != null) {
        console.log(container.value);
    container.value += factor;
    //now we can safely multiply 'container.value'

    }
}
//to check for both null and undefined, use the loose equality checker, '==' not the strict one '==='


//THE 'in' OPERATOR NARROWING
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}


//THE 'instanceof' NARROWING
function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toUTCString());
    }
    else{
        console.log(x.toUpperCase());
    }
}


/*          ASSIGNMENTS          */
//When assigning a value to a variable, TS looks at the right side of the assignment and narrows the left 
//side appropriately.
let x = Math.random() < 0.5 ? 10 : "Hello World!";
x = 1;
console.log(x);
//here x is a number

x = "goodbye!";
console.log(x);
//x is a string.
//TS has infered the types based on the values assigned to our variables


/*          CONTROL FLOW ANALYSIS            */
//TS acts like it is executing code step by step, keeping track of what it knows
//about each variable at each point.

interface User {
    name: string,
    ID: number,
    age: number, 
}
function processUser(user: User | null) {
    //our path starts here, the user is either User interface or null
    if (user === null) {
        console.log("No User");
        return;
        //path ends here for our null case
    }
    //this path check will continue only if user is not null
    console.log(user.name);
}


//TYPE PREDICATES
//Are a way of creating my own custom narrowing functions, basically teaching TS 
//how to recognize specific types through the functions written.
//It is like making a promise to TS, "If my function returns true, I promise the thing passed in is the type I said it is."
//The 'is'  keyword is how I am communicating with TS.
function isFish(pet: Fish | Bird): pet is Fish{
    //our predicate is pet is Fish
    //telling TS, if our value is true, then trust, pet is a fish
    return (pet as Fish).swim !== undefined;
    //the 'pet as Fish' is a type assertion, what it does, tells TS, 
    //"Stop checking the type over here, I am telling you to treat this as a fish"
    //type assertions are used when you need to acces properties not available to other methods
}

//NEVER TYPE
/*
-It is assignable to every type, but no type is assignable to never except
itself.
-One can use it for narrowing and can be used to do exhaustive cheking in 
a switch statement.
How exhaustive cheking works; it is a pattern that ensures every possible case in a conditional
structure (switch/if-else chains) are handled.
-It is basically a way to ensure that all cases are handled.
How:
1.List all possibilities.
2.Handle each case explicitly.
3.Add a safety net that catches any case one forgot to handle.
The safet net pattern:
    "
    default:
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    "
-It prevents bugs, ensures that every case is handled.
 */
interface circle {
    kind: "circle";
    radius: number;
}
interface square {
    kind: "square";
    sideLength: number;
}
interface triangle {
    kind: "triangle";
    sideLength: number;
}
type Shape = circle | square | triangle;
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        
        case "square":
            return shape.sideLength **2;

        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
//the error in our code originates from us trying to assign 'triangle' to type never
    }
}