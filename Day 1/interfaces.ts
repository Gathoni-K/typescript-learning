//an interface declaration is another way to name an object type

interface Points{
    x: number;
    y: number;
}
function printCoords(pt: Points) {
    console.log("The x point is: " + pt.x);
    console.log("The y point is: " + pt.y);
}
printCoords( { x:100, y: 250});

/*
-TS is only concerned with the structure of the value we passed to our function.
-It only cares that it has the expected properties.

-Type aliases and interfaces are very similar andin many cases either can be used interchangeably.
-The key distinction is that a type cannot be re-opened to add new properties while an interface is always extendable.

*/
interface Animal {
    name: string;
}
interface Bear extends Animal {
    honey: boolean;
}
const bear = getBear();
bear.name;
bear.honey;
//This block of code shows the extending of an interface

interface Window{
    title: string;
}
interface Window{
    ts: TypeScriptAPI;
}
const src = 'const a = "HelloWorld!" ';
window.ts.transpileModule(src, {});