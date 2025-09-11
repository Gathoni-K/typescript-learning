//in TS, we are allowed to specify both the input and output values of functions

/*      Parameter Type Annotations       */
function greetings(name: string){
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greetings("Jane");
//when parameters have a type annotation, arguments passed to the function will be checked


/*      Return Type Annotations      */
function getFavoriteNumber() : number{
    return 26;
}
getFavoriteNumber();
//these annotations appear after the parameter.

async function GetFavoriteNumber(): Promise<number>{
    return 34;
}
//this function of ours annotates the return type of a function that returns a promise


/*      Anonymous functions          */
const names = ["Alice", "Bob", "Eve"];

names.forEach(function(s){
    console.log(s.toUpperCase());
});

names.forEach((s) => {
console.log(s.toUpperCase());
});
//this is the above function converted to an arrow function
/*
our parameter 's' does not have a type annotation but TS uses the types of forEach function along with
the inferred type of the array to determine the type 's' will have
-This is known as contextual typing.
 */

/*      FUNCTION TYPE EXPRESSIONS        */
//these are syntatically similar to arrow functions
function greeter(fn: (a:string)=> void){
    //the syntax '(a: string) => void' - means a function with a parameter called 'a' of type 'string' that
    //will not have a return value
    fn("Hello World");
}
function printToConsole(s:string) {
    console.log(s);
}
greeter(printToConsole);

type GreetFunction = (a:string) => void;
//a function that takes a string as input and has no return value
function Greeter(fn: GreetFunction){
    //block of code to run
}
//in this example, we have used a type alias to name a function type.
/*Syntax:
type functionTypeName = (param1: Type1, param2:Type2) => returnType;
-This is useful for making reusbale functions, the same function signature
can be used in multiple places.
 */
interface circle{
    kind: "circle";
    radius: number;
}
interface square{
    kind: "square";
    sideLength: number;
}
type Shape = circle | square;
type AreaCalculator = (shape: Shape) => number;

const getArea : AreaCalculator = (shape) => {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
            
    }
}


/*      CALL SIGNATURES         */
/*
-They define conditions that must be fulfilled in order to be passed as a paramter, assigned to a variable or used
in a specific context.
Call signatures: job requirement.
My function: job applicant.
TS: our HR to check if applicant meets the requirements.

-They basically say, "This thing can be called like a function"
-These are just functions.
-Are used to define the shape of a function, its parameters, its return type but in a more flexible way than a type alias
Syntax: 
type FunctionType = {
(param1: Type1, param2: Type2): returnType;
}
-These are more flexible because, they allow one to add properties to functions
    -multiple call signatures.
    -constructor signatures

Use case:
1.Configuration with default behaviour
2.Caching
3.Statistics/Debugging
*/
type DescribableFunction = {
    description: string;
    //the property, function must have a description
    (someArg: number): boolean;
    //this is our call signature, our function takes a number and will return a boolean
    //it's telling TS, "This type represents something callable"
    //it's defining the 'shape' something must have for it to be accepted by 'doSomething()'
};
//this creates a function that can be called with a number parameter and return a boolean
//must have a description property of type 'string'
function doSomething(fn: DescribableFunction){
    //this is the function that uses our call signature
    //it accepts a parameter, fn that matches our type defined above
    console.log(fn.description + " returned " +fn(6));
    //access the description property of our type and uses the call signature
}
function myFunc(someArg: number){
    return someArg > 3;
    //this is a regular function that takes a number and returns a boolean.
}
myFunc.description = "default description";
//this line adds the required property
//functions are objects, so naturally properties can be added to them
doSomething(myFunc);
//so this is basically telling TS, "Hey, if you want to call the function 'doSomething()', it must check these boxes."
//the boxes are the conditions defined in our type.

/*      CONSTRUCTER SIGNATURES         */
/*
-These basically say, "This thing can be called with 'new' to create new objects."
Syntax: 
type constructorType = {
new (param1: Type1; param2: Type2): ReturnType;
}
-the 'new' keyword is what makes it a constructor signature.
So why construct objects?
-Are useful for creating multiple instances with shared behaviour.
*/
type SomeConstructor = {
    new (s:string): someObject;
};
//functions can also be evoked with the 'new' operator.
//constructors usually create new object.
//one can write the con
function fn(ctor: someConstructor){
    return new ctor("Hello");
}

//some objects like 'Date' can be called with or without 'new'.
//combine call and construct signatures in the same type arbitrarily.
interface CallorConstruct {
    (n?: number): string;
    //the '?' makes our parameter optional
    new (s: string): Date;
}
function Fn(ctor: CallorConstruct){
    //passing an argument of type 'number' to match it against 'ctor'
    //the first definition in our 'callOrConstruct' interface
    console.log(ctor(10));

    console.log(new ctor("10"));
    //passing an argument of type string to 'ctor' will match it
}
Fn(Date);


/*      GENERIC FUNCTIONS        */
/*
-Are used to describe a correspondence between two values
-This is done by declaring a 'type' parameter in the function signature.
*/
function firstElement<Type>(arr: Type[]): Type | undefined {
    //so what this line does:
    /*
    the '<Type>'- this is what will make our function generic
    -'(arr: Type[]' - defines an arr, parameter that is of that type, it means an array of whatever 'Type' is.
    -The 'type' is just another method, a TS onfe used to infere the kind of items
    in our array item
    -the return value of our function is either 'Type' or will return undefined
    */
    return arr[0];
}

//CONSTRAINTS
/*
-When writing generic functions, they usually work on any kind of value.
-When wanting to relate two values but can only operate on a certain subset of values, constraints are used.
-They are used to limit the kinds of types a parameter can accept.
-Are defined using the 'extends' keyword
Basic syntax: 
    function myFunction<Type extends constraintType> (param: Type): returnType{
    //Type must satisfy constraint type.
    }

-If possible, use the type parameter isntead of constraining it.
-Use as few type parameters as possible.

 */
function longest<Type extends {length: number}>(a: Type, b: Type){
    /*
    The constraint is included in our generic function definition.
    -The type must be a type that has a length property, and the length property must be of type number
    -This allows the function to acces '.length' safely isnide our function body
    */
    if (a.length >= b.length) {
        return a;
    }
    else{
        return b;
    }
}

const longerArray = longest([1,2], [1,2,3]);
//this var is of type number
const longerString = longest("alice", "bob");
//this is of type string
const notOK = longest(10, 100);

//Working with constrained values
function minimumLength<Type extends { length: number}>(
    obj: Type,
    minimum: number,
) : Type {
    if (obj.length >= minimum) {
        return obj;
    } else {
        return { length: minimum };
        //
    }
}


/* GUIDELINES FOR WRITING GOOD GENERIC FUNCTIONS */
/*
1. Push type parameters down
-The key principle is to make the generic types represent the most fundamental
thing you need to work with
2. Use fewer type parameters.
3.Type parameters should appear twice.
-Type parameters are for relating types of multiple values, if it is only used once, then it is not useful
 */


function firstElement1<Type>(arr: Type[]) {
    //the 'Type' introduces a generic type parameter, a placeholder that will be filled later
    //our function has one parameter 'arr' of elements 'Type'
    return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type){
    //introduces a generic type parameter with a constraint that 'Type' must be of some kind of array type
    //our parameter is of type 'Type' where type represents the entire array type 
    return arr[0];
}
/*
The bracktes in our annotation type determines whether we are building an array type or already
expecting an already-complete array type.
-The first method is preffered because it is more flexible
-Function 1 answers 'What types of things are in the array'
-Function 2 answers 'What is the exact shape of this array'
 */

const a = firstElement1([1, 2, 3]);

const b = firstElement2([1, 2, 3]);


/* Optional Parameters */
//when writing a function type for a callback, never write an optional parameter
//unless it is intended to call the function without passing the argument.