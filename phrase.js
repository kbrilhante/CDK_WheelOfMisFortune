class Phrase {
    constructor(categoriesArray) {
        const categoryObj = random(categoriesArray)
        this.category = categoryObj.name;
        this.phrase = random(categoryObj.phrases);
        this.panel = new Panel(this.phrase);
    }
    show() {
        this.panel.show();
    }
}

class Panel {
    constructor(phrase) {
        this.phrase = phrase;
        this.blanks = this._getBlanks();
    }
    _getBlanks() {
        push()
        colorMode(HSL, 100)
        const blanks = [];
        const gap = 4;
        for (let i = 0; i < this.phrase.length; i++) {
            const gaps = gap * (this.phrase.length + 1);
            const w = (width - gaps) / this.phrase.length;
            const h = w * 4 / 3;

            blanks.push(new Letter(
                this.phrase[i], 
                gap + (w + gap) * i,
                400, 
                w,
                h,
                color(100 / this.phrase.length * i, SAT, LIGHT)
            ));
        }
        pop()
        return blanks;
    }
    show() {
        for (const blank of this.blanks) {
            blank.show();
        }
    }
}

class Letter {
    constructor(letter, x, y, w, h, color) {
        const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        this.value = letter.toUpperCase();
        this.revealed = !abc.includes(this.value);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }
    show() {
        this.revealed ? fill(255) : fill(this.color);
        push()
        rectMode(CENTER);
        translate(this.x + this.w * 0.5, this.y);
        strokeWeight(2)
        rect(0, 0, this.w, this.h);
        const txt = this.revealed ? this.value : "";
        fill(0);
        textAlign(CENTER, CENTER);
        textFont('Impact');
        textSize(this.h * 0.8)
        text(txt, 0, 0);
        pop()
    }
}