// variableType FunctionName = (params/arguments) =>{ 
//          block of code
// };

const add = (num1, num2, num3, num4) =>{
    console.log(num1+num2+num3+num4);
}


add(2,4,1,2)


// Anonymous Functions —> functions without a name

(()=>{
    console.log("hello world");
});

// 4. Immediately Invoked Function Expression (IIFE)
(()=>{
    console.log("hello world");
})();

// 5. Call Back Function
const printHello = () => {
    console.log("hello world");
};

const mainFn = (cb) =>{
    cb()
}

mainFn(printHello)


// Recursive function

const fact = (num) => {
    if(num == 1){
        return 1
    }
    return num * fact(num-1);
}

let result = fact(5);
console.log(result)

// Currying Function
const addtion=(a) => {
    return (b) =>{
        return (c) =>{
            return(d) => {
                console.log(a+b+c+d);
            };
        };
    };
};


addtion(1)(2)(3)(4)