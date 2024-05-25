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
console.log("\t\t\t\t\t\t\t\t Friend List \n\n");
console.log(people);
export {};
