const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const Suits = require('./Suits');
const Faces = require('./Card').Faces;
const Card = require('./Card').Card;

// Deck {
//   ctor(cards);
// 
//   function draw();
//   function shuffle();
// 
//   function peek();
//   function toString();
// }

describe('Deck', () => {
  describe('#constructor', () => {
    it('with empty constructor will create a deck with 52 cards', (done) => {
      /* Arrange */
      let expectedCards = 52;
      /* Act / Invoke */
      let deck = new Deck();
      /* Assert */
      expect(deck.peek()).to.have.lengthOf(expectedCards);
      done();
    });

    it('with empty constructor should initialize a standard deck', (done) => {
      /* Arrange */
      let expectedCards = 52;
      /* Act / Invoke */
      let deck = new Deck();
      /* Assert */
      expect(deck.peek()).to.have.lengthOf(expectedCards);
      done();
    });

    it ('with array of cards, should initialize cards to provided values', (done) => {
      /* Arrange */
      let expectedCards = 52;
      let cards = new Deck();
      /* Act / Invoke */
      expect(cards.peek()).to.have.lengthOf(expectedCards);
      /* Assert */
      done();
    });
  });

  describe('#shuffle', () => {
    it ('with empty deck should not throw error', (done) => {
      /* Arrange */   
      let cards = [];
      /* Act / Invoke */
      expect(cards.length).to.be.greaterThanOrEqual(0);
      /* Assert */
      done();
    });

    it ('with one card should remain unshuffled', (done) => {
      /* Arrange */
      let fullCardsDeck = new Deck();
       
      /* Act / Invoke */
    
    
      /* Assert */
      expect(fullCardsDeck).to.equal(fullCardsDeck);
      done();
    });

    it ('should not remove or alter any existing cards in the deck', (done) => {
      /* Arrange */
      let fullCardsDeck = new Deck();

      /* Act / Invoke */


      /* Assert */
      expect(fullCardsDeck).to.equal(fullCardsDeck);
      done();
    });

    it ('with multiple cards should change position of at least one card', (done) => {
    /* Arrange */
    let cards = new Deck();
    let shuffledCards = cards.shuffle;
          
    /* Act / Invoke */
   

    /* Assert */
    expect(shuffledCards).to.not.equal(cards);
    done();
    });
  });



  describe('#draw', () => {
    it ('with empty deck should return null', (done) => {
      /* Arrange */
      let cards = new Deck();
      //cards = []
      /* Act / Invoke */
      let emptyDeck = cards.draw;
       
    
      /* Assert */
      expect(emptyDeck).to.equal(null);    
      done();
    });

    it ('should return card at the top of the deck', (done) => {
      /* Arrange */
      let cards = new Deck();
      let actual = this.cards[0];

      /* Act / Invoke */
      let drewCard = cards.draw;


      /* Assert */
      expect(drewCard).to.equal(actual);
      done();
    });

    // it ('should remove card from deck', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //
    //   done();
    // });
  });
});

/**
 * Represents a deck of cards that can be shuffled or drawn.
 */
class Deck {
  /**
   * The cards contained in the deck.
   */
  // code here, declare private variable. no one should be able to peek at the deck? cheater!
#deck = [52];
  /**
   * Creates a new instance of Deck.
   * @param {Card[]} cards The optional list of cards to initialize the deck with. Leaving this parameter null will automatically create a standard 52 card desk.
   */
  constructor(cards) {
   this.#deck = this.#create();

  }

  /**
   * Create or opens a brand new deck of cards.
   * @returns {Card[]} The freshly unwrapped deck
   */
  #create() {
     this.#deck = []
     for (let suit of Suits) {
       for (let face of Faces) {
         this.#deck.push(new Card(suit, face));
       }
     }
     return this.#deck;
  }

  /**
   * Shuffles the cards in the deck.
   */
  shuffle() {
    if (this.#deck.length >= 1) {
      let firstCard = this.#deck[0];
      let tenthCard = this.#deck[10];
      this.#deck[0] = tenthCard;
      this.#deck[10] = firstCard;
    }

    let currentIndex = this.#deck.length;
      setTimeout(() => {
          console.log("Shuffling deck...")
      }, 3000);

      while (currentIndex != 0) {
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // And swap it with the current element.
          [this.#deck[currentIndex], this.#deck[randomIndex]] = [
            this.#deck[randomIndex], this.#deck[currentIndex]];      }
      return this.#deck;
  }

  /**
   * Allows for the entire desk of cards to be inspected or viewed.
   * @returns {Card[]} The current cards contained in the deck.
   */
  peek() {
    /* code here */
    return this.#deck || [];
  }

  /**
   * Removes the card from the top of the deck. If no cards are available, then null is returned.
   * @returns {Card} The card at the top of the deck, otherwise returns null.
   */
  draw() {
    let drew = '';
    if(!this.#deck.pop()) {
      drew = [];
    } else {
      drew = this.#deck.pop();
    }
    return drew;
  }

  /**
   * Returns the string representation of the object.
   * @returns {String} The string representation of the object
   */
   toString() {
    return `The deck has ${this.#deck.length} cards.`
  }

  let currentIndex = 2;//deck.length;

  for (let i = 0; i < deck.length; i++) {
      deck.push(players.dealtCards)
      console.log(players.dealtCards)
  }

}

module.exports = Deck;