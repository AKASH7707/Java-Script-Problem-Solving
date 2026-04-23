// C1	 	C2		C3		C4
// *                            R4
// *		*                   R3
// *		*		*           R2
// *		*		*		*   R1


for(let row = 1; row <= 4; row++){
    let rowStr = "";
    for(let col = 1; col <= 4; col++){
        
    }
}

// for(let row = 1; row <= 4; row++){
//     let rowStr = "";
//     for(let col = 1; col <= row; col++){
//         rowStr += "* "
//     }
//     console.log(rowStr)
// }

// C1	 	C2		C3		C4
// *                            R1
// #		*                   R2
// #		#		*           R3
// #		#		#		*   R4

for(let row = 1; row <= 4; row++){
    let rowStr = "";
    for(let col = 1; col <= row; col++){
        if(row == col){
            rowStr += "* ";
        }else{
            rowStr += "# ";
        }
    }
    console.log(rowStr)
}