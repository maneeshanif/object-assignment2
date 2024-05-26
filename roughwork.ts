//This is rough work. It's not part of an assignment; 
//it's just to explore and practice some new stuff that I can use later in my assignment.
// remember i use gemini for getting this stuf!!!

/* 1) Destructure :-

Destructuring in TypeScript is a powerful technique for extracting values from arrays or properties from objects in a concise 
and readable way. Here's a breakdown of what it is and why it's useful:

 i)Extracting Elements: 
It allows you to directly assign elements from an array to individual variables.
 This simplifies accessing specific elements without using array indexing every time.

 ii)Renaming Elements:
  You can rename elements while destructuring them, improving readability.

  iii)Skipping Elements: Destructuring allows you to skip elements using a comma ,. 
  This is useful if you're not interested in certain values.

  iv)Rest Operator (...rest): This operator captures the remaining elements of an array into a new array 
  after destructuring a specific number of elements.

  Overall, destructuring arrays and objects in TypeScript provides a cleaner and more efficient way to work with data structures, 
  promoting better code readability and maintainability.
*/

// in old javascript
let array = [1,2,3,4,5,6,7]
let firstElement = array[0]
let secondElement = array[1]
console.log(firstElement,secondElement,"before destructure");

// after  coming of destructure
let numbers = [1,2,3,4,5];
let [first, second,third,four,five] = numbers;
console.log(first,four,"after destructure");

// another way of declare destructure
// let [first,second,...rest] = [11,22,33,44,55]
// console.log(first,rest);



 /*   2) Filter in TypeScript

The filter() method is a built-in function for arrays in TypeScript. It's used to create a new array containing only the elements
 from the original array that pass a specific test implemented by a callback function.
 
 Why Use filter()

Extract desired elements: You can efficiently select elements from an array that meet certain criteria, streamlining your data manipulation.
Create focused subsets: By filtering, you can create smaller arrays containing specific data relevant to your current task.
Improve code readability: Filtering often makes code more concise and easier to understand, especially when dealing with complex data sets.
 */

const numbers1: number[] = [1, 3, 7, 2, 9];
const filteredNumbers = numbers1.filter(num => num > 5);
console.log(filteredNumbers,"desire element filter out from orginal array into new array"); // Output: [7, 9]

