/* Assignment 2:Manipulating an Array: Rearranging Words
-------------------------------------------------------------------------------------------------------------------------
Objective:
Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
Steps:
1. Scrambled Array:
o Start with an array of elements in a scrambled order, like:
const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
• Modify the Array:
• Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
o Convert non-strings (booleans, numbers) to strings if needed.
o Split elements into character arrays (optional).
o Rearrange characters or elements in the desired order (modify original array or
create temporary arrays).
• Output the Result:
• Use join() to combine elements back into a single string: "I am a student of GIAIC"
-----------------------------------------------------------------------------------------------------------------------------
*/
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
 
// remove non string value which is not necessary here
scrambledArray.splice(2,2);



// Rearrange the array in desire order.

//  1) its a mannual aproach to rearrange the array by using indices method

// let rearrangedArray = [
//   scrambledArray[5],scrambledArray[2],scrambledArray[3],
//    scrambledArray[0],scrambledArray[1],scrambledArray[4]
//      ]      

// 2) i use destructure method here above method is also ok but for larger array its become deficult to work with indices        

let [firstWord, secondWord,thirdWord , fourthWord, fifthWord, sixthWord] = scrambledArray; 
let rearrangedArray = [sixthWord, thirdWord,fourthWord, firstWord, secondWord,  fifthWord];

// Combine elements back into a single string
console.log("\t\t\t\t\t\t\t\t Rearrange Array \n\n");

const result = rearrangedArray.join(" ");
console.log(`"${result}"`); 