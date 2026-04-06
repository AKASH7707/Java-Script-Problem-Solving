// C1	 	C2		C3		C4
// *                            R4
// *		*                   R3
// *		*		*           R2
// *		*		*		*   R1

for(let row=1; row<=4; row++){
    let rowStr = "";
    for(let col=1; col<=row; col++){
        rowStr+= "* ";
    }
    console.log(rowStr);
}