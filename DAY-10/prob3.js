// C1	 	C2		C3		C4
// 1 		2		3		4	R1
// 1 		2		3		4	R2
// 1 		2		3		4	R3
// 1 		2		3		4	R4


for(let row=1; row<=4; row++){
    let rowStr = "";
    for(let col=1; col<=4; col++){
        rowStr += col + " ";
    }
    console.log(rowStr);
}