//variables and types.

/*
Requirements:
-create variables for name, age, whether I am currently studying TS
and an unassigned variable that will later hold a string.
 */

const name = "Sano";
//TS will infer that our name variable is a string
//to explicitly declare it:
const Name: string = "Manjiro";
const age = 189
let learningTs = true;
if (!learningTs) {
    console.log("User is currently not learning TS");
}
let hobbies: string = "";
//adds an empty string that will be used later
