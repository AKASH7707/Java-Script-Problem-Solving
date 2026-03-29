// 1 → Check Balance
// 2 → Withdraw
// 3 → Deposit
// 4 → Exit

let input = 2;

switch(input){
    case 1:{
        console.log("Check Balance");
        break;
    }
    case 2:{
        console.log("Withdraw");
        break;
    }
    case 3:{
        console.log("Deposit");
        break;
    }
    case 4:{
        console.log("Exit");
        break;
    }
    default:{
        console.log("Cancel");
    }
}