var friction = 2.0;

class Particle {
    constructor(pos, vel, f, rgb, att, rep, pas, minR, maxR, damp, size, fMap) {
        this.position = pos;
        this.velocity = vel;
        this.acceleration = createVector();

        this.force = f;

        this.value = rgb;

        this.attracted = att;
        this.repelled = rep;
        this.passive = pas

        this.minR = minR;
        this.maxR = maxR;

        this.damp = damp;
        this.size = size;

        this.forceMap = fMap;
    }

    update() {

        
        //BORDERS
        if(this.position.x < 0) {
            this.velocity.x *= -1;
            this.position.x = 0;
        }

        if(this.position.x > width) {
            this.velocity.x *= -1;
            this.position.x = width;
        }

        if(this.position.y < 0) {
            this.velocity.y *= -1;
            this.position.y = 0;
        }

        if(this.position.y > height) {
            this.velocity.y *= -1;
            this.position.y = height;
        }
        

        /*
        //CONTINUOUS
        if(this.position.x < 0) {
            this.position.x = width;
        }

        if(this.position.x > width) {
            this.position.x = 0;
        }

        if(this.position.y < 0) {
            this.velocity.y = height;
        }

        if(this.position.y > height) {
            this.position.y = 0;
        }
        */

        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);

        this.velocity.mult(this.damp)
    }

    calcForce(particles) {
        let newVel = createVector();
        let totVel = createVector();
        let total = 0;
    
        for(let p of particles) {
            let d = dist(this.position.x, this.position.y, p.position.x, p.position.y);
            let mid = ((this.maxR - this.minR)/2);

            if(p != this && d < this.maxR) {
                newVel.mult(0);
                newVel.add(p.position);
                newVel.sub(this.position);
                //newVel.sub(p.minR);

                if(d < this.minR) {
                    //newVel.mult(Math.pow(d - this.minR, 2) * -1);
                    newVel.mult(Math.pow(d - this.minR, 2) / (this.minR * -4));
                    total++;
                } else if(d <= (this.minR + mid) && this.repelled.includes(p.value)) {
                    newVel.mult(((this.force / mid) * d) * -1);
                    total++;
                } else if(d <= (this.minR + mid) && this.attracted.includes(p.value)) {
                    newVel.mult((this.force / mid) * d);
                    total++;
                } else if(d > (this.minR + mid) && this.repelled.includes(p.value)) {
                    newVel.mult((this.force / mid) * (d - this.maxR));
                    total++;
                } else if(d > (this.minR + mid) && this.attracted.includes(p.value)) {
                    newVel.mult(((this.force / mid) * (d - this.maxR)) * -1);
                    total++;
                }

                newVel.mult(this.forceMap[p.value -1]);
                totVel.add(newVel);
            }
        }

        if(total > 0) {
            totVel.div(total);
            totVel.sub(this.velocity);
        }

        return totVel;

    }
    
    applyForce(particles) {
        this.acceleration = this.calcForce(particles);
    }

    display() {

        //PARTICLE
        strokeWeight(this.size);
        switch(this.value) {
            case 1:
                stroke(193, 7, 255);
                //stroke(150, 70, 70);    //RED
                break;
            case 2:
                stroke(7, 255, 193);
                //stroke(70, 70, 150);    //BLUE
                break;
            case 3:
                stroke(255, 193, 7);
                //stroke(175, 150, 0);    //YELLOW
                break;
            case 4:
                stroke(70, 150, 70);    //GREEN
                break;
            case 5:
                stroke(229, 188, 229);  //PINK
                break;
            default:
                stroke(255, 0, 0);
                break;
        }

        noFill();
        strokeWeight(1);
        ellipse(this.position.x, this.position.y, 8, 8);

        //point(this.position.x, this.position.y);

         
         /*
        //RADIUS
        //max
        stroke(255);
        noFill();
        strokeWeight(0.5);
        ellipse(this.position.x, this.position.y, this.maxR, this.maxR);
        //min
        stroke(185);
        strokeWeight(0.25);
        ellipse(this.position.x, this.position.y, this.minR, this.minR);
        //mids
        stroke(185,0,0);
        ellipse(this.position.x, this.position.y, this.minR + ((this.maxR - this.minR)/2),  this.minR + ((this.maxR - this.minR)/2));
         */
        
        
    }
}