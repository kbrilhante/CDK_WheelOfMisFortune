class Game {
    constructor(json) {
        this.wheel = new Wheel(json.wheel_segments);
        this.categories = json.categories;
        this.phrase = this._pickPhrase();
        this.letterButtons = this._createLetterButtons();
    }
    _pickPhrase() {
        return new Phrase(this.categories);
    }
    _createLetterButtons() {
        return new LetterButtons();
    }
    _createPlayerOptions() {
        const options = {
            'spin': 'Spin the wheel',
            'vowel': 'Buy a vowel',
            'guess': 'Guess the word'
        }

    }
    show() {
        // this.wheel.show();
        this.showGameOptionsScreen();
    }
    showGameOptionsScreen() {
        this.phrase.show();
    }
}

