class ATM {
  constructor(balance){
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
  constructor(balance){
    this.balance = balance;
    this.isValid = true;
  }
}

describe("ATM", ()=>{

  describe("Withdrawing cash", ()=>{
    
    describe("Account has sufficient funds", ()=>{
      
      it ("should withdraw the cash and return the card", ()=>{
        //GIVEN
        let atm;
        let card;
        card = new Card(100);
        atm = new ATM();
        atm.balance = 10000;
        atm.insertCard(card);

        //WHEN
        var cash = atm.withdraw(20);

        //THEN
        expect(cash).toBe(20);
        expect(card.balance).toBe(80);
        expect(atm.card).toBe(undefined);
        expect(atm.balance).toBe(9980);
      });
    });
  });
});