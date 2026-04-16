let students = ["Jhon", "Aldrin", "Abel"]

console.log(students);
console.log(students[0]);

// array methods

//to find total number of elements
console.log(students.length); 


students.push("Sonu"); //add new elements into last index 
students.unshift("Bobin"); //add new elements into first index
console.log(students);

// shift= to remove element from first index
students.shift();
// pop = to remove last element from a list
students.pop();
console.log(students);