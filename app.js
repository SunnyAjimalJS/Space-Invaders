//to make the ship move left and right 
document.onkeydown = (e) => {
    console.log(e);
    if (e.keyCode === 37){
        console.log("LEFT")
    }

    console.log(e);
    if (e.keyCode === 39){
        console.log("RIGHT")
    }

}