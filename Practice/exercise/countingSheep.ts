/*
COnsider an array/list of sheep where some sheep may be missing from their place.
Create a function that counts the number of sheep present in the array, true means present.

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
Output: 17.

-Check for bad values such as null/undefined.

What we have, array of sheep, need to count all the 'true' in that array.
-loop through the array and check if value is true, store the true in a variable?
-return the variable.
-what if I create a new array that passes the test I give using '.filter'?
-use a ternary operator:
condition ? valueIfTrue : valueIfFalse.
condition, check if our values are either null or undefined.
-return values : return number counted or return nothing


***Array methods:
.filter()
-creates a new array with only elements passing a test.
returns a new array, same or smaller length than the original.
-give me the items that only meet a certain criteria.
.map()
-transforms each element and creates a new array.
returns a new array, same length as original but elements may be different.
-transforms each item into something else.
.reduce()
-processes all alements producing a single accumulated result.
returns a single value, could be number, string or object.
-combine/accumulate all items into one final result.

Use '.reduce()' - expects a function that will take the current accumulated result, take the current element
being processed, returns new accumulated result




*/
export function countSheep(arrayOfSheep: (boolean | undefined | null) []) {
    //a function accepting an array that could have its values as boolean, undefined or null.
   return  arrayOfSheep.reduce((count, sheep) => {
      if (sheep == null || sheep == undefined) {
        return count;
      }
      else if( sheep == false) {
        return count;
      }
      else {
        return count + 1;
      }
    }, 0 )


}