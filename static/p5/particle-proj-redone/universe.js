const RADIUS = 5.0;
const DIAMETER = 2.0 * RADIUS;
const R_SMOOTH = 2.0;

class Universe {
    constructor(numTypes, numParticles) {
        this.types = new ParticleTypes();
        this.particles = Array.from({ length: numParticles }, () => makeParticle());
        this.setPopulation(numTypes, numParticles);

        this.attractMean = 0;
		this.attractSD = 0;
        this.minRLower = 0;
		this.minRUpper = 0;
		this.maxRLower = 0;
		this.maxRUpper = 0;
		this.friction = 0;
    }

    update() {
        for(let i = 0; i < this.particles.length; i++) {
            const p1 = this.particles[i];

            for(let j = 0; j < this.particles.length; j++) {
                const p2 = this.particles[j];

                let dx = p2.x - p1.x;
                let dy = p2.y - p1.y;

                // Get distance squared
				const r2 = dx * dx + dy * dy;
				const minR = this.types.getMinR(p.type, q.type);
				const maxR = this.types.getMaxR(p.type, q.type);

				if (r2 > maxR * maxR || r2 < 0.01) {
					continue;
				}

				// Normalize displacement
				const r = Math.sqrt(r2);
				dx /= r;
				dy /= r;

				// Calculate force
				let f = 0.0;
				if (r > minR) {
					if (this.flatForce) {
						f = this.types.getAttract(p.type, q.type);
					} else {
						const numer = 2.0 * Math.abs(r - 0.5 * (maxR + minR));
						const denom = maxR - minR;
						f = this.types.getAttract(p.type, q.type) * (1.0 - numer / denom);
					}
				} else {
					f =
						R_SMOOTH * minR * (1.0 / (minR + R_SMOOTH) - 1.0 / (r + R_SMOOTH));
				}

				p.vx += f * dx;
				p.vy += f * dy;
			}

			this.particles[i] = p
        }

        // Update position
		for (let i = 0; i < this.particles.length; ++i) {
			const p = this.particles[i];

			// Update position and velocity
			p.x += p.vx;
			p.y += p.vy;
			p.vx *= 1.0 - this.friction;
			p.vy *= 1.0 - this.friction;

			// Check for wall collisions
            if (p.x < DIAMETER) {
                p.vx = -p.vx;
                p.x = DIAMETER;
            } else if (p.x >= windowWidth - DIAMETER) {
                p.vx = -p.vx;
                p.x = windowWidth - DIAMETER;
            }

            if (p.y < DIAMETER) {
                p.vy = -p.vy;
                p.y = DIAMETER;
            } else if (p.y >= windowHeight - DIAMETER) {
                p.vy = -p.vy;
                p.y = windowHeight - DIAMETER;
            }
			

			this.particles[i] = p;
		}

    }
}