// Create a function convertToCelsius(fahrenheit) that converts Fahrenheit to Celsius.	

const convertToCelsius = (fahrenheit) =>{
    return (fahrenheit - 32)* (5/9);
}

let result = convertToCelsius(4);
console.log(result);