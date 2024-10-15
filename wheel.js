class Wheel {
    constructor(wheelSegmentsObj) {
        this.x = width / 2;
        this.y = height / 2;
        this.radius = this.x * 0.9;
        this.segments = this._buildSegments(wheelSegmentsObj);
        this.spinning = false;
        this.speed = 0;
    }
    _buildSegments(wheelSegmentsObj) {
        push();
        const segments = [];
        const segmentsLength = wheelSegmentsObj.length;
        colorMode(HSL, 100);
        for (let i = 0; i < segmentsLength; i++) {
            const segment = wheelSegmentsObj[i];
            const sliceSize = PI * 2 / segmentsLength;
            const wheelSegment = new WheelSegment(
                this.x, 
                this.y, 
                this.radius, 
                color(100 / segmentsLength * i, SAT, LIGHT), 
                sliceSize * i, 
                sliceSize, 
                segment.type,
                segment.value
            )
            segments.push(wheelSegment);
        }
        pop();
        return segments;
    }
    show() {
        for (const segment of this.segments) {
            segment.show();
        }
        push();
        const y = this.y - this.radius + 10;
        stroke(255);
        strokeWeight(2);
        fill(0);
        triangle(this.x, y, this.x + 7, y - 30, this.x - 7, y - 30);
        pop();
        if (this.spinning) this._spin();
    }
    startSpin() {
        if (!this.spinning) {
            this.spinning = true;
            this.speed = radians(random(10, 30));
        }
    }
    _spin() {
        this.speed *= random(990, 996) / 1000;
        if (this.speed < 0.001) {
            this.spinning = false;
            this.speed = 0;
        }
        for (const segment of this.segments) {
            segment.spin(this.speed);
        }
    }
    getTopSegment() {
        for (const segment of this.segments) {
            if (segment.isOnTop()) return segment;
        }
    }
}