class Wheel {
    constructor(wheelSegmentsObj) {
        this.segments = this._buildSegments(wheelSegmentsObj);
    }
    _buildSegments(wheelSegmentsObj) {
        push();
        const segments = [];
        const segmentsLength = wheelSegmentsObj.length;
        colorMode(HSL, 100);
        const SAT = 100;
        const LIGHT = 50;
        for (let i = 0; i < segmentsLength; i++) {
            const segment = wheelSegmentsObj[i];
            const sliceSize = PI * 2 / segmentsLength;
            const wheelSegment = new WheelSegment(
                width / 2, 
                height / 2, 
                width / 2 * 0.9, 
                color(100 / segmentsLength * i, SAT, LIGHT), 
                sliceSize * i, 
                sliceSize
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
    }
}