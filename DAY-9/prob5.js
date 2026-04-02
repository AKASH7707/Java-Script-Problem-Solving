// leap year

let year = 1230;

if((year%400==0) || (year%4==0 && year!=100)){
    console.log("leap year");
}else{
    console.log("not a leap year");
}