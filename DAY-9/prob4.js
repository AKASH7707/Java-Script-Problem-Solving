// prime or not

let num = 5;
let flag = true;
for(let i=2; i<num; i++){
    if(num%i==0){
        flag = false;
        break;
    }
}

flag==true ? console.log("prime"): console.log("not a prime");