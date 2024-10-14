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
    }
    spin(speed) {
        this.startAngle += speed;
        this.endAngle = this.startAngle + this.sliceSize;
    }
}
