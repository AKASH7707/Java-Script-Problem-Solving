// w.a.f to find happy number

function happyNumber(num){
    let isHappy = false;
    for(let i=1; i<20; i++){
        // tries upto 20 times if the value becomes 1 then is happy else not a happy number
        let sum = 0;
        while(num>0){
            let lastDigit = num%10;
            sum += lastDigit**2;
            num = Math.floor(num/10);
        }
        if(sum==1){
            isHappy = true;
            break;
        }
        num = sum;
        console.log(sum);
    }
    isHappy ? console.log("It is a Happy Number"):console.log("not a happy number")

}

happyNumber(13)