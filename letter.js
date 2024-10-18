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