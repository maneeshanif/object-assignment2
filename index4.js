let students = [
    { name: "anees", senior: true, assignmentsCompleted: true },
    { name: "zaki", senior: false, assignmentsCompleted: false },
    { name: "habib", senior: true, assignmentsCompleted: true },
    { name: "huzaifa", senior: false, assignmentsCompleted: true },
    { name: "faik", senior: true, assignmentsCompleted: false },
];
// Task 3: Find Senior Students with Assignments (Optional)
function findSeniorStudentsWithAssignments(student) {
    student.forEach((senArr) => {
        if (senArr.senior && senArr.assignmentsCompleted) {
            console.log(`${senArr.name} keep shining champ`);
        }
        else if (senArr.senior && !senArr.assignmentsCompleted) {
            console.log(` Hey ${senArr.name}, as a senior why your assignment isn't done? `);
        }
    });
}
// Task 4: Class List Update
function updateClassList(updstudents) {
    //   updstudents.filter((std) => {
    //     if (std.assignmentsCompleted === false) {
    //       console.log(`Removing ${std.name} from the class list`);
    //     } else if (std.assignmentsCompleted === true){
    //         console.log(`Keeping ${std.name} in the class list`);
    //     }
    //   });
    updstudents.forEach((std) => {
        if (std.assignmentsCompleted) {
            console.log(`Let ${std.name} stay in the class `);
        }
        else {
            console.log(`   ${std.name} has been removed `);
        }
    });
}
console.log("\t\t\t\t\t\t Class Students\n");
students.forEach((n) => {
    console.log(n.name);
});
console.log("\t\t\t\t\t\t Check Responsible Senior\n");
findSeniorStudentsWithAssignments(students);
console.log("--------------------------------------------\n");
console.log("\t\t\t\t\t\t Updated Class List\n");
updateClassList(students);
export {};
