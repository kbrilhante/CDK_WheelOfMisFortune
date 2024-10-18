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
