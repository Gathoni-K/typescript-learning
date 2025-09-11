function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
// greet("Maddison", Date());
//this will print an error, why?
//Date() in JS returns a string but constructing a Date using 'new Date()' actually gives us what we are expecting.
greet("Maddison", new Date());

//TS can infer the types for us even if we omit that part