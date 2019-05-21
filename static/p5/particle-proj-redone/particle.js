
class Particle {
    constructor(x, y, vx, vy, type) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.type = type;
    }
}

class ParticleTypes {
    constructor(size = 0) {
        this.attract = Array(size * size).fill(0);
        this.minR = Array(size * size).fill(0);
        this.maxR = Array(size * size).fill(0);
    }

    getAttract(i, j) {
        return this.attract[i * this.col.length + j];
    }

    setAttract(i, j, value) {
        this.attract[i * this.col.length + j] = value;
    }

    getMinR(i, j) {
        return this.minR[i * this.col.length + j];
    }

    setMinR(i, j, value) {
        this.minR[i * this.col.length + j] = value;
    }

    getMaxR(i, j) {
        return this.maxR[i * this.col.length + j];
    }

    setMaxR(i, j, value) {
        this.maxR[i * this.col.length + j] = value;
    }
}

