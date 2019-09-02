let cols, rows;
//let scl = 20;
let scl = 40;
let w = window.innerWidth*2.5;
//let h = 1200;
let h = window.innerHeight*2;

let terrain = [];
let flight = 0;

let fft;

let anonFont;

let song1, song2, song3, song4, song5, song6, song7, song8;
let files = [];
let counter = 0;
//let file1, file2, file3, file4, file5, file6, file7, file8;

let isPlaying;
let isLoaded;

let currSong;

let currCamR;
let currCamY;
let currCamZ;

let song;

function preload() {
  anonFont = loadFont('anonpro.ttf');
  /*
  file1 = loadSound("sounds/u_n_me.mp3");
  file2 = loadSound("sounds/trouble.mp3");
  file3 = loadSound("sounds/shadow.mp3");
  file4 = loadSound("sounds/ma_boy_remix.mp3");
  file5 = loadSound("sounds/im_ok.mp3");
  file6 = loadSound("sounds/it_hurts.mp3");
  //file7 = loadSound("sounds/dj_mix.mp3");
  file8 = loadSound("sounds/wisteria.mp3");
  */
}


function loadSong(index, file) {
  loadSound(file, soundLoaded);
  
  function soundLoaded(sound) {
    console.log(index + ' ' + file);
    files[index] = sound;
    counter++;

    if(counter == 7) {
      isLoaded = true;
    }
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  //createCanvas(window.innerWidth, 600, WEBGL);
  cols = w / scl;
  rows = h / scl;

  isPlaying = false;
  isLoaded = false;

  currCamR = PI/2;
  currCamY = -w/15;
  currCamZ = -h/10;

  fft = new p5.FFT();

  
  loadSong(0, 'sounds/u_n_me.mp3');
  loadSong(1, 'sounds/trouble.mp3');
  loadSong(2, 'sounds/shadow.mp3');
  loadSong(3, 'sounds/ma_boy_remix.mp3');
  loadSong(4, 'sounds/im_ok.mp3');
  loadSong(5, 'sounds/it_hurts.mp3');
  loadSong(6, 'sounds/wisteria.mp3');
  

  //gl = canvas.getContext(WEBGL);

  /*
  file1 = loadSound("sounds/u_n_me.mp3", loaded);
  file2 = loadSound("sounds/trouble.mp3", loaded);
  file3 = loadSound("sounds/shadow.mp3", loaded);
  file4 = loadSound("sounds/ma_boy_remix.mp3", loaded);
  file5 = loadSound("sounds/im_ok.mp3", loaded);
  file6 = loadSound("sounds/it_hurts.mp3", loaded);
  file7 = loadSound("sounds/dj_mix.mp3");
  file8 = loadSound("sounds/wisteria.mp3", loaded);
  */

  
  song1 = new Cover("u_n_me.mp3", -3 * window.innerWidth/16, -window.innerHeight/8, window.innerWidth/10, 0);
  song2 = new Cover("trouble.mp3", -3 * window.innerWidth/16, window.innerHeight/8, window.innerWidth/10, 1);

  song3 = new Cover("shadow.mp3", -window.innerWidth/16, -window.innerHeight/8, window.innerWidth/10, 2);
  song4 = new Cover("ma_boy_remix.mp3", -window.innerWidth/16, window.innerHeight/8, window.innerWidth/10, 3);

  song5 = new Cover("im_ok.mp3", window.innerWidth/16, -window.innerHeight/8, window.innerWidth/10, 4);
  song6 = new Cover("it_hurts.mp3", window.innerWidth/16, window.innerHeight/8, window.innerWidth/10, 5);

  //song7 = new Cover("dj_mix.mp3", 3 * window.innerWidth/16, -window.innerHeight/8, window.innerWidth/10);
  song7 = new Cover("wisteria.mp3", 3 * window.innerWidth/16, -window.innerHeight/8, window.innerWidth/10, 6);
  
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

  if(isLoaded == true) {
    song1.display();
    song2.display();
    song3.display();
    song4.display();
    song5.display();
    song6.display();
    song7.display();
  } else {
    push();
    let x = createGraphics(window.innerWidth/20, window.innerWidth/20)
    x.textFont(anonFont);
    x.textAlign(CENTER);
    x.textSize(window.innerWidth/150);
    x.background(0);
    x.fill(255);
    x.text('loading...', window.innerWidth/40, window.innerWidth/40);
    //rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.005);
    texture(x);
    box(window.innerWidth/20, window.innerWidth/20, window.innerWidth/20);
    pop();
  }

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
  //rotateX(PI/2);


  /*
  if(isPlaying == false) {
    rotateX(PI/2);
    translate(-w/2, -h/2);
    translate(0,-w/15, -h/10);
  } else {
    rotateX(5 * PI/12);
    translate(-w/2, -h/2);
    translate(0,0,-h/12);
  }
  */

  if(isPlaying == false) {
    if(currCamR < PI/2) {
      currCamR += 0.005;
    }
    if(currCamY > -w/15) {
      currCamY -= (w/15)/45;
    }
    if(currCamZ > -h/10) {
      currCamZ -= (h/10)/45;
    }
  }

  if(isPlaying == true) {
    if(currCamR > 5 * PI/12) {
      currCamR -= 0.005;
    }
    if(currCamY < 0) {
      currCamY += (w/15)/100;
    }
    if(currCamZ < -h/12) {
      currCamZ += (h/10)/100;
    }
  }

  rotateX(currCamR);
  translate(-w/2, -h/2);
  translate(0,currCamY, currCamZ);

  
  

  //translate(0,0,-h/12);
  //translate(0,-w/2,-h/8);
  //translate(0,-w/10, h/20);
  //translate(0,-w/10, -h/10);
  //translate(0,-w/15, -h/15);
  //translate(0,-w/15, -h/10);

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
  constructor (text, x, y, size, file) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.size = size;
    this.file = file;

    this.c = createGraphics(this.size, this.size);
    this.c.textFont(anonFont);
    this.c.textAlign(CENTER);
    this.c.textSize(this.size/10);
  }

  display() {

    if(isPlaying == false) {
      push();
      if (
        mouseX < this.x + this.size/2 + window.innerWidth/2 &&
        mouseX > this.x - this.size/2  + window.innerWidth/2 &&
        mouseY < this.y + this.size/2 + window.innerHeight/2 &&
        mouseY > this.y - this.size/2  + window.innerHeight/2 
      ) {
        this.c.background(255);
        this.c.fill(0);
        this.c.text(this.text, this.size/2, this.size/2);
        if(mouseIsPressed) {
          files[this.file].setVolume(0.5);
          files[this.file].play();
          currSong = this;
          isPlaying = true;
        }
      } else {
        this.c.background(0);
        this.c.fill(255);
        this.c.text(this.text, this.size/2, this.size/2);
      }
      translate(this.x, this.y)
      rotateY(map(mouseX, 0+this.x, width+this.x, -1, 1));
      rotateX(map(mouseY, 0+this.y, height+this.y, 1, -1));
      texture(this.c);
      box(this.size, this.size, 1);
      pop();
    } else {



      if(this == currSong) {
        //STOP BUTTON
        push();
        if (
          mouseX < window.innerWidth/20 + window.innerWidth/2 &&
          mouseX > -window.innerWidth/20 + window.innerWidth/2 &&
          mouseY < -window.innerHeight/4 + window.innerHeight/20 + window.innerHeight/2 &&
          mouseY > -window.innerHeight/4 - window.innerHeight/20  + window.innerHeight/2 
        ) {
          this.c.background(255);
          this.c.fill(0);
          this.c.text("STOP", window.innerWidth/20, window.innerWidth/20);
          if(mouseIsPressed) {
            files[this.file].stop();
            isPlaying = false;
          }
        } else {
          this.c.background(0);
          this.c.fill(255);
          this.c.text("STOP", window.innerWidth/20, window.innerWidth/20);
        }
        translate(0, -window.innerHeight/4);
        //rotateY(map(mouseX, 0, width, -1, 1));
        //rotateX(map(mouseY, window.innerHeight/4, height+window.innerHeight/4, 1, -1));
        texture(this.c);
        box(window.innerWidth/10, window.innerWidth/20, 1);
        pop();

        //CURR SONG BOX
        push();
        this.c.clear();
        this.c.fill(255);
        this.c.text(this.text, this.size/2, this.size/2);
        rotateY(map(mouseX, 0, width, -1, 1));
        rotateX(map(mouseY, 0, height, 1, -1));
        rotateZ(frameCount * -0.01);
        rotateY(frameCount * -0.01);
        texture(this.c);
        //box(this.size, this.size, 1);
        box(this.size, this.size, this.size);
        pop();
      }

    }

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
