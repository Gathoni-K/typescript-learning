/*
EXERCISE 1 OF TS Exercices

-Defining an interface based on the given data.


*/


//define the user interface
interface User {
    name: string;
    age: number;
    occupation: string;
}

// export type User = unknown;
//this line creates a type, we have removed it because the 'User' declaration has already been used.
//the 'unknown' type represents a safe 'any' that requires type checking

/*
-Our interface is the 'blueprint' for one object
-If we want to use multiple objects, following that blueprint, we use an array as demostrated below
*/
export const users: User[] = [
    //the square brackets after 'User' tells TS that our object is to expect an array of users.
    //variable typing, because it is to expect an array of objects, include the brackets to
    //tell TS that we will use an array of objects
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
