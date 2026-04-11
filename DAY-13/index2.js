// setTimeout 

// setTimeout is a Higher order function the inside wrtten anonymous function is a call back funciton
console.log("first");
setTimeout(()=>{
    console.log("second");
}, 5000);
console.log("third");

// setInterval
function print(){
    console.log("Hello world");
}
setInterval(print, 1000);