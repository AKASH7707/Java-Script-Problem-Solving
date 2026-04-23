// * * * *
// * * * *
// * * * *
// * * * *

// for (let row = 0; row < 4; row++) {
//   let rowStr = "";
//   for (let col = 0; col < 4; col++) {
//     rowStr += "* ";
//   }
//   console.log(rowStr);
// }



// C1	 	C2		C3		C4
// 1 		1		1		1	R1
// 2		2		2		2 	R2
// 3		3		3		3	R3
// 4		4		4		4	R4
// 5		5		5		5	R5


// for(let row=1; row<=5; row++){
//     let rowStr = "";
//     for(let col = 1; col<=5; col++){
//         rowStr += row + " "
//     }
//     console.log(rowStr
//     )
// }


// C1	 	C2		C3		C4
// 1 		2		3		4	R1
// 1 		2		3		4	R2
// 1 		2		3		4	R3
// 1 		2		3		4	R4


// for(let row=1; row<=4; row++){
//     let rowStr = "";
//     for(let col = 1; col<=4; col++){
//         rowStr += col + " "
//     }
//     console.log(rowStr)
// }

// C1	 	C2		C3		C4
// * 		*		*		*	R1
// # 		#		#		#	R2
// * 		*		*		*	R3
// # 		#		#		#	R4


// for(let row=1; row<=4; row++){
//     let rowStr = "";
//     for(let col = 1; col<=4; col++){
//         if(row%2 === 0){
//             rowStr += "# ";
//         }else{
//             rowStr += "* ";
//         }
//     }
//     console.log(rowStr)
// }



for(let row=1; row<=4; row++){
    let rowStr = "";
    for(let col=1; col<=4; col++){
        if((row>1 && row<=3) && (col>1 && col<=3)){
            rowStr+= "# ";
        }else{
            rowStr+= "* ";
        }
    }
    console.log(rowStr);
}
