const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const Card = require('./Card').Card;
const Deck = require('./Deck');

// Player {
//   ctor(name, hand);
// 
//   function flip();
//   function add();
//   function drawCardFromDeck();
// 
//   function hand();
//   function toString();
// }

describe('Player', () => {
  describe('#constructor', () => {
    it ('with empty constructor will throw Error', (done) => {
      /* Arrange */
    
      /* Act / Invoke */
     
      /* Assert */   
      expect((done) => {
        let player = new Player();
      }).to.throw(Error);

      done();
    });

    it ('with name sets name property', (done) => {
      /* Arrange */
      let expectedName = 'Player1';
      let cards = [];
      let player = new Player(expectedName, cards)
      /* Act / Invoke */
    
      let actual = player.name.toString();
   
      /* Assert */
      expect(actual).to.equal(expectedName);
    
      done();
    });

    it ('with cards will initialize hand', (done) => {
      /* Arrange */
      
    
      /* Act / Invoke */
    
      /* Assert */
      assert.fail('Not implemented');
    
      done();
    });
  });

  describe('#flip', () => {
    it ('with empty hand should return null', (done) => {
      
      let cards = [];
      let player = new Player(expectedName, cards)
      /* Act / Invoke */
    
      let actual = player.name.toString();
   
      /* Assert */
      expect(actual).to.equal(expectedName);
    
      done();
    });

    // it ('should return first card from the players hand', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //
    //   done();
    // });

    // it ('should remove card from players hand', (done) => {
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
  describe('#add', () => {
    // it ('with null card returns existing hand count', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //
    //   done();
    // });

    // it ('with valid card adds card to hand', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //
    //   done();
    // });

    // it ('with empty hand adds card to hand', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //
    //   done();
    // });
    // it ('with non-Card object/instance doesnt add card to hand', (done) => {
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
  describe('#drawCardFromDeck', () => {
    // it ('with empty deck returns false', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //
    //   done();
    // });

    // it ('with non-Deck object/instance returns false', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //
    //   done();
    // });

    // it ('with valid deck and empty hand adds drawn card to players hand', (done) => {
    //   /* Arrange */
    //
    //   /* Act / Invoke */
    //
    //   /* Assert */
    //   assert.fail('Not implemented');
    //
    //   done();
    // });

    // it ('with valid deck and existing hand adds drawn card to players hand', (done) => {
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
 * Represents a card player.
 */
class Player {
  /**
   * The cards in the players hand.
   */
  // code here, declare private variable. no one should be able to peek at my cards!
  #cards = [];

  /**
   * Creates an instance of the Player class.
   * @param {String} name The name of the player.
   * @param {Card[]} cards The optional list of cards to put into the players hand. If not specified, then player has an empty hand.
   */

  constructor(name, cards) {
  
    if((!name) || (!cards)) {
      throw new Error('Empty names are invalid!');
    }

    this.name = name;
    this.#cards = cards;
  }

  /**
   * Returns the cards currently in the players hand.
   * @returns {Card[]} The cards currently in the players hand.
   */
  hand() {
    /* code here */
      return this.#cards;
  }

  /**
   * Returns the first card in the players hand. Once flipped, the card is removed from the players hand.
   * @returns {Card} The current.
   */
  flip() {
    /* code here */
    let card = this.player.#cards[0];
    this.#cards.pop[card];
    return card;
  }

  /**
   * Adds the specified card to the players hand.
   * @param {Card} card The card to add.
   * @returns {Number} The number of cards in the players hand.
   */
  add(card) {
    this.#cards.push(card);    
    total = this.#cards.length;
    return total;
  }

  /**
   * Draws a card from the deck and adds it to the users hand.
   * @param {Deck} deck The deck to draw the card from.
   * @returns {Boolean} True if a card was drawn, false if otherwise.
   */
   drawCardFromDeck(deck) {
    let draw = deck.pop();
    if(!draw) {
      return false;
    }
    add(draw);
    return true;

  }

  /**
   * Returns the string representation of the object.
   * @returns {String} The string representation of the object
   */
  toString() {
    /* code here */
    return `Player: ${this.player.name} has ${this.#cards.length} cards left to play. `;
  }
}

module.exports = Player;