// input    3       4           5
// output   36912   481216


// let num = 5;
// let result = "";

// for(let i = 1; i<=4; i++){
//     result += num*i;
// }
// console.log(result);


// input  5         6       7         8
// output 51025     61236   71449     

// let num= 5;
// console.log(num, num*2, num*num);

// input        2       3       4
// output       24      369     
// let num = 3;
// let temp = "";

// for(let i=1;i<=num;i++){
//     temp += i;
// }

// console.log(temp*num);


// to check if a digit is present in a given number using while loop and flag

// let num = 28397;
// let digit = 4;

// let flag = false;
// while(num>0){
//     let lastDigit = num%10;
//     if(lastDigit === digit){
//         flag = true;
//         break;
//     }
//     num = Math.floor(num/10);
// }
// flag ? console.log("present") : console.log("absent")


// prime number from 1-100;


for(let i=2; i<=100; i++){
    let flag = true;
    for(let num=2; num<i; num++){
        if(i%num == 0){
            flag = false;
        }
    }

    flag && console.log(i) 
}