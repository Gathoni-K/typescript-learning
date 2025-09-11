//what they do is define an exact type, the type can be none other than the one 


let direction: string = "north";
//here our direction can be any string

let Direction: "north" | "south" | "east" | "west";
Direction = "north";
//this runs with no error
Direction = "pizza";
//throws an error because only the strings listed above are acceptable.

/*
Use cases:
-used to prevent typos.
-better autocomplete, my editor will show the exact options I have
-self-documenting: code will show what values are expected

They create a dropdown for our variables, and can only pick from the exact 
options provided.

*/