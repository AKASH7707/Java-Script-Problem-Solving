// palindrome

let num = 13;
let tempNum = num;
let reverse = "";

while(tempNum>0){
    let lastDigit = tempNum%10;
    reverse += lastDigit;
    tempNum = Math.floor(tempNum/10);
}

if(num==reverse){
    console.log("palindrome");
}else{
    console.log("not a palindrome")
}