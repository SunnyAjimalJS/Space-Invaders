//to make the ship move left and right

const heroElement = document.getElementById("hero");
let missiles = [];
let aliens = [];
let playing = false;

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
    playing = true;
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

const hit = (alien) => {
  $(alien).hide();
  missiles = [];
  // STOP  LISTENING
}

//FUNCTION FOR COLLISIONS 
function collide() {
  const missileElements = document.querySelectorAll(".missile");
  const aliens = document.querySelectorAll(".alien");
  for (let missile of missileElements) {
    for (let alien of aliens) {
      if (missile.getBoundingClientRect().top <= alien.getBoundingClientRect().bottom
      && missile.getBoundingClientRect().left >= alien.getBoundingClientRect().left
      && missile.getBoundingClientRect().right <= alien.getBoundingClientRect().right
      && missile.getBoundingClientRect().width <= alien.getBoundingClientRect().width
      && playing) {
        return hit(alien);
      }
    }
  }
}
/* 
  function collide(aliens, missileElements) {
    let missileElements = document.querySelectorAll(".missile");
    const aliens = document.querySelectorAll(".alien");
      for (let i = 0; i < 10; i++) {
        if (missile.getBoundingClientRect().top <= alien.getBoundingClientRect().bottom
        && missile.getBoundingClientRect().left >= alien.getBoundingClientRect().left
        && missile.getBoundingClientRect().right <= alien.getBoundingClientRect().right
        && missile.getBoundingClientRect().width <= alien.getBoundingClientRect().width) {
          $(aliens).hide();
        }
      }
    } */
  

// Game loop to make the missiles move and drawn again
function gameLoop() {
  setTimeout(gameLoop, 40);
  moveMissiles();
  drawMissiles();
  collide();
}
gameLoop();
