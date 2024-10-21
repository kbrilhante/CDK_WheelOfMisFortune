class LetterButton {
    constructor(x, y, w, h, val, disabled) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.disabled = disabled;
        this.button = this.create(val);
    }
    create(val) {
        const btn = createButton(val);
        btn.position(this.x, this.y);
        btn.mousePressed(this.pressed);
        btn.size(this.w, this.h);
        btn.addClass("btn");
        if (this.disabled) btn.attribute('disabled', true);
        btn.value = val;
        return btn;
    }
    pressed() {
        // removeElements()
        console.log(this);
    }
}