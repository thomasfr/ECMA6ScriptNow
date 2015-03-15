'use strict';

// No Transpiling required for this
// iojs --harmony_classes src/tests/ecma6/

import Piece from 'lib/Piece';
import MasterPiece from 'lib/MasterPiece';

let piece = new Piece();
let masterPiece = new MasterPiece("hallo");

piece.print();
masterPiece.print();

// Expression bodies
let evens = [
  2,
  4,
  6,
  8,
  10,
  12,
  14,
  16,
  18,
  20
];

var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
let fives = [];
// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});

console.log(fives);

// Lexical this
var bob = {
  _name: "Bob",
  _friends: ["Foo", "bar", "Jack"],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};


bob.printFriends();
