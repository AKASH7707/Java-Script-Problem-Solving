let array1 = [[[1, 2, 3]], 
              [2, 3, 4],
              [4, 3]
            ];

let a1 = array1.flat(1);
console.log(a1);

let a2 = array1.flat(Infinity);
console.log(a2);
