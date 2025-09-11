//different types can be combined

function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

printId(101);
printId("202");
//both of these will run with no error, this is because we defined our id parameter to take both numbers and strings

//the separation of the union memebers is allowed before the first element so it can aslo be written as this
function printTextorNumberorBool (
    textOrNumberOrBool :
    | string
    | number
    | boolean
) {
    console.log(textOrNumberOrBool);
}
//TS will only allow an operation of it is valid for every member of the union, i.e:
//in our function above we cannot use methods like '.toUpperCase()' which is only valid for string

function PrintId(id: number | string) {
    if(typeof id === "string") {
        //here the id is of type string
        console.log(id.toUpperCase());
    } else{
        //here id will be of type number
        console.log(id);
    }
}
//A solution to this is the block of code above.
//narrowing the union with code which occurs when TS cannot deduce a more specific type 
//for a value based on the structure of the code

/*
Narrowing is basically when TS automatically figures out that a variable has a more specific type based on my code logic
-In our code above, id was initially defined to be iether a number or a string.
-The 'if' statement checks, narrowing  the type, here our id is only treated as a string

-It is basically used when I have a union type and I want to use a method unique to only one of the types defined earlier.
 */

function welcomePeople(x: string[] | string) {
    if(Array.isArray(x)) {
        //here 'x' is a 'string[]'
        console.log("Hello, "+ x.join(" and "));
    }
    else{
        console.log("Welcome lone traveller "+ x);
        //in this branch, 'x' is a string
    }
}


/* DISCRIMINATED UNIONS */
interface Circle {
    kind: "Circle";
    radius: number;
}
interface Square {
    kind: "Square";
    sideLength: number;
}
type Shape = Circle | Square;

function getArea(shape: Shape) {
    if(shape.kind === "Circle") {
        return Math.PI * shape.radius ** 2;
    }
/*
The '!' operator tells TS that th value is not null or undefined.
*/
}

function GetArea(SHAPE: Shape){
    switch(SHAPE.kind) {
        case "Circle":
            return Math.PI * SHAPE.radius ** 2;

            case "Square" :
                return SHAPE.sideLength ** 2;
    }
}
