// For loop
// for(let i=1; i<=10; i++){
//     console.log("hello world");
// }

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// for(let i=30; i<=80; i++){
//     console.log(i);
// }

// for(let i=90; i>=55; i--){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// for(let i=90; i>=55; i-=2){
//         console.log(i);
// }

// print odd number between 1-30

// for(let i=1; i<=30; i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// multiplication of 5

// for(let i=1; i<=10; i++){
//     console.log(`5 * ${i} = ${5*i}`);
// }
let total=0;
for(let i=1; i<=100; i++){
    total+=i;
}
console.log(total);


let oddTotal=0;
for(let i=100; i<=200; i++){
    if(i%2!=0){
        oddTotal+=i;
    }
}
console.log(oddTotal);