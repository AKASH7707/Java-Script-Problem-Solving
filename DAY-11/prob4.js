// C1	 	C2		C3		C4
// *		*		*		*   R1
// *		*		*           R2
// *		*                   R3
// *                            R4


for(let row=4; row>=1; row--){
    let rowStr = "";
    for(let col=1; col<=row; col++){
        rowStr+= "* ";
    }
    console.log(rowStr);
}