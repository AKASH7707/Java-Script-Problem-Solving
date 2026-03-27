// w. a. p. to find the second largest number among 4 numbers

let num1 = 40;
let num2 = 30;
let num3 = 20;
let num4 = 10;

let largest_num;
let secon_lar_num;


if(num1 > num2){
    largest_num = num1;
    secon_lar_num = num2;
}else{
    largest_num = num2;
    secon_lar_num = num1;
}

if(num3 > largest_num){
    secon_lar_num = largest_num
    largest_num = num3;
}

if(num4 > largest_num){
    secon_lar_num = largest_num
    largest_num = num4;
}else if(num4 > secon_lar_num){
    secon_lar_num = num4
}

console.log(secon_lar_num, "is the second largest number")