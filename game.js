class Game {
    constructor(json) {
        this.wheel = new Wheel(json.wheel_segments);
        this.categories = json.categories;
        this.players = [new Player("Squishy"), new Player("Squeezy"), new Player("Squeaky")];
        this.currentPlayer = undefined;
        this.currentPlayerIndex = floor(random(this.players.length));
        this.turn = 0;
        this.phrase = this._pickPhrase();
        this.letterButtons = undefined;
        this.playerOptionsPanel = undefined;
        this.screen = ''
        this._beginTurn();
    }
    _beginTurn() {
        this.screen = 'playerTurn';
        this.currentPlayer = this.players[this.currentPlayerIndex];
        this.playerOptionsPanel = this._createPlayerOptions();
    }
    _newTurn() {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        this.turn++;
        this._beginTurn();
    }
    _pickPhrase() {
        return new Phrase(this.categories);
    }
    _createLetterButtons() {
        return new LetterButtons();
    }
    _createPlayerOptions() {
        return new PlayerOptionsPanel(this.currentPlayer.getBalance() >= 200);
    }
    show() {
        switch (this.screen) {
            case 'playerTurn':
                this._showPlayerStats();
                this.phrase.show();
                break;
            case 'wheel':
                this.playerOptionsPanel.remove()
                this.wheel.show();
                break;
        }
    }
    _showPlayerStats() {
        let txtSize = 20
        let y = this.playerOptionsPanel.getTopY() - (txtSize + 10);
        let txt = 'Pick an option:';
        // remove this later
        writeText(txt, width / 2, y, txtSize, CENTER);
        y -= 14;
        drawLine(y)
        txtSize = 26;
        y -= txtSize + 10;
        txt = 'Balance: $ ' + this.currentPlayer.getBalance()
        writeText(txt, 10, y, txtSize);
        txtSize = 30;
        y -= txtSize + 10;
        txt = this.currentPlayer.getName() + "'s turn";
        writeText(txt, 10, y, txtSize);
        y -= 14;
        drawLine(y);
    }
    spinWheel() {
        this.screen = 'wheel'
    }
    buyVowel() {
        console.log("Buying vowel")
    }
    guessWord() {
        console.log("I guess it's fart")
    }
    spin() {
        if (this.screen == 'wheel') this.wheel.startSpin();
    }
}

function drawLine(y) {
    push();
    strokeWeight(4);
    stroke('#ffffff');
    line(10, y, width - 10, y);
    pop();
}

function writeText(txt, x, y, txtSize, align=LEFT) {
    push();
    fill('#fffff');
    textAlign(align, TOP);
    textSize(txtSize);
    textFont(FONT);
    text(txt, x, y);
    pop();

}