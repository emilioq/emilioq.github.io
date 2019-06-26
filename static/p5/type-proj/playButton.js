class playButton {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y

        this.w = width;
        this.h = height;

        this.over = false;
        this.lock = false;

    }

    render() {
        if (
            mouseX > this.x - this.w &&
            mouseX < this.x + w &&
            mouseY > this.y - this.h &&
            mouseY < this.y + this.h
        ) {
            this.over = true;
            if (!this.lock) {
                stroke(255);
                fill(244, 122, 158);
            } else {
                stroke(156, 39, 176);
                fill(244, 122, 158);
                this.over = false;
            }
        }
          
        rect(this.w, this.h, this.w, this.h);
    }
}