class Game {
    constructor(json) {
        this.wheel = new Wheel(json.wheel_segments);
        this.phrase = new Phrase(json.categories);
    }
}