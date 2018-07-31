let x = 300;
let dx = 5;
let y = 100;
let dy = 5;
let score1 = 0;
let score2 = 0;
let y1 = 0;
let y2 = 0;
let  platform_speed = 50;


function setup() {
	createCanvas(900, 500);
	x = 50;
	dx = 5;
	y = 10;
	dy = 8;
}
  
function draw() {
  background('#14F2B1');
  fill('#0A38BF');

  //шарик
  fill('#CD0AF5');
  ellipse(x, y, 40, 40);

  //левая платформа
  fill('#0A38BF');
  rect(20, y1, 30, 150);

  if (y > y1 && y < y1 + 150 && x < 50 && x > 40) {
    dx = - dx;
  }

  //правая платформа
  rect(width - 50, y2, 30, 150);

  if (y > y2 && y < y2 + 150) {
    if (x > width - 50 && y < width - 40) {
      dx = - dx;
    }
  }

  if (x > width + 50) {
    score1 = score1 + 1;
    x = width / 2;
    y = width / 2;
  }

  if (x < - 50) {
    score2 = score2 + 1;
    x = width / 2;
    y = width / 2;
  }

  if (y < 0 || y > height ) {
    dy = -dy;
  }

  if (y > height + 30) {
    dx = 0;
    dy = 0;
    x = 2000;
    y = 5000;
    fill(255);
    textSize(80);
    text("Ха Xа Xа!!!", 200, 250);
  }


  if (y > height + 30) {
    dx = 0;
    dy = 0;
    x = 2000;
    y = 5000;
    fill(255);
    textSize(80);
    text("Ха Xа Xа!!!", 200, 250);
  }
  textSize(80);
  text(score1, width / 4 - 30, 100);
  text(score2, 3 * width / 4 - 30, 100);



  x = x + dx;
  y = y + dy;
}

function keyPressed() {
  if (keyCode == '87') { 
    y1 = y1 - platform_speed;
  } else if (keyCode == '83') {
    y1 = y1 + platform_speed;
  }
  if (keyCode == UP_ARROW) {
    y2 = y2 - platform_speed;
  } else if (keyCode == DOWN_ARROW) {
    y2 = y2 + platform_speed;
  }
}
