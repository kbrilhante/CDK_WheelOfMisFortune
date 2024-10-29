class Player {
    constructor(name) {
        this._name = name;
        this._balance = 1000;
        this._totalBalance = 0;
    }
    getName() {
        return this._name;
    }
    getBalance() {
        return this._balance;
    }
    getTotalBalance() {
        return this._totalBalance;
    }
}