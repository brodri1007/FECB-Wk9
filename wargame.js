const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const Suits = require('./Suits');
const Faces = require('./Card').Faces;
const Player = require('./Player');
const Card = require('./Card').Card;
const Deck = require('./Deck');

// Deck {
//   ctor(cards);
//
//   function draw();
//   function shuffle();
// 
//   function peek();
//   function toString();
// }

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

let deck = new Deck();
let numberOfPlayers = prompt('How any players?');




for (let i = 0; i < deck.length; i++) {

    let player[i] = new Player('Player', playerCards);
}

for (let c = 0; c < (deck.length / numberOfPlayers); c++)
    for (let p = 0; p < numberOfPlayers; p++) {

        deck.splice(0, deck.length / numberOfPlayers);

    }

let player2 = new Player('Player2',)




for (let i = 0; i < deck.length; i++) {
    console.log(deck[i].value + deck[i].suit + deck[i].name);
} 
