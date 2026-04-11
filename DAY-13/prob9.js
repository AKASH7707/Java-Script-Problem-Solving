// digital clock

const showTime = () => {
    let date = new Date();
    
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    console.log(`${hour}:${minute}:${seconds}`);
};

setInterval(showTime, 1000);
