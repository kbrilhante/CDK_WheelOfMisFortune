class Game {
    constructor(json) {
        this.wheel = new Wheel(json.wheel_segments);
        this.categories = json.categories;
        this.phrase = this._pickPhrase();
    }
    _pickPhrase() {
        return new Phrase(this.categories);
    }
    show() {
        this.wheel.show();
        this.phrase.show();
    }
}