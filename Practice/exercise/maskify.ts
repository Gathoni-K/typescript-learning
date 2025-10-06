/*
Write a function changing all but the last four character to '#'

Sample inputs and outputs:
    '
    "4556364607935616" --> "############5616"
    "64607935616" -->      "#######5616"
    "1" -->                "1"
    "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
    '

-Whether it is a string or a number, the last 4 characters should be the only ones that are
visible, an empty string returns an empty string, anything with less than 4 characters is returned as is.

*/

export function maskify(cc: string): string {
    //function expects a parameter 'cc' a string and expected output is a string
    
    //handle empty inputs and inputs with characters less than 4.
    if(cc.length <= 4 || cc === "" ) {
        return cc;
    }
    //block of code will return our inputs as is.

    //handle the masking
    const lastFour = cc.slice(-4);
    //separate the last 4 characters
    const maskedPart = '#'.repeat(cc.length-4);
    //add the mark to all other characters stopping at the last 4
    return maskedPart + lastFour;
}