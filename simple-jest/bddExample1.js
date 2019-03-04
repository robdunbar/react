class ATM {
    constructor(balance) {
        this.balance = balance;
    }

    insertCard(card) {
        this.card = card;
    }

    withdraw(amount) {
        this.balance -= amount;
        this.card.balance -= amount;
        this.card = undefined;
        return amount;
    }
}

class Card {
    constructor(balance) {
        this.balance = balance;
        this.isValid = true;
    }
}

module.exports = {
    Card: Card,
    ATM: ATM
}