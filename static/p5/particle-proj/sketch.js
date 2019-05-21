const universe = [];
var friction = .80; //.80

// pos, vel, f, rgb, att, rep, minR, maxR, damp

function setup() {
  createCanvas(windowWidth, windowHeight);


  //RED PARTICLES
  for(let i = 0; i < random(25, 170); i++) {
    universe.push(new Particle(
      createVector(random(0, width - 50), random(0, height - 50)), //position
      createVector(0, 0),                 //velocity
      0.04,//2,                                  //force 0.15
      1,                                  //color 1
      [1,3,4],                             //attracted to 134
      [],                                 //repelled to 25
      [],                                   //passive to
      25,                                 //minimum radius 25
      65,                     //maximum radius 65
      random(),                                //dampening or friction
      12,                                  //size
      [0.9, 0, 1.5, 3, 0]
      ));
  }

  //BLUE PARTICLES
  for(let i = 0; i < random(50,200); i++) {
    universe.push(new Particle(
      createVector(random(width/4, width * (3/4)), random(height/4, height * (3/4))), //position
      createVector(0, 0),                 //velocity
      0.09,//5,                                 //force
      3,                                  //color 3 
      [1,3],                                //attracted to 13
      [4],                                 //repelled to 245
      [],                                   //passive to
      25,                                 //minimum radius
      50,                                //maximum radius 50
      random(),                                 //dampening or friction
      12,                                  //size
      [1.7, 0, 1.3 , random(5,9) ,0]
      ));
  }

  //YELLOW PARTICLES
  for(let i = 0; i < random(5,55); i++) {
    universe.push(new Particle(
      createVector(random(width/3, width - 200), random(height/3, height - 200)), //position
      createVector(0, 0),                 //velocity
      0.002,//7,                                  //force
      4,                                  //colors 4
      [1],                                //attracted to 215
      [3,4],                              //repelled to 34
      [],                                   //passive to
      25,                                 //minimum radius
      77,                                 //maximum radius 77
      random(),                                //dampening or friction
      12,                                  //size
      [0.9, 0, 0.9, 0.9, 0]
      ));
  }

  /*
  //GREEN PARTICLES
  for(let i = 0; i < 150; i++) {
    universe.push(new Particle(
      createVector(random(0, width - 50), random(0, height - 50)), //position
      createVector(0, 0),                 //velocity
      0.02,//7,                                  //force 0.5
      2,                                  //colors
      [3],                                //attracted to
      [1,4,5],                              //repelled to
      [],                                   //passive to
      25,                                 //minimum radius
      77,                                 //maximum radius
      friction,                                //dampening or friction
      12,                                  //size
      [random(1,5),random(1,5),random(1,5),random(1,5),random(1,5)]
      ));
  }
  */
  /*
  //YELLOW PARTICLES
  for(let i = 0; i < 88; i++) {
    universe.push(new Particle(
      createVector(random(width/3, width - 200), random(height/3, height - 200)), //position
      createVector(0, 0),                 //velocity
      0.25,//7,                                  //force
      4,                                  //colors
      [2,1,5],                                //attracted to
      [3,4],                              //repelled to
      [],                                   //passive to
      25,                                 //minimum radius
      85,                                 //maximum radius
      friction,                                //dampening or friction
      12,                                  //size
      [random(1,5),random(1,5),random(1,5),random(1,5),random(1,5)]
      ));
  }*/

  /*
  //PINK PARTICLES
  for(let i = 0; i < 66; i++) {
    universe.push(new Particle(
      createVector(random(width/3, width - 200), random(height/3, height - 200)), //position
      createVector(0, 0),                 //velocity
      0.1,//7,                                  //force 0.6
      5,                                  //colors
      [3],                                //attracted to
      [1,2,4],                              //repelled to
      [],                                   //passive to
      25,                                 //minimum radius
      90,                                 //maximum radius
      friction,                                //dampening or friction
      12,                                  //size
      [random(1,5),random(1,5),random(1,5),random(1,5),random(1,5)]
      ));
  }
  */
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



/*
function mouseDragged() {
  for(let p of universe) {
    let dM = dist(p.position.x, p.position.y, mouseX, mouseY);
    let mid = ((p.maxR - p.minR)/2);
    let positionM = createVector(mouseX, mouseY);
    let newVelM = createVector();
    newVelM.mult(0);
    newVelM.add(positionM);
    newVelM.sub(p.position);
    newVelM.mult(((0.1 / mid) * dM) * -1);
    p.acceleration += newVelM;
  }
}
*/

