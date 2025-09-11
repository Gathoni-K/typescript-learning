const user = {
    name: "Grace",
    id: 0,
};
//creates an object with an inferred type incuding name: string, id: number

//this object's shape can be explicitly be stated using the 'interface' declaration
interface User{
    name: string,
    id: number,
}
/*
-An interface is like a contract defining the shape of an object, specifying the properties of an object and the type the properties should be.
-So what we're doing here, we're creating our 'User' interface, our blueprint that stated that any object implements
must have a name property that will be of string type and an id property that will be of num type.
-Like a checkpoint of sorts, if you want to be considered a User, you should have a name and the id and they should be of the exact types
defined.

Syntax: 
interface interfaceName {
property1: type
property2: type
}
 */

//declaring a JS object that conforms to the shape of my new interface
const USer: User = {
    name: "Jim",
    id: 123,
};

//try an object that does not match the interface already provided.
const USER: User = {
    username: "Tasha",
    //this throws an error
    id: 23,
};

//As JS supports classes and OOP, so does TS, an interfacde declared using classes can also be used
interface Person {
    name: string,
    id: number,
};
// our interface declaration

class PersonAccount{
    name: string;
    id: number;
    //these become our property declarations, tell TS which properties instances our class will have.
    //think of it like "I will have these properties!", define the object's structure

    //this is the initialization, "Here's how I get the values for these properties", define how to populate that structure.
    constructor(name: string, id:number ) {
    //this is a special method that runs on creating a new instance of the class, takes parameters and uses them to initialize the object
    //the parameters in this case tell our class how to get the values and put in
        this.name = name;
        //'this' refers to the object being created
        this.id = id;
        //so what we are doing here is assigning parameter values to the object's properties
    }
    /*
    This becomes our class declaration.
    a class is a blueprint for creating objects.
     */
};
const person: Person = new PersonAccount("Milo", 7);
//creates a new instance of the PersonAccount class with the constructors listed in the brackets
//the ' : ' has been used to tell TS that the person variable should match the Person 


let obj: any = { x:0 };
//none of the following lines of code will throw compiler errors
//'any' disables all further type checking

obj.foo();
obj();
obj.bar = 100;
obj = "Hello";
const n: number = obj;

//when a type is not specified and TS cannot infer it from the context, the compiler 
//typically defaults to 'any'.

/* Type annotations on variables */
let myName: string = "Alice";
//adding a type notation to our declared variable to explicitly specify the type of variable
//thisis not necessary as TS can infer this automatically.

//A type cannot be changed after being created even adding new fields

type window = {
    title: string;
}
type window = {
    ts: TypeScriptAPI;
}

//Extending a type via intersections
type animal = {
    name: string;
}
type bear = animal & {
    honey: boolean;
}
const bear = getBear();
bear.name;
bear.honey;

