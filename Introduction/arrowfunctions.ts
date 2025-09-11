/*Syntax for arrow functions:

() => expression
param => expression
(param) => expression
(param1, paramN) => expression
() => {
 statements
}
param => {
statements
}
(param1, paramN) => {
statements
}
-Rest parameters, default parameters and destructuring within params are supported

-Decompose a traditional anonymous function to an arrow function
*/

(function (a) {
    return a + 100;
});

//1. Remove the word "function" and place an arrow between the argument and opening body brace
(a) => {
    return a + 100;
};
//2.Remove the body braces and word "return", the return is implied
(a) => a + 100;
//3.Remove the parameter parentheses.
a => a + 100;

/*
The parentheses around the parameter and braces around the function body can only be ommitted in certain cases;
when the function has a single simple parameter.
-If it has multiple parameters, no parameters or default, destructured or rest parameters, the parentheses around the parameter list
are required.
-The braces can only be omitted if the function directly returns an expression.
-If the body has statements, the braces are required, and so is the return keyword

-They are not associated with a name, one can store them in a variable allowing one to refer to the function
through the variable.
-If the arrow function needs to call itself, use a named function expression instead
 */

(a, b) => {
    const chuck = 42;
    return a + b + chuck;
}
//the body braces are included in our function as it has statements.

const bob2 = (a) => a + 100;
//storing our function in a variable.

//        *Function body*
/*
-Can have either an expression body or the usual block body.
-In an expression body, only a single expression is specified, that becomes the implicit return value.
-In a block body, an explicit return statement must be used.
*/
const func = (x) => x * x;
//expression body syntax, implies 'return'
const func2 = (x, y) => {
    return x + y;
}
//with block body, explicit return is needed.
//a block body is a group of statements enclosed  within curly braces.