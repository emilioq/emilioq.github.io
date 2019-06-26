let osc, fft;
let pause = 0;

let cx;
let cy;
let csize = 25;
let overC = false;
let lockC = false;
let cxOffset = 0.0;
let cyOffset = 0.0;


let overP = false;
let lockP = false;

function setup() {
    createCanvas(windowWidth, windowHeight);

    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(240);
    osc.amp(0);

    fft = new p5.FFT();
    osc.start();

    cx = windowWidth / 2.0;
    cy = windowHeight / 2.0;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(15);

    let waveform = fft.waveform();
    noFill();
    beginShape();
    stroke(255);
    strokeWeight(5);
    for (let i = 0; i < waveform.length; i++) {
      let x = map(i, 0, waveform.length, 0, width);
      let y = map(waveform[i], -1, 1, height, 0);
      vertex(x, y);
    }
    endShape();

    // Test if the cursor is over the box
    if (
      mouseX > cx - csize &&
      mouseX < cx + csize &&
      mouseY > cy - csize &&
      mouseY < cy + csize
    ) {
      overC = true;
      if (!lockC) {
        stroke(255);
        fill(244, 122, 158);
      }
    } else {
      stroke(156, 39, 176);
      fill(244, 122, 158);
      overC = false;
    }

    // Draw the box
    rect(cx, cy, csize, csize);

    pButton = playButton(windowWidth/8, windowHeight - windowHeight/8, 100, 50)
    pButton.render();
    
    let freq = map(cx, 0, width, 40, 880);
    osc.freq(freq);
  
    let amp = map(cy, 0, height, 1, 0.01);
    osc.amp(amp);

}

function mousePressed() {
  if (overC) {
    lockC = true;
    fill(255, 255, 255);
  } else {
    lockC = false;
  }
  cxOffset = mouseX - cx;
  cyOffset = mouseY - cy;
}

function mouseDragged() {
  if (lockC) {
    cx = mouseX - cxOffset;
    cy = mouseY - cyOffset;
  }
}

function mouseReleased() {
  lockC = false;
}

function togglePlay() {
  if (pause) {
    pause = 0;
    osc.start();
  } else {
    pause = 1;
    osc.stop();
  }
}

function keyTyped() {
  if (key === 's') {

  } 

  if (key === 'd') {

  } 

  if (key === 'f') {

  }
  
  if (key === 'j') {

  } 

  if (key === 'k') {

  } 

  if (key === 'l') {

  } 
}