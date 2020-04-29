var bird;
var pipes = [];
var score = -1;
var backgroundImg

function preload(){
  backgroundImg = loadImage("background.png")
}

function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(backgroundImg);

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log('HIT');
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 200 == 0) {
    pipes.push(new Pipe());
    score++;
     console.log(score);
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}