/* Assignment 1: Building Your Friend List
-----------------------------------------------------------------------------------------------------------------------------------
 Learning Objective: Practice working with objects and arrays in TypeScript to create a data
 structure.
 Task: Create a program that manages a simple friend list.
 1. Define an object named people containing an empty array called friends.
 2. Create three separate objects, each representing a friend, with properties like firstName,
 lastName, and optionally id.
 3. Add these friend objects to the friends array within the people object.
 4. Output the entire people object to the console, displaying your information and your
 -------------------------------------------------------------------------------------------------------------------------------------
 friend list.*/
import chalk from "chalk";
let people = {
    friends: [],
};
let friend1 = {
    firstName: "habib", // number 1 friends obj
    lastName: "ullah",
    id: 1
};
let friend2 = {
    firstName: "faiq",
    lastName: "jafri", // number 2 friend obj
    id: 2
};
let friend3 = {
    firstName: "uzair",
    lastName: "mustan",
    id: 3
};
people.friends.push(friend1, friend2, friend3);
console.log(chalk.greenBright.bold.bgWhiteBright("\t\t\t\t\t\t\t\t Friend List \n\n"));
console.log(people);
