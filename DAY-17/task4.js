// [ no, name, English, Math, Science, Attendance, ExtraCurricular ]
// [ 0,   1,       2,     3,     4,         5,          6]
student_data = [
  [1, "Anu", 78, 85, 88, 180, 40],
  [2, "Binu", 65, 70, 75, 170, 30],
  [3, "Charu", 90, 95, 92, 190, 50],
  [4, "Deepu", 55, 60, 58, 160, 20],
  [5, "Esha", 82, 80, 85, 175, 35],
  [6, "Faisal", 72, 68, 70, 165, 25],
  [7, "Gopu", 88, 92, 90, 185, 45],
  [8, "Hari", 60, 55, 65, 155, 15],
];
// 1️⃣ Find student with highest total marks (English + Math + Science)
let highestMark = student_data.reduce((acc, curr) => (acc[2]+acc[3]+acc[4])>(curr[2]+curr[3]+curr[4])?acc:curr);
console.log(highestMark[1]);
console.log("---------------------------------------");
// 2️⃣ Find student with lowest attendance 
let lowestAttendenceStudent = student_data.reduce((acc, curr) => acc[5]<curr[5]?acc:curr);
console.log(lowestAttendenceStudent[1]);
console.log("---------------------------------------");
// 3️⃣ List students who scored more than 80 in English 
let scoreAbove80 = student_data.filter((eachStudent) => eachStudent[2]>80);
console.log(scoreAbove80);
console.log("---------------------------------------");
// 4️⃣ Sort students by Math marks in ascending order 
let sortedMath = student_data.toSorted((a,b) => a[3]-b[3]);
console.log(sortedMath);
// 5️⃣ Check if any student has extra-curricular score > 45 
let ExtraCurricularAbove45 = student_data.some((eachStudent) => eachStudent[6]>45);
ExtraCurricularAbove45?console.log("Yes"): console.log("No");
console.log("---------------------------------------");
// 6️⃣ List all students who scored below 60 in any subject 
let scoreBelow60 = student_data.filter((eachStudent) => eachStudent[2]<60 || eachStudent[3]<60 || eachStudent[4]<60 ||eachStudent[5]<60 || eachStudent[6]<60);
console.log(scoreBelow60);
console.log("---------------------------------------");

// 7️⃣ Sort students by total attendance descending :- 
let sortedAttendance = student_data.toSorted((a,b) => b[5]-a[5]);
console.log(sortedAttendance);
console.log("---------------------------------------");
// 8️⃣ Print details of student named 'Charu' :-
let charuDetails = student_data.find((eachStudent) => eachStudent[1]=="Charu");
console.log(charuDetails);
console.log("---------------------------------------");
// 9️⃣ Calculate total marks scored by all students in Science :-
let totalMarks = student_data.reduce((acc, curr) => acc+curr[4], 0);
console.log(totalMarks);
console.log("---------------------------------------");
// 🔟 Count students who have attendance more than 170 :-
let attendanceAbove170 = student_data.filter((eachStudent) => eachStudent[5]>170);
console.log(attendanceAbove170.length);