// Find the largest between two numbers.
let num1 = 23;
let num2 = 30;

if(num1>num2){
    console.log(num1, "is the largest number");
}else{
    console.log(num2, "is the largest number");
}

// Check if a string is "admin" → print "Welcome Admin" else "Access Denied".
let user = "admin";
if(user=="admin"){
    console.log("Welcome Admin");
}else{
    console.log("Access Denied");
}


// Check if an entered city name is "Kochi" → print "Metro City" else "Other City".
let city = "Kochi";
if(city=="Kochi" || city=="kochi"){
    console.log("Metro City");
}else{
    console.log("Other City");
}

// Find the smallest of two numbers using ternary.
num1<num2 ? console.log(num1, "is the smallest number"):console.log(num2, "is the smallest number");

// Check if a student passed (mark >= 40) or failed.
let mark = 39;
if(mark>=40){
    console.log("Pass");
}else{
    console.log("failed")
}