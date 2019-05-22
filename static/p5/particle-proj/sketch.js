const universe = [];
var friction = .85; //.80

// pos, vel, f, rgb, att, rep, minR, maxR, damp

function setup() {
  createCanvas(windowWidth, windowHeight);

  //RED PARTICLES
  for(let i = 0; i < 170; i++) {
    universe.push(new Particle(
      createVector(random(0, width - 50), random(0, height - 50)), //position
      createVector(0, 0),                 //velocity
      0.04,//2,                                  //force 0.15
      1,                                  //color 1
      [1,2,3],                             //attracted to 134
      [],                                 //repelled to 25
      [],                                   //passive to
      25,                                 //minimum radius 25
      65,                     //maximum radius 65
      random(0.2,0.95),                                //dampening or friction
      12,                                  //size
      [0.9, 2, 2]
      ));
  }

  //BLUE PARTICLES
  for(let i = 0; i < 200; i++) {
    universe.push(new Particle(
      createVector(random(width/4, width * (3/4)), random(height/4, height * (3/4))), //position
      createVector(0, 0),                 //velocity
      0.09,//5,                                 //force
      2,                                  //color 3 
      [1,2],                                //attracted to 13
      [3],                                 //repelled to 245
      [],                                   //passive to
      25,                                 //minimum radius
      55,                                //maximum radius 50
      random(0.2,0.95),                                 //dampening or friction
      12,                                  //size
      [1.9, 1, 7]
      ));
  }

  //YELLOW PARTICLES
  for(let i = 0; i < 33; i++) {
    universe.push(new Particle(
      createVector(random(width/3, width - 200), random(height/3, height - 200)), //position
      createVector(0, 0),                 //velocity
      0.2,//7,                                  //force
      3,                                  //colors 4
      [1],                                //attracted to 215
      [2,3],                              //repelled to 34
      [],                                   //passive to
      25,                                 //minimum radius
      77,                                 //maximum radius 77
      random(0.2,0.95),                                //dampening or friction
      12,                                  //size
      [0.75, 0.9, 1.2]
      ));
  }
}

function draw() {
  background(15);
  for(let p of universe) {

    p.applyForce(universe);
    p.update();
    p.display();

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



