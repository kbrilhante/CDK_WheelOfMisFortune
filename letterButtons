class LetterButtons {
    constructor() {
        this.availableLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        this.buttons = this.createButtons();
    }
    createButtons() {
        const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        const rows = 2;
        const cols = ceil(abc.length / rows);
        const gap = 6;
        const w = (width - gap * (cols + 1)) / cols;
        const h = w;
        const buttons = [];
        const top = width - (h + gap) * rows;
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
                const disabled = !this.availableLetters.includes(letter)
                index++;
                buttons.push(new LetterButton(
                    x, 
                    y,
                    w,
                    h,
                    letter,
                    disabled
                ));
            }
        }
    }
    pickLetter(letter) {
        const index = this.availableLetters.indexOf(letter);
        this.availableLetters.splice(index, 1);
        console.log(this.availableLetters);
    }
}