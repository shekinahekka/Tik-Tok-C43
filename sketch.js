var hr, mn, sec;
var hourAngle, minAngle, secAngle;

function setup() {
  createCanvas(800,400);
}

function draw() {
  background("black");
  fill(255);
  noStroke();
  strokeWeight(5); 
  textSize(40); 
  text("Clock", 350,35);

  hr = hour();
  mn = minute();
  sec = second();
  angleMode(DEGREES);
  translate(400, 200);
  rotate(-90);

  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(mn, 0, 60, 0, 360);
  hourAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(secAngle);
  stroke(102,255,0);
  strokeWeight(8);
  line(0, 0, 100, 0);
  noFill();
  arc(0, 0, 260, 260, -secAngle, 0);
  pop();

  push();
  rotate(minAngle);
  stroke("pink");
  strokeWeight(8);
  line(0, 0, 75, 0);
  noFill();
  arc(0, 0, 280, 280, -minAngle, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(255,0,255);
  strokeWeight(8);
  line(0, 0, 50, 0);
  noFill();
  arc(0, 0, 300, 300, -hourAngle, 0);
  pop();
}