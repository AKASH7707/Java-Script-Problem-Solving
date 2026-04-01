// find armstrong number for 3 digit number


let num = 153;
let dupNum = num;
let armstrong = 0;

while(num>0){
    lastDigit = num%10;
    armstrong = armstrong + (lastDigit**3);
    num = Math.floor(num/10);
}

armstrong == dupNum ? console.log("armstrong number"): console.log("not an armstrong number");
