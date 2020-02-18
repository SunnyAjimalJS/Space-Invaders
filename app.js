//to make the ship move left and right

const heroElement = document.getElementById("hero");

const hero = {
    left: 550,
    top: 450
}

document.onkeydown = (e) => {
    e.preventDefault();
    console.log(e);
    if (e.keyCode === 37){
        console.log("LEFT")
        hero.left = hero.left - 10;
        heroElement.style.left = hero.left + "px";
    } else if (e.keyCode === 39){
        console.log("RIGHT")
        hero.left = hero.left + 10;
        heroElement.style.left = hero.left + "px";
    }
    
};
