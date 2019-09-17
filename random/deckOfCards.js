/*
write functions that:
1. create a deck of 52 cards
2. shuffles deck (whether full or not)
3. draws from top of deck
*/

class Deck {
  constructor() {
    this.deck = [];
    this.reset();
    this.shuffle();
  }

  reset() {
    this.deck = [];

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }

  shuffle() {
    const { deck } = this;
    let len = deck.length;
    let i;

    while (len) {
      i = Math.floor(Math.random() * len--);

      [deck[len], deck[i]] = [deck[i], deck[len]];
    }

    return this;
  }

  deal() {
    return this.deck.pop();
  }
}

const deck1 = new Deck();
console.log(deck1.deck);
deck1.deal();
console.log(deck1.deck);
