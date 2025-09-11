//this referes to any JS value with properties.
//to define an object type, simply list all its properties and their types.

function printCoord(pt: {x: number; y: number}) {
    //the parameter's type annotation is an object type
    console.log("The x co-ordinate is " + pt.x);
    console.log("The y-co-ordinate is " + pt.y);
}
printCoord({x:3, y: 7});

//OPTIONAL PROPERTIES
function printName(obj: {first: string; last?: string }) {
    console.log(printName);
}
printName({first: "Bob"});
printName({first: "Alice", last: "Alisson"});

//to define an optional property, syntax:
//propertyName?: type


