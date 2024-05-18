
const Suits = ['♠', '♥', '♣', '♦'];
const Faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

class Card {
    /**
     * Creates a new player card.
     * @param {String} suit The suit of the card. Accepted values: '♠', '♥', '♣', '♦'
     * @param {String} face The face or value of the card. Accepted values: 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
     */
    constructor(suit, face) {

        if (Suits.indexOf(suit) < 0) {
            throw new Error(`Invalid suit specified. Valid values are: ${Suits.join(', ')}`);
        }

        if (Faces.indexOf(face) < 0) {
            throw new Error(`Invalid card/face specified. Valid values are: ${Faces.join(', ')}`);
        }
        this.suit = suit;
        this.face = face;
    }

    /**
     * Calculates the value of the specified card.
     * @returns The value of the specified card.
     */
    getValue() {
        switch (this.face) {
            case 'A':
                return 1;
            case 'J':
            case 'Q':
            case 'K':
                return 10;
            default:
                let value = parseInt(this.face, 10);
                if (value) {
                    return value;
                }
                return 0;
        }
    }

    // /**
    //  * Returns the string representation of the object.
    //  * @returns {String} The string representation of the object
    //  */
    // toString() {
    //     /* code here */
    //     return `${this.suit}${this.face}`;
    // }
}

class Deck {
    /**
     * The cards contained in the deck.
     */
    // code here, declare private variable. no one should be able to peek at the deck? cheater!
    deck = [52];
    /**
     * Creates a new instance of Deck.
     * @param {Card[]} cards The optional list of cards to initialize the deck with. Leaving this parameter null will automatically create a standard 52 card desk.
     */
    constructor(cards) {
        this.deck = this.#create();

    }

    /**
     * Create or opens a brand new deck of cards.
     * @returns {Card[]} The freshly unwrapped deck
     */
    #create() {
        this.deck = []
        for (let suit of Suits) {
            for (let face of Faces) {
                this.deck.push(new Card(suit, face));
            }
        }
        return this.deck;
    }


    /**
     * Shuffles the cards in the deck.
     */
    shuffle() {
       
        for(let i = deck['deck'].length -1; i >=0; i-- ) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            const temp = deck['deck'][i];
            deck['deck'][i] = deck['deck'][randomIndex];
            deck['deck'][randomIndex] = temp;
        }
        return deck['deck'];

    }

    // /**
    //  * Allows for the entire desk of cards to be inspected or viewed.
    //  * @returns {Card[]} The current cards contained in the deck.
    //  */
    // peek() {
    //     /* code here */
    //     return this.deck || [];
    // }

    /**
     * Removes the card from the top of the deck. If no cards are available, then null is returned.
     * @returns {Card} The card at the top of the deck, otherwise returns null.
     */
    draw() {
        let cardDrew = '';
        if (!this.deck[0]) {
            cardDrew = [];
        } else {
            cardDrew = this.deck[0];
        }
        return cardDrew;
    }

    /**
     * Returns the string representation of the object.
     * @returns {String} The string representation of the object
     */
    toString() {
        return `The deck has ${this.deck.length} cards.`
    }
}

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
        let card = this.#cards[0];
        this.#cards.pop[card];
        return card.getValue();
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
        if (!draw) {
            return false;
        }
        add(draw);
        return true;
    }

    play() {
        let card = this.#cards.pop();   
        if (!card) {
            return false;
        }     
        return card.getValue();
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

let numberOfPlayers = 2; //readline.question("What is your name?");  

let deck = new Deck();
deck.shuffle();

let player1Cards = deck['deck'].splice(0, deck['deck'].length / numberOfPlayers);
let player2Cards = deck['deck'].splice(0, deck['deck'].length / numberOfPlayers);
let playersPlaying = [];


playersPlaying.push(new Player('Player1', player1Cards));
playersPlaying.push(new Player('Player2', player2Cards));





// The completed project should, when executed, do the following:
// Deal 26 Cards to each Player from a Deck of 52 cards.---
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher cad is awarded a point.
// Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.
// The following is extra credit (10pts)
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.

class Game {
    constructor(players) {
        this.players = players;    
        this.winner = '';
        this.player1TotalPoints = 0;
        this.player1Points = 0;
        this.player2TotalPoints = 0;        
        this.player2Points = 0;
    }
 
 

    playGame (){     
        for (let i = 0; i < 26; i++) {
            let p1 = playersPlaying[0].play();
            let p2 = playersPlaying[1].play();

            if (p1 > p2) {
                this.player1TotalPoints = this.player1TotalPoints + 1;
                if (p1 != false && p2 != false)
                    console.log(`${this.winner = playersPlaying[0].name} won! (${p1} - ${p2})`);
            } else if (p2 > p1) {
                this.player2TotalPoints = this.player2TotalPoints + 1;
                console.log(`${this.winner = playersPlaying[1].name} won! (${p1} - ${p2})`);
            } else if (p2 == p1) {
                this.player2TotalPoints = this.player2TotalPoints + 0;
                this.player1TotalPoints = this.player1TotalPoints + 0;
                console.log(this.winner = "It's a tied");
            }
        }
        if (this.player1TotalPoints > this.player2TotalPoints) {
            console.log('The winner is ' + playersPlaying[0].name);
        } else {
            console.log('The winner is ' + playersPlaying[1].name);
        }
        console.log(this.player1TotalPoints + '/' + this.player2TotalPoints)
        
    }

}



const newGame = new Game(playersPlaying)
newGame.playGame();