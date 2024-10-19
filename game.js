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
        return new LetterButtons(this.phrase.getBottom());
    }
    show() {
        // this.wheel.show();
        this.showGameOptionsScreen();
    }

    showGameOptionsScreen() {
        this.phrase.show();

    }
}

class LetterButtons {
    constructor(top) {
        this.buttons = this._createButtons(top);
    }
    _createButtons(top) {
        const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        const rows = 3;
        const cols = ceil(abc.length / rows);
        const gap = 6;
        const w = (width - gap * (cols + 1)) / cols;
        console.log(w)
        const h = w;
        const buttons = [];
        top += 40;
        let index = 0;
        for (let i = 0; i < rows; i++) {
            let y = top + (i * (h + gap));
            let mod, skip;
            let last = cols;
            if (i == rows - 1) {
                mod = abc.length % rows;
                skip = (rows - mod) / 2;
                if (mod) last -= ceil(skip)
            }
            for (let j = 0; j < last; j++) {
                if (i == rows - 1 && j == 0 && mod) {
                    j += floor(skip);
                }
                let x = gap + (j * (w + gap));
                const letter = abc[index];
                index++;
                buttons.push(new LetterButton(
                    x, 
                    y,
                    w,
                    h,
                    letter
                ))
            }
        }
    }
}

class LetterButton {
    constructor(x, y, w, h, val) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.val = val;
        this.button = this.create();
    }
    create() {
        const btn = createButton(this.val);
        btn.position(this.x, this.y);
        btn.mousePressed(this.pressed);
        btn.size(this.w, this.h);
        btn.addClass("btn");
        return btn;
    }
    pressed() {
        console.log(this);
    }
}