function add(...args){
    let val = args.reduce((a, b) => a+b);
    console.log(val);
}

add(3,4,6)