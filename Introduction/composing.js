//creating complex types by combining simple ones, use either unions or generics
//Unions also provide a way to handle different type, e.g., a function taking an array or a string
function getLength(obj) {
    return obj.length;
    //will work for both strings and arrays
}
//this block of code returns an error, something about the function implementation is missing, why?
//error solved, it was just a missing parentheses.
//Unions are most powerful when used to represent different states or shapes that my program will need
//to handle.
//In the following block of code, our function will return different values depending on whether it is passed a string or an array
function wrapInArray(obj) {
    if (typeof obj === "string") {
        //checks if the type of our variable is a string, it will return the object as an array.
        //more like convert our string to an array
        return [obj];
    }
    return obj;
    //if we reach here, it means our obj was already an array, so it will return the original array.
}
//declares a variable called 'backpack', and our variable is of type "Backpack"
//it defines our 'Type' as a string
var object = backpack.get();
//declares a variable called object that calls the get method on our backpack variable
//object will have a type of string
//if one tried to pass an argument, this would return an error, because our method is designed not to take any parameters
// backpack.add(23);
//this returns an error because it passes a number instead of a string 
