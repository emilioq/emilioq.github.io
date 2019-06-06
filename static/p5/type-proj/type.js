let  r1 = 0;
let  g1 = 0;
let  b1 = 0; 

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(15);
    fill(r1, g1, b1);
    rect(windowWidth/2, windowHeight/2, 50, 50);

}

function keyTyped() {
  if (key === 'a') {
    r1 = 200;
    g1 = 0;
    b1 = 0;
  } 
  
  if (key === 'b') {
    r1 = 0;
    g1 = 200;
    b1 = 0;
  }

  if (key === 'c') {
    r1 = 0;
    g1 = 0;
    b1 = 200;
  }

  if (key === 'd') {
    value = 0;
  }

  if (key === 'e') {
    value = 0;
  }

  if (key === 'f') {
    value = 255;
  } 
  
  if (key === 'g') {
    value = 0;
  }

  if (key === 'h') {
    value = 0;
  }

  if (key === 'i') {
    value = 0;
  }

  if (key === 'j') {
    value = 0;
  }

  if (key === 'k') {
    value = 255;
  } 
  
  if (key === 'l') {
    value = 0;
  }

  if (key === 'm') {
    value = 0;
  }

  if (key === 'n') {
    value = 0;
  }

  if (key === 'o') {
    value = 0;
  }

  if (key === 'p') {
    value = 255;
  } 
  
  if (key === 'q') {
    value = 0;
  }

  if (key === 'r') {
    value = 0;
  }

  if (key === 's') {
    value = 0;
  }

  if (key === 't') {
    value = 0;
  }

  if (key === 'u') {
    value = 255;
  } 
  
  if (key === 'v') {
    value = 0;
  }

  if (key === 'w') {
    value = 0;
  }

  if (key === 'x') {
    value = 0;
  }

  if (key === 'y') {
    value = 0;
  }

  if (key === 'z') {
    value = 255;
  } 
}