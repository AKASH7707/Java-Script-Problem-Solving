let array1 = [1, 2, 3, 4, 5, 6];

// used to access each elements in that array 
for(let element of array1){
    console.log(element);
}
// used to access each index in that array
for(let index in array1){
    console.log(index);
}

// filter
let filteredArray = array1.filter((eachNum)=>eachNum%2==0);
console.log(filteredArray);

// find
let result = array1.find((eachNum) => eachNum%2==0);
console.log(result);

let mapResult = array1.map((eachNum) => eachNum*3);
console.log(mapResult);

array1.forEach((eachNum) => console.log(eachNum*3));


