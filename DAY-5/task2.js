// Check if a number lies between 10 and 50.
let num = 80;
if(num>10 && num<50){
    console.log(num, "is between 10 and 50");
}else{
    console.log(num, "is not between 10 and 50");
};

// Check if both numbers are even.
let num1 = 4;
let num2 = 9;

if(num1%2==0 && num2%2==0){
    console.log("both numbers are even");
}else{
    console.log("both numbers are not even");
};

// Check if a number is positive and divisible by 3.
if(num>0 && num%3==0){
    console.log(num, "is positve and divisible by 3");
}else if(num>0){
    console.log(num, "is positive");
}else{
    console.log(num, "is divisible by 3");
};

// Print "Free Shipping" if total amount ≥ 500 else "₹50 Delivery Charge".

let total = 300;

if(total>=500){
    console.log("Free Shipping");
}else{
    console.log("₹50 Delivery Charge");
};

// Write a program to check what type of triangle it is based on side lengths:

// All sides equal → Equilateral

// Two sides equal → Isosceles

// All different → Scalene

let side1 = 3;
let side2 = 6;
let side3 = 2;

if(side1 == side2 && side2 ==side3){
    console.log("Equilateral");
}else if((side1 == side2 && side1!=side3) || (side2 == side3 && side2!=side1) || (side3 == side1 && side3!=side2)){
    console.log("Isosceles");
}else{
    console.log("Scalene");
};

// Write a program to calculate electricity bill:

// Units < 100 → Rs. 2 per unit
// Units < 200 → Rs. 3 per unit
// Units < 300 → Rs. 4 per unit
// Else → Rs. 5 per unit


let unit = 200;
let totalUnit;
if(unit<100){
    totalUnit = unit*2;
    console.log("Your unit is under 100 -> Rs. 2 per unit.");
    console.log("Total amount :", totalUnit);
}else if(unit<200){
    totalUnit = unit*3;
    console.log("Your unit is under 200 -> Rs. 3 per unit.");
    console.log("Total amount :", totalUnit);
}else if(unit<300){
    totalUnit = unit*4;
    console.log("Your unit is under 300 -> Rs. 4 per unit.");
    console.log("Total amount :", totalUnit);
}else{
    console.log("Your unit is above 300 -> Rs. 5 per unit.");
    console.log("Total amount :", totalUnit);   
}