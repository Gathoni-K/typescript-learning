/*
Create a type ID that can either be a number or a string.
Write a function printId that:
-if it is a string, prints it in UpperCase.
-if is a number, multiplies it by 2

*/

function printId(ID: number | string) : number | string {
//define our ID parameter that can either be a number or a string
    if (typeof ID === "string") {
        //this block of code will run if the value of our ID is passed as a string
        return ID.toUpperCase();
        //prints our ID in upper Case
    }
    else{
        //this block of code will run only if our ID is a number
        return ID *2;
    }
}

printId(17492);