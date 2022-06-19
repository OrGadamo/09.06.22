var position = 0;
var jumpPosition = 550;
var moveIntervalId;
var jumpIntervalId;
function moveRight() {
  clearInterval(moveIntervalId);
  player_div.style.transform = "scalex(1)";
  moveIntervalId = null;
  moveIntervalId = setInterval(() => {
    player_div.style.left = position++ + "px";
  }, 10);
}
function moveLeft() {
  clearInterval(moveIntervalId);
  moveIntervalId = null;
  player_div.style.transform = "scalex(-1)";
  moveIntervalId = setInterval(() => {
    if (position > 0) {
      player_div.style.left = position-- + "px";
    }
  }, 10);
}
function movePlayer(e) {
  console.log(e.key);
  if (e.key == "ArrowRight") {
    moveRight();
  } else if (e.key == "ArrowLeft") {
    moveLeft();
  } else if (e.key == "ArrowUp") {
    jumpUp();
  } else if (e.key == "ArrowDown" && jumpIntervalId == null) {
    clearInterval(moveIntervalId);
  }
}
function jumpUp() {
  if (jumpIntervalId == null) {
    jumpIntervalId = setInterval(() => {
      jumpPosition--;
      player_div.style.top = jumpPosition + "px";
      if (jumpPosition == 425) {
        jumpDown();
      }
    }, 10);
  }
}
function jumpDown() {
  clearInterval(jumpIntervalId);
  jumpIntervalId = setInterval(() => {
    jumpPosition++;
    player_div.style.top = jumpPosition + "px";
    if (jumpPosition == 550) {
      clearInterval(jumpIntervalId);
      jumpIntervalId = null;
    }
  });
}
