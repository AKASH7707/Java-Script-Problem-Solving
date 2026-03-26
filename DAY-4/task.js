// Determine if a given temperature is hot (above 30°C) or not.

let temp = 50;
if (temp>30){
    console.log("hot")
}else{
    console.log("not")
}

// Compare two strings and print if they are equal or not.

let str1 = "abc"
let str2 = "abc"

if (str1 == str2){
    console.log("string are equal")
}else{
    console.log("string are not equal")
}

//  Check if the given number is both even and greater than 10
let num = 13;
if(num%2==0 && num>10){
    console.log(num + " yes number is both even and greater than 10");
}else{
    console.log(num + "No number is both even and greater than 10");
}

// Check if a number is divisible by both 3 and  5

let num1 = 32;
if(num1%3==0 && num1%5==0){
    console.log(num1 + " Yes number is divisible by both 3 and  5")
}else{
    console.log(num1 + " No number is divisible by both 3 and  5")
}

// Print "Discount available" if you are a member or have a coupon
// let isMember = false;
// let hasCoupon = true

let isMember = false;
let hasCoupon = true;

if(isMember || hasCoupon){
    console.log("Discount available");
}else{
    console.log("Discount not available");
}

// Print "Free entry" if age < 12 or age > 60

let personAge = 33;
if(personAge<12 || personAge>69){
    console.log("Free Entry");
}else{
    console.log("Paid Entry");
}

let a = 13;
let b = 23; 
let c = 60;

if(a>b && a>c){
    console.log("a"); 
}else if(b>a && b>c){
    console.log("b");
}else{
    console.log("c");
}