const students = [
  [1, "Anu", "BCA", 85, "Kochi"],
  [2, "Basil", "BCom", 78, "Kollam"],
  [3, "Chitra", "BCA", 92, "Kochi"],
  [4, "Dinesh", "BSc", 67, "Trivandrum"],
  [5, "Eva", "BCom", 88, "Kottayam"],
  [6, "Farhan", "BSc", 59, "Kochi"],
  [7, "George", "BCA", 73, "Trivandrum"],
  [8, "Haritha", "BCom", 81, "Kollam"],
  [9, "Irfan", "BSc", 90, "Kochi"],
  [10, "Jiya", "BCA", 95, "Kottayam"],
];

// Print students who scored above 80 

let scoreAbove80 = students.filter((eachStudent) => eachStudent[3]>80);
console.log(scoreAbove80);
console.log("-------------------------");
// Print all students in BCA course - 
let bcaStudents = students.filter((eachStudent) => eachStudent[2]=="BCA");
console.log(bcaStudents);
console.log("-------------------------");
// Print all students from Kochi - 
let kochiStudents = students.filter((eachStudent) => eachStudent[4]=="Kochi");
console.log(kochiStudents);
console.log("-------------------------");
// Create a new array with only names and marks -
let newArray = students.map((eachStudent)=> [eachStudent[1], eachStudent[3]]);
console.log(newArray);
console.log("-------------------------");
// Print total marks of all students -

let totalMark = students.reduce((a,b) => a+b[3], 0);
console.log(totalMark);
console.log("-------------------------");
// Print average mark of students
let Marks = students.reduce((a,b) => a+b[3], 0);
let avgMarks = (Marks/students.length);
console.log(avgMarks);

//  Sort students by marks in descending order -
let sortedArray = students.toSorted((a,b) => b[3]-a[3]);
console.log(sortedArray);
console.log("-------------------------");

// Find the highest scoring student - 
let highest = 0;
let highestValue = students.reduce((acc, curr) => acc>curr[3]? acc: curr[3], 0);
let highestScoredStudent = students.find((eachStudent)=> eachStudent[3]==highestValue);
console.log(highestScoredStudent);
console.log("-------------------------");

//  Print students who scored less than 70 -
let studentsLess70 = students.filter((eachStudent) => eachStudent[3]<70);
console.log(studentsLess70);