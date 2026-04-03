// C1	 	C2		C3		C4
// 1 		1		1		1	R1
// 2		2		2		2 	R2
// 3		3		3		3	R3
// 4		4		4		4	R4
// 5		5		5		5	R5


for(let row=1; row<=5; row++){
    let rowStr = "";
    for(let col=1; col<=4; col++){
        rowStr+= row + " ";
    }
    console.log(rowStr);
}