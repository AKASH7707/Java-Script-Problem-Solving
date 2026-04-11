// create a counter that prints numbers from 1 to upward every 1 second and stop execution when number reaches 10

let count = 0;
let intervalId = setInterval(()=>{
    if(count===10){
        clearInterval(intervalId);
    }
    console.log(count++);
}, 1000);