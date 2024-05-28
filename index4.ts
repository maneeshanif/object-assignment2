/*Assignment 4: Student List Organizer
----------------------------------------------------------------------------------------------------------------
Learning Objective: Get comfortable with data structures (objects and arrays) and basic
functions in TypeScript.
Tasks:
1. Student Data: The provided code defines an interface named Student that describes
student information like name, senior status (true/false), and whether they've completed
their assignments (true/false).
o Imagine this as a template for organizing student details.
2. Student List:
o An array named students stores information about several students using the
Student template. Think of this array as your class list!
3. Find Senior Students with Assignments (Optional):
o The code (not shown here) has a function that might find students who are seniors
and have completed their assignments.
o Can you guess why this information might be helpful?
4. Class List Update:
o Imagine you need to update your class list! The code (not shown here) might have
a function that removes students who haven't completed their assignments
(assuming only seniors are responsible).
o Can you think of any reasons why this might be useful (consider limitations)?
-----------------------------------------------------------------------------------------------------------------
 */
import chalk from"chalk"
console.log(chalk.greenBright("\nDeveloped By:"));
console.log(chalk.redBright.underline.italic("\tAnees Hanif"));
console.log("\n");
console.log(chalk.greenBright("----------------------------------------------------------------------------------------------------------------"));


interface Student {
  name: string;
  senior: boolean;
  assignmentsCompleted: boolean;
}
let students: Student[] = [
  { name: "anees", senior: true, assignmentsCompleted: true },
  { name: "zaki", senior: false, assignmentsCompleted: false },
  { name: "habib", senior: true, assignmentsCompleted: true },
  { name: "huzaifa", senior: false, assignmentsCompleted: true },
  { name: "faik", senior: true, assignmentsCompleted: false },
];
// Task 3: Find Senior Students with Assignments (Optional)
function seniorStudsWithAssignments(student: Student[]) {
  student.forEach((senArr) => {
    if (senArr.senior && senArr.assignmentsCompleted) {
      console.log(chalk.hex("33FFE6")(`${senArr.name} keep shining champ👍`));
    } else if (senArr.senior && !senArr.assignmentsCompleted) {
      console.log(chalk.hex("FFA533")
        (` Hey ${senArr.name}, as a senior why your assignment isn't done? 😡 `)
      );
    }
  });
}
// Task 4: Class List Update
function updateClassList(updstudents: Student[]) {
  updstudents.filter((std) => {
    if (std.assignmentsCompleted && !std.senior) {
      console.log(chalk.hex("93FF33")(` Congratulation!! ${std.name} you are appointed as a senior 🎉🎉  `));
    } else if (!std.assignmentsCompleted && std.senior) {
      console.log(chalk.redBright.underline(`Hey ${std.name} you are not a senior anymore 🧐 `));
    }
  });
}
console.log(chalk.redBright.bgWhite.bold("\t\t\t\t\t\t Class Students\n"));
console.log(chalk.cyanBright("----------------------------------------------------------------------------------------------------------------"));

students.forEach((n) => {
  if (n.senior) {
    console.log(chalk.greenBright.italic(`${n.name} is a senior  `));
  } else {
    console.log(chalk.blueBright(`${n.name} is a junior `));
  }
});
console.log(chalk.cyanBright("----------------------------------------------------------------------------------------------------------------"));

console.log(chalk.magentaBright.bold.bgHex('#faf0be')("\t\t\t\t\t\t Check Responsible Senior\n"));
console.log(chalk.yellowBright("------------------------------------------------------------------------------------------------------------\n"));
seniorStudsWithAssignments(students);
console.log(chalk.yellowBright("------------------------------------------------------------------------------------------------------------\n"));
console.log(chalk.blueBright.bgWhiteBright.bold("\t\t\t\t\t\t Updated Class List\n"));
updateClassList(students);
console.log(chalk.grey("----------------------------------------------------------------------------------------------------------------------"));
console.log(chalk.grey("--------------------------------------------------------------------------------------------------------------------\n"));
