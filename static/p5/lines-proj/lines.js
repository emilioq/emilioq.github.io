var num_lines = 15;
var t = 0;
var op = 55;
var mouse = 0;

function setup() {
  //background(20);
  createCanvas(300, 300);
}

function draw() {
  clear();
  stroke(250,230,200);
  strokeWeight(5);
  
  translate(windowWidth/2, windowHeight/2);

  if(op > 55) {
    op -= 5;
  }

  if(mouse > 0) {
    mouse -= 1;
  }



  if(mouseX > 45 && mouseX < 255 && mouseY > 45 && mouseY < 255) {
    op+=25;
    mouse+=5;
    t-=.20;
  
    if(op >= 125) {
      op = 125;
    }
  
    if(mouse >= 125) {
      mouse = 125;
    }
  }

  console.log(mouseX, mouseY);
  
  for(let i = 0; i < num_lines; i++) {
    /*
    //BLUE
    stroke(250 - (i * 10), 230, 200, 55);
    line(x1(t+i) + mouseX, y1(t+i)  + mouseY, x2(t+i)  + mouseX, y2(t+i) * mouseY);
    //PURPLE
    stroke(250, 230 - (i * 5), 200, 55);
    line(x2(t+i) - mouseY, y1(t-i) * mouseX  + mouseX, x1(t+i) + mouseY, y2(t-i)  * mouseX);
    //YELLOW
    stroke(250, 230, 200 - (i * 15), 55);
    line(x2(t-i) + mouseX, x1(t-i), y1(t-i) - mouseX, y2(t+i)  + mouseX);
    */


    /*
    //BLUE
    stroke(250 - (i * 10), 230, 200, op);
    line(x1(t+i), y1(t+i), x2(t+i), y2(t+i));
    //PURPLE
    stroke(250, 230 - (i * 5), 200, op);
    line(x2(t+i) - mouseY, y1(t-i) * mouseX  + mouseX, x1(t+i) + mouseY, y2(t-i)  * mouseX);
    //YELLOW
    stroke(250, 230, 200 - (i * 15), op);
    line(x2(t-i) + mouseX, x1(t-i), y1(t-i), y2(t+i)  + mouseX); */

    //BLUE
    stroke(250 - (i * 10), 230, 200, op);
    line(x1(t+i) + mouseY, y1(t+i) - mouse, x2(t+i), y2(t+i) + mouseY);
    //PURPLE
    stroke(250, 230 - (i * 5), 200, op);
    line(x2(t+i) - mouseY, y1(t-i) + mouse, x1(t+i) + mouseX, y2(t-i)  + mouse);
    //YELLOW
    stroke(250, 230, 200 - (i * 15), op);
    line(x2(t-i) + mouse, x1(t-i) + mouseX, y1(t-i) + mouseY, y2(t+i)  + mouse);
  }
  
  t += .25;
}

/*
function mouseMoved() {
  op+=25;
  mouse+=5;
  t-=.20;

  if(op >= 125) {
    op = 125;
  }

  if(mouse >= 125) {
    mouse = 125;
  }
} */

function x1(t) {
  return Math.sin(t/10) * 100 + Math.sin(t/15) * 100;
}

function y1(t) {
  return Math.cos(t/10) * 200;
}

function x2(t) {
  return Math.sin(t/10) * 100 + Math.sin(t/500) * 2;
}

function y2(t) {
  return Math.cos(t/20) * 100;
}