//to make the ship move left and right

const heroElement = document.getElementById("hero");
let missiles = [];
let alienElement = document.getElementById("aliens");

const hero = {
  left: 550,
  top: 450
};

document.onkeydown = e => {
  e.preventDefault();
  console.log(e);
  if (e.keyCode === 37) {
    console.log("LEFT");
    hero.left = hero.left - 20;
    heroElement.style.left = hero.left + "px";
  } else if (e.keyCode === 39) {
    console.log("RIGHT");
    hero.left = hero.left + 20;
    heroElement.style.left = hero.left + "px";
  } else if (e.keyCode === 32) {
    missiles.push({
      left: hero.left + 20,
      top: hero.top
    });
  }
  drawMissiles();
};

//To get the Missiles moving
function drawMissiles() {
  document.getElementById("missiles").innerHTML = "";
  for (let missile = 0; missile < missiles.length; missile = missile + 1) {
    document.getElementById(
      "missiles"
    ).innerHTML += `<div class='missile' style='left:${missiles[missile].left}px; top:${missiles[missile].top}px;'></div>`;
    // missiles[missile].left;
    // missiles[missile].top;
    //this will tell the brower to search for each missile out of an array of missiles
  }
}

function moveMissiles() {
  for (let missile = 0; missile < missiles.length; missile = missile + 1) {
    missiles[missile].top = missiles[missile].top - 5;
  }
}

var x = 0;
function collide() {
  if (missiles.length > 0) {
    // let missile = document.querySelector(".missile").getBoundingClientRect()
    // console.log("missile", missile.x);
    // let aliens = document.getElementById("aliens").getBoundingClientRect()
    // console.log("alien", aliens.x, aliens.y);

    if 
    (document.querySelector(".missile").getBoundingClientRect().top <=
    document.getElementById("aliens").getBoundingClientRect().bottom) {
        $(aliens).hide();
        // for each missile in missiles
        //      for each alien in aliens
        //          do collision check here
        //          if there is one, destroy the alien[i] and missile[j]
        //remove the missile and aliens
      console.log("COLLISIONNNNNNNN!!!!");
    }
  }
}

//New Collide function 
/* let rect1 = {x: } */

// Game loop to make the missiles move and drawn again
function gameLoop() {
  setTimeout(gameLoop, 40);
  moveMissiles();
  drawMissiles();
  collide();
}
gameLoop();
