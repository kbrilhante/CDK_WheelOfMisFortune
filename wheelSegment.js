class WheelSegment {
    constructor(x, y, radius, color, startAngle, sliceSize, type, value = 0) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.sliceSize = sliceSize;
        this.startAngle = startAngle;
        this.endAngle = startAngle + sliceSize;
        this.type = type;
        this.value = value;
    }
    show() {
        strokeWeight(2);
        stroke(0);
        fill(this.color);
        arc(this.x, this.y, this.radius, this.radius, this.startAngle, this.endAngle, PIE);
        
        push()
        stroke(255)
        const angle = this.startAngle + this.sliceSize / 2;
        const vector = p5.Vector.fromAngle(angle);
        vector.mult(this.radius * 0.65);
        vector.add(this.x, this.y);
        strokeWeight(4)
        strokeJoin(BEVEL);
        stroke(0)
        fill(255);
        textSize(22);
        textAlign(CENTER, CENTER);
        let txt = "";
        if (this.type == "points") {
            txt = this.value;
        } else {
            txt = this.type.replaceAll("_", " ").toUpperCase()
        }
        translate(vector.x, vector.y);
        rotate(angle);
        text(txt, 0, 0)

        pop()
    }
    spin(speed) {
        this.startAngle += speed;
        if (this.startAngle >= PI * 2) this.startAngle -= PI * 2
        this.endAngle = this.startAngle + this.sliceSize;
    }
    isOnTop() {
        const TOP = PI * 1.5;
        if (this.startAngle <= TOP && this.endAngle >= TOP) return true
        return false
    }
}
