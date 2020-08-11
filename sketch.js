class Circle {
  constructor() {
    this.speed = random(5, 10);
    this.angle = random(0, TAU);
    this.diameter = random(25, 120);
    this.x = random(0 + this.diameter / 2, width - this.diameter / 2);
    this.y = random(0 + this.diameter / 2, height - this.diameter / 2);
    this.colour = {
      r: random(0, 255),
      g: random(0, 255),
      b: random(0, 255)
    }
  }

  draw() {
    fill(this.colour.r, this.colour.g, this.colour.b);
    circle(this.x, this.y, this.diameter);
  }

  update() {

    for (let i = 0; i < this.speed; ++i) {
      this.x += sin(this.angle);
      this.y += cos(this.angle);

      if (this.x - this.diameter / 2 < 0 || this.x + this.diameter / 2 > width)
        this.angle = TAU - this.angle;

      if (this.y - this.diameter / 2 < 0 || this.y + this.diameter / 2 > height)
        this.angle = PI - this.angle;
    }
  }
}

let circles = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  for (let i = 0; i < (width * height) / 40000; ++i)
    circles[i] = new Circle();
}

function draw() {
  resizeCanvas(window.innerWidth, window.innerHeight);

  background(0, 23, 31);

  for (let i in circles) {
    circles[i].draw();
    circles[i].update();
  }
}