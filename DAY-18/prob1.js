const students = [
  ["Alice", [85, 90, 78]],
  ["Bob", [70, 88, 95]],
  ["Charlie", [60, 75, 85]],
  ["David", [92, 88, 96]],
  ["Eve", [55, 65, 50]],
];

//   You are given a nested array of student records, where each student’s record consists of their name (string) and an array of their scores (numbers). Your task is to perform the following operations using the discussed array methods:

//   1.each student’s name along with their average score.
students.forEach((eachStudent) => {
    let avgScore = eachStudent[1].reduce((acc, curr)=> acc+curr, 0)/eachStudent[1].length;
    console.log(`${eachStudent[0]} - ${avgScore}`);
})
// create a new array of student names with their highest score in the format: ["Alice - 90", "Bob - 95", ...].
let highestScore = students.map((eachStudent) => {
    let highest = eachStudent[1].reduce((acc, curr) => acc>curr ? acc:curr);
    return `${eachStudent[0]} - ${highest}`;
})
console.log(highestScore);
//  get an array of students who have an average score greater than 80.
let studentAvgGreater80 = students.map((eachStudent) => {
    let average = eachStudent[1].reduce((acc, curr)=> acc+curr, 0)/eachStudent[1].length;
    return [eachStudent[0], average];
});
let avgAbove80 = studentAvgGreater80.filter((eachStudent) => eachStudent[1]>80);
console.log(avgAbove80);

// get the first student who has a score below 60.
let firstStudentBelow60 = students.find((eachStudent) =>{
    return eachStudent[1].some((score)=> score<60);
});
console.log(firstStudentBelow60);
//  calculate the total sum of all students scores combined.
let totalScore = 0;
let temp = students.map((eachStudent)=> {
    let currentTotal = eachStudent[1].reduce((acc, curr) => acc+curr, 0);
    totalScore += currentTotal;
})
console.log(totalScore);

// check if any student has a perfect score of 100.
let studentHas100 = students[1].some((score)=> score==100);
studentHas100 == true? console.log("Yes"): console.log("No");

//  check if all students have at least one score above 50.
let studentAbove50 = students.every((eachStudent) => {
    return eachStudent[1].some((score)=> score>50);
});
console.log(studentAbove50);