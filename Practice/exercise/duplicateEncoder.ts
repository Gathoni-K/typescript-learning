/*
-Covert a string to a new string where each character in the new string is
'(' if that character appears only once in the original string or
')' if the character appears more than once in the original string.
Ignore capitalization when determining if a character is duplicate.

Sample inputs and outputs:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

-Basically converts all characters in a string to opening curly brace but if
the character is repeated, it will be a closing curly brace.
-Check if a character is repeated.
Convert our string to an array, then split it, then check if any character is repeated
then, if repeated, replace with opening curly brace, else replace with closing curly brace.
1. '.split()' - method to convert string to an array.
    Syntax:
    '
    .split(separator, limit)
    /separator will show how we are expected to split our array
    /limit specifies a limit on the number of substrings we can get.
    '

*/
export function duplicateEncode(word: string): string {
    const lowerWord = word.toLowerCase(); // Ignore case
    const result: string[] = [];
    
    for (let i = 0; i < lowerWord.length; i++) {
        const char = lowerWord[i];
        
        // Check if character appears more than once
        if (lowerWord.indexOf(char) !== lowerWord.lastIndexOf(char)) {
            result.push(')');
        } else {
            result.push('(');
        }
    }
    
    return result.join(''); // Convert array to string
}