let cols, rows;
let scl = 20;
let w = window.innerWidth*2;
let h = 1200;

let terrain = [];
let flight = 0;

let fft;

function setup() {
  //createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  createCanvas(window.innerWidth, 600, WEBGL);
  cols = w / scl;
  rows = h / scl;

  fft = new p5.FFT();
}

function draw() {
  flight -= 0.01;
  let yoff = flight;
  for(let y = 0; y < rows; y++) {
    terrain[y] = [];
    let xoff = 0;
    for(let x = 0; x < cols; x++) {
      terrain[y][x] = map(noise(yoff,xoff), 0, 1, -100, 100);
      xoff += 0.1;
    }
    yoff += 0.1;
  }

  //background(0);
  clear();
  strokeWeight(1);
  stroke(255);
  noFill();
  smooth();

  let spectrum = fft.analyze();
  console.log(spectrum);

  /* BOX 3D
  noFill();
  stroke(100, 100, 240);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(45, 45, 45);
  */

  rotateX(PI/3);
  translate(-w/2, -h/2);

  for(let y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_FAN); //TRIANGLE_STRIP or TRIANGLE_FAN
    for(let x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[y][x]);
      //vertex(x*scl, (y+1)*scl, terrain[y+1][x]);
    }
    endShape();
  }



}

function windowResized() {
  resizeCanvas(window.innerWidth, 600);
}

