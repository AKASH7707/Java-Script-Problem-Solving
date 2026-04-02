// to check if a digit is present in a given number using while loop and flag

let num = 28397;
let digit = 8;

let flag = false;
while(num>0){
    let lastDigit = num%10;
    if(lastDigit == digit){
        flag = true;
        break;
    }
    num = Math.floor(num/10);
}
flag==true ? console.log("present") : console.log("absent");