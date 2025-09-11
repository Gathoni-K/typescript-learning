//These are the JS way of saying 'nothing'

let a = null;
//our variable has been explicitly set to nothing.
let b = undefined;
//our variable has not yet been set or it doen's exist


//strictNullChecks, should always be on, to ensure strict error checks

let name: string = "John";
name = null;
name = undefined;
//both lines of code will produce an error


let Name: string | null = "Jane";
Name = null;
//however, this cannot be used without checking
if (Name === null) {
    console.log(Name.toUpperCase());
}