let students = [
    { name: "anees", senior: true, assignmentsCompleted: true },
    { name: "zaki", senior: false, assignmentsCompleted: false },
    { name: "habib", senior: true, assignmentsCompleted: true },
    { name: "huzaifa", senior: false, assignmentsCompleted: true },
    { name: "faik", senior: true, assignmentsCompleted: false },
];
// Task 3: Find Senior Students with Assignments (Optional)
function findSeniorStudentsWithAssignments(student) {
    student.forEach(senArr => {
        if (senArr.senior && senArr.assignmentsCompleted) {
            console.log(senArr.name);
        }
        else if (senArr.senior && !senArr.assignmentsCompleted) {
            console.log(` ${senArr.name} is a senior without assignments `);
        }
        else {
            console.log("no senior student found with assignment");
        }
    });
}
// Task 4: Class List Update
function updateClassList(updstudents) {
    updstudents.filter(std => {
        if (std.assignmentsCompleted === false) {
            console.log(`Removing ${std.name} from the class list`);
        }
    });
}
findSeniorStudentsWithAssignments(students);
updateClassList(students);
export {};
