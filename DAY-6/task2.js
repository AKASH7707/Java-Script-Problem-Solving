// 2. Check numbers from 1 to 50. If divisible by 3, print "Fizz", if by 5, print "Buzz", if by both, print "FizzBuzz".

for(let i=1; i<=50; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }else if(i%3==0){
        console.log("Fizz")
    }else if(i%5==0){
        console.log("Buzz")
    }
}