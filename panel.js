class Panel {
    constructor(phrase) {
        this.yPos = 100;
        this.height = 0;
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
                this.yPos, 
                w,
                h,
                color(100 / this.phrase.length * i, SAT, LIGHT)
            ));
        }
        this.height = blanks[0].h;
        pop()
        return blanks;
    }
    show() {
        for (const blank of this.blanks) {
            blank.show();
        }
    }
}