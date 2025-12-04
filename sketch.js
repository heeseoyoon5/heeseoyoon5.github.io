function setup() {
  createCanvas(550, 550);
  strokeCap(round);
}

function draw() {
  background(random(0,255),random(0,255),random(0,255),50);
  translate(width / 2, height / 2);

  var circleResolution = int(map(mouseY, 80, height, 2, 80));
  var radius = mouseX - width / 2;
  var angle = TAU / circleResolution;

  strokeWeight(mouseY / 40);

  for (var i = 0; i <= circleResolution; i++) {
    var x = cos(angle * i) * radius;
    var y = sin(angle * i) * radius;
    line(0, 0, x, y);
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}

function mousePressed() {
  stroke(random(0,255),random(0,255),random(0,255));
}