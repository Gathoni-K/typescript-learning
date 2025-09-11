//creating complex types by combining simple ones, use either unions or generics


/*   Unions
-declaring that a type could be of many types 
*/
type myBool = true | false;

//Popular use case: describing the set of string or number literals a value is allowed to be
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

//Unions also provide a way to handle different type, e.g., a function taking an array or a string
function getLength(obj: string | string[]) {
    return obj.length;
    //will work for both strings and arrays
}
//this block of code returns an error, something about the function implementation is missing, why?
//error solved, it was just a missing parentheses.


//Unions are most powerful when used to represent different states or shapes that my program will need
//to handle.


//In the following block of code, our function will return different values depending on whether it is passed a string or an array
function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
    //checks if the type of our variable is a string, it will return the object as an array.
    //more like convert our string to an array
        return [obj];
    }
    return obj;
    //if we reach here, it means our obj was already an array, so it will return the original array.
}
//our function ensures that the result is always an array.

/*
    Generics
-Provides variables to types.
-A common example is an array, an array w/o generics could contain anything
    */
type StringArray = Array <string>;
type NumberArray = Array <number>;
//describe that our variable will contain numbers


//declaring our types that use generics:
interface Backpack<Type> {
//create our interface, Backpack whose type we have defined as 'Type', the generic paramter, whose type we will decide later
    add: (obj: Type) => void;
    //defines a property called 'add'
    //the other part is a function type signature.
    //our function takes one parameter, 'obj' whose type will be whatever 'Type' gets replaced with
    //so add is a method taking an object of type 'Type' and doesn't return anything

    //our add method will accept object of type 'Type' as parameters
    get: () => Type;
    //defines a property called get
    //our functon signature this time does not take parameters
    //get is a method that takes nothing and returns an object of type 'Type'
}
declare const backpack: Backpack<string>;
//declares a variable called 'backpack', and our variable is of type "Backpack"
//it defines our 'Type' as a string

const object = backpack.get();
//declares a variable called object that calls the get method on our backpack variable
//object will have a type of string
//if one tried to pass an argument, this would return an error, because our method is designed not to take any parameters

// backpack.add(23);
//this returns an error because it passes a number instead of a string 



