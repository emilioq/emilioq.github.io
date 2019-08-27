let cols, rows;
//let scl = 20;
let scl = 40;
let w = window.innerWidth*2.5;
//let h = 1200;
let h = window.innerHeight*2;

let terrain = [];
let flight = 0;

let fft;

let _text;

let anonFont;

let song1, song2, song3, song4, song5, song6, song7, song8;

let gl;

function preload() {
  anonFont = loadFont('anonpro.ttf');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  //createCanvas(window.innerWidth, 600, WEBGL);
  cols = w / scl;
  rows = h / scl;

  fft = new p5.FFT();

  //gl = canvas.getContext(WEBGL);

  song1 = new Cover("u_n_me.mp3", -3 * window.innerWidth/16, -window.innerHeight/8, 200);
  song2 = new Cover("trouble.mp3", -3 * window.innerWidth/16, window.innerHeight/8, 200);

  song3 = new Cover("shadow.mp3", -window.innerWidth/16, -window.innerHeight/8, 200);
  song4 = new Cover("ma_boy_remix.mp3", -window.innerWidth/16, window.innerHeight/8, 200);

  song5 = new Cover("im_ok.mp3", window.innerWidth/16, -window.innerHeight/8, 200);
  song6 = new Cover("it_hurts.mp3", window.innerWidth/16, window.innerHeight/8, 200);

  song7 = new Cover("dj_mix.mp3", 3 * window.innerWidth/16, -window.innerHeight/8, 200);
  song8 = new Cover("wisteria.mp3", 3 * window.innerWidth/16, window.innerHeight/8, 200);



}

function draw() {
  //NOISE & FLIGHT
  flight -= 0.005;
  let yoff = flight;
  for(let y = 0; y < rows; y++) {
    terrain[y] = [];
    let xoff = 0;
    for(let x = 0; x < cols; x++) {
      terrain[y][x] = map(noise(yoff,xoff), 0, 1, -100, 100);
      xoff += 0.05;
    }
    yoff += 0.05;
  }

  //clear();
  background(0);

  
  song1.display();
  song2.display();
  song3.display();
  song4.display();
  song5.display();
  song6.display();
  song7.display();
  song8.display();
  

  strokeWeight(1);
  stroke(255);
  noFill();
  smooth();

  //let spectrum = fft.analyze();
  //console.log(spectrum);

  /* BOX 3D
  noFill();
  stroke(100, 100, 240);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(45, 45, 45);
  */
  
  //rotateY(map(mouseX, 0,width,0,10));
  //rotateY(frameCount * 0.01);
  //rotateX(PI/3);
  //rotateX(PI/12);
  
  //rotateX(5 * PI/12);

  rotateX(PI/2);
  
  translate(-w/2, -h/2);
  //translate(0,0,-h/12);
  //translate(0,-w/2,-h/8);
  //translate(0,-w/10, h/20);
  //translate(0,-w/10, -h/10);
  //translate(0,-w/15, -h/15);
  translate(0,-w/15, -h/10);

  //translate(0,0,map(mouseY, 0, height, 0, -h));
  //translate(0,map(mouseX, 0, width, 0, -w));

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
  //resizeCanvas(window.innerWidth, 600);
  resizeCanvas(window.innerWidth, window.innerHeight);
}





class Cover {
  constructor (text, x, y, size) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.size = size;

    this.c = createGraphics(this.size, this.size);
    this.c.textFont(anonFont);
    this.c.textAlign(CENTER);
    this.c.textSize(this.size/10);
    this.c.fill(255);
    this.c.background(0);
    this.c.text(this.text, this.size/2, this.size/2);
  }

  display() {
    push();
    translate(this.x, this.y)
    rotateY(map(mouseX, 0+this.x, width+this.x, -1, 1));
    rotateX(map(mouseY, 0+this.y, height+this.y, 1, -1));
    texture(this.c);
    box(this.size, this.size, 1);

    /*
    if (
      mouseX > this.x - this.size/2 &&
      mouseX < this.x + this.size/2 &&
      mouseY > this.y - this.size/2 &&
      mouseY < this.y + this.size/2
    ) {
      this.c.background(100);
    } else {
      this.c.background(0);
    }*/
    pop();
  }


    /*
    push();
    //normalMaterial();
    //stroke(255);
    rotateY(map(mouseX, 0, width, -1, 1));
    rotateX(map(mouseY, 0, height, 1, -1));
    songTxt.text("damn.", 150, 150);
    texture(songTxt);
    box(200,200,1);
    //plane(200);
    pop();
  
    push();
    translate(-window.innerWidth/4, -window.innerHeight/4)
    rotateY(map(mouseX, 0-window.innerWidth/4, width-window.innerWidth/4, -1, 1));
    rotateX(map(mouseY, 0-window.innerHeight/4, height-window.innerHeight/4, 1, -1));
    texture(songTxt);
    box(200,200,1);
    pop();
    */
}
