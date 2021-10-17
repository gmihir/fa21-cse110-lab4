
function getTime() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

setInterval(getTime,1000);

