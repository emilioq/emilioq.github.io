const universe = [];
var friction = .925; //.80

// pos, vel, f, rgb, att, rep, minR, maxR, damp

function setup() {
  createCanvas(windowWidth, windowHeight);

  //RED PARTICLES (170)
  for(let i = 0; i < 12; i++) {
    universe.push(new Particle(
      createVector(random(0, width - 50), random(0, height - 50)), //position
      createVector(0, 0),                 //velocity
      0.04,//2,                                  //force 0.15
      1,                                  //color 1
      [1,3],                             //attracted to 134
      [2,4],                                 //repelled to 25
      [],                                   //passive to
      [15, 35, 25, 20],                                 //minimum radius 25
      [80, 70, 75, 60],                     //maximum radius 65
      random(0.2,0.95),                                //dampening or friction
      random(3,9),                                  //size
      [0.9, 2, 2, 3]
    ));
  }

  //BLUE PARTICLES (200)
  for(let i = 0; i < 15; i++) {
    universe.push(new Particle(
      createVector(random(width/4, width * (3/4)), random(height/4, height * (3/4))), //position
      createVector(0, 0),                 //velocity
      0.09,//5,                                 //force
      2,                                  //color 3 
      [1,2],                                //attracted to 13
      [3,4],                                 //repelled to 245
      [],                                   //passive to
      [10, 13, 10, 10],                                 //minimum radius
      [70, 25, 60, 65],                                //maximum radius 50 ... 55
      random(0.2,0.95),                                 //dampening or friction
      random(3,9),                                  //size
      [1.9, 1, 7, 3]
    ));
  }

  //YELLOW PARTICLES (33)
  for(let i = 0; i < 10; i++) {
    universe.push(new Particle(
      createVector(random(width/3, width - 200), random(height/3, height - 200)), //position
      createVector(0, 0),                 //velocity
      0.1,//7,                                  //force
      3,                                  //colors 4
      [1,2],                                //attracted to 215
      [3,4],                              //repelled to 34
      [],                                   //passive to
      [10, 15, 30, 25],                                 //minimum radius
      [60, 70, 90, 70],                                 //maximum radius 77
      random(0.2,0.95),                                //dampening or friction
      random(3,9),                                  //size
      [1.0, 0.9, 1.2, 3]
    ));
  }

    //GREEN PARTICLES (33)
    for(let i = 0; i < 5; i++) {
      universe.push(new Particle(
        createVector(random(width/4, width * (3/4)), random(height/4, height * (3/4))), //position
        createVector(0, 0),                 //velocity
        0.2,//7,                                  //force
        4,                                  //colors 4
        [1,2,3],                                //attracted to 215
        [4],                              //repelled to 34
        [],                                   //passive to
        [15, 12, 10, 30],                                 //minimum radius
        [30, 70, 50, 65],                                 //maximum radius 77
        random(0.2,0.95),                                //dampening or friction
        random(3,9),                                  //size
        [0.75, 0.5, 0.9, 2.6]
      ));
    }
}

function draw() {
  background(255);
  for(let p of universe) {

    p.applyForce(universe);
    p.update();
    p.display();

  }
}

function mousePressed() {
  let p = int(random(1,5));
  switch(p) {
    //RED
    case 1:
      universe.push(new Particle(
        createVector(mouseX, mouseY), //position
        createVector(0, 0),                 //velocity
        0.04,//2,                                  //force 0.15
        1,                                  //color 1
        [1,3],                             //attracted to 134
        [2,4],                                 //repelled to 25
        [],                                   //passive to
        [15, 35, 25, 20],                                 //minimum radius 25
        [80, 70, 75, 60],                     //maximum radius 65
        random(0.2,0.95),                                //dampening or friction
        random(3,9),                                  //size
        [0.9, 2, 2, 3]
      ));
      break;
    //BLUE
    case 2:
      universe.push(new Particle(
        createVector(mouseX, mouseY), //position
        createVector(0, 0),                 //velocity
        0.09,//5,                                 //force
        2,                                  //color 3 
        [1,2],                                //attracted to 13
        [3,4],                                 //repelled to 245
        [],                                   //passive to
        [10, 13, 10, 10],                                 //minimum radius
        [70, 25, 60, 65],                                //maximum radius 50
        random(0.2,0.95),                                 //dampening or friction
        random(3,9),                                  //size
        [1.9, 1, 7, 3]
      ));
      break;
    //YELLOW
    case 3:
      universe.push(new Particle(
        createVector(mouseX, mouseY), //position
        createVector(0, 0),                 //velocity
        0.1,//7,                                  //force
        3,                                  //colors 4
        [1,2],                                //attracted to 215
        [3,4],                              //repelled to 34
        [],                                   //passive to
        [10, 15, 30, 25],                                 //minimum radius
        [60, 70, 90, 70],                                 //maximum radius 77
        random(0.2,0.95),                                //dampening or friction
        random(3,9),                                  //size
        [1.0, 0.9, 1.2, 3]
      ));
      break;
    //GREEN
    case 4:
      universe.push(new Particle(
        createVector(mouseX, mouseY), //position
        createVector(0, 0),                 //velocity
        0.2,//7,                                  //force
        4,                                  //colors 4
        [1,2,3],                                //attracted to 215
        [4],                              //repelled to 34
        [],                                   //passive to
        [15, 12, 10, 30],                                 //minimum radius
        [30, 70, 50, 65],                                 //maximum radius 77
        random(0.2,0.95),                                //dampening or friction
        random(3,9),                                  //size
        [0.75, 0.5, 0.9, 2.6]
      ));
      break;
        
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



