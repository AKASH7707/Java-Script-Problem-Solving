// prime number from 1-100;
// console.log(2)
// console.log(3)
// console.log(5)
// console.log(7)
// 
// let count = 4;
// for(let num=2; num<=100; num++){
//     if(num%2==0 || num%3==0 || num%5==0 || num%7==0){
//         continue;
//     }else{
//         console.log(num);
//         count++;
//     }
// }
// 
// console.log(count);


for(let num=2; num<=100; num++){
    let flag = true;
    for(let i=2; i<num; i++){
        if(num%i==0){
            flag = false;
            break;
        }
    }

    if(flag){
        console.log(num);
    }
}
