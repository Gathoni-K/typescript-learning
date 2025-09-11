interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = {name: string; age: number} & ({occupation: string} | {role: string})
/*
-This syntax of 'type' declaration is mostly used when: 
1.some properties are always required.
2. one has to choose from a set of additional property combinations, the brackets ensure that
the intersection between the base and the entire union.
Syntax:
type = typeName = baseProperties & (unionOption1 | unionOption2)
//baseProperties - are the non-negotiable ones, that are always required
    {property1: type, property2: type}
//unionOptions -
    ({option1: type} | {option2: type}) 

-the brackets in our code ensure for correct grouping, i.e. our base properties AND one of the union types.
-This shows how TS can enforce an exclusive choice, must pick one option instead of optional parameters

*/
export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
