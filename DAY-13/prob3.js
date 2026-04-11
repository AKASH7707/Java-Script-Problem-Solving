// Write an arrow function isAdult(age) that returns true if age ≥ 18.


const isAdult = (age) => {
    if(age>=18){
        return true;
    }
    return false;
}

let result = isAdult(10);
console.log(result);