/*
This is the file handling randomization. Below is a generic function to randomize inputs.
The file ensures that our answer is not in the same position throughout.
*/

export const shuffleArray = (array: any[]) => 
[...array].sort(() => Math.random() - 0.5);