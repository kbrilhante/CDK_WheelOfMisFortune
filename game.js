class Game {
    constructor(json) {
        this.wheel = new Wheel(json.wheel_segments);
        this.categories = json.categories;
        this.phrase = this._pickPhrase();
        this.letterButtons = this._createLetterButtons();
        this.playerOptionsPanel = this._createPlayerOptions();
    }
    _pickPhrase() {
        return new Phrase(this.categories);
    }
    _createLetterButtons() {
        return new LetterButtons();
    }
    _createPlayerOptions() {
        return new PlayerOptionsPanel();
    }
    show() {
        // this.wheel.show();
        this.showGameOptionsScreen();
    }
    showGameOptionsScreen() {
        this.phrase.show();
    }
}

