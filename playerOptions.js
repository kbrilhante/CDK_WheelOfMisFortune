class PlayerOptionsPanel {
    constructor() {
        this.buttons = [];
        this.createButtons();
    }
    createButtons() {
        const options = {
            'spin': 'Spin the wheel',
            'vowel': 'Buy a vowel',
            'guess': 'Guess the word'
        };
        const keys = Object.keys(options);
        const gap = 6;
        const w = width - gap * 2;
        const h = 40;
        for (let i = 1; i <= keys.length; i++) {
            const key = keys[keys.length - i]
            const y = height - (h + gap) * i
            const btn = createButton(options[key]);
            btn.size(w, h);
            btn.position(gap, y);
            btn.addClass('btn');
            btn.value = key;
            btn.attribute('value', key);
            btn.mousePressed(this.pressed);
            this.buttons.push(btn);
        }
    }
    removeButtons() {
        for (const btn of this.buttons) {
            btn.remove();
        }
    }
    pressed(e) {
        console.log(e.target.value)
    }
}