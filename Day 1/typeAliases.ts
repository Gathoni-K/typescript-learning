//A type alias is a name for any type.
//Syntax: 
        //type typeName = actual type defined for our 'type'


type Point = {
    x: number;
    y: number;
};

function PrintCoord(pt: Point) {
    console.log("The coordinate's x value is: " + pt.x);
    console.log("The value of the y coordinate is "+ pt.y);
}
PrintCoord( {x: 100, y: 100} );

//A type alias can be given to any type at all, even union types
type ID = number | string;


type UserInputSanitizedString = string;
//this line is basicaly telling us that every time we write User... we really just mean 'string'
//this creates an alias, the User... is just another name for string

function sanitizeInput(str: string): UserInputSanitizedString {
    //our function takes a 'string' as the input and calls a function 'sanitize()' on it.
    return sanitize(str);
}

let userInput = sanitizeInput(getInput());

userInput ="new Input";
//what our function essentially does, is that it cleans up a new string but on the last line passes a totally different string
//this beats the whole purpose of sanitizing the string in the first place.
//This highlights a plausibleproblem with aliases, they are labels, not walls, they do not offer real protection

/*
Type aliases are literally nicknames, they do not create new types, they give existing types a different name

*/