//Are a way to tell the compiler that one knows what the type of the value is.
//are useful when one has more specific knowledge about a type than TS can infer

/*
Syntax:
let value = <string>someValue;

let value = someValue as string;
//the 'as' is the preferred method, especially in jsx.

Common use cases:
1.Working with DOM
2.Working with union types when one already knows the specific type.
3.Working with any or unknown types.

-They do not perform runtime type checking, are purely a compile-type construct
-They will tell TS how to treat a certain value but do not actually change the value.

-Should be used sparingly and only when one is certain about the type.


*/

//Case 1:
const element = document.getElementById("myButton") as HTMLButtonElement;
//without the type assertion, the element would be null
element.click();


//Case 2:
function processValue(value: string | number){
    const length = (value as string).length;
    //here we are assured that the type is a string
}

//Case 3:
function fetchSomeData () {};
const data: unknown = fetchSomeData();
const user = data as { name: string; age: number};