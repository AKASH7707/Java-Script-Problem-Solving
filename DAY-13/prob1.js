// W.a curried function calculate bill after discount

const discount = (billamount)=>{
    return (discount) =>{
        let temp = billamount*(discount/100);
        return billamount-temp;
    };
};

let result = discount(100)(10);
console.log(result);