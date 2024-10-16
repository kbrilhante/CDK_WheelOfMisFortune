class Phrase {
    constructor(categoriesArray) {
        const categoryObj = random(categoriesArray)
        this.category = categoryObj.name;
        this.phrase = random(categoryObj.phrases);
        this.panel = new Panel(this.phrase);
    }
    show() {
        this.panel.show();
        const catH = this.panel.getBottom() + 20;
        push();
        fill(255);
        textSize(40);
        textFont('Impact');
        textAlign(CENTER, TOP);
        text('Category: ' + this.category, width * 0.5, catH);
        pop();
    }
}
