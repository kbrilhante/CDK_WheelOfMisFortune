class WheelSegment {
    constructor(x, y, radius, color, startAngle, sliceSize) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.sliceSize = sliceSize;
        this.startAngle = startAngle;
        this.endAngle = startAngle + sliceSize;
    }
    show() {
        // push();
        fill(this.color);
        arc(this.x, this.y, this.radius, this.radius, this.startAngle, this.endAngle, PIE);
        // pop();
    }
}
