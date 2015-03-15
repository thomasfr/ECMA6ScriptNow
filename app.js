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

const odds = evens.map(v => v + 1);
const nums = evens.map((v, i) => v + i);
let fives = [];
// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});

console.log(`Odds: ${odds}`);
console.log(`Nums: ${nums}`);
console.log("This also works now %j", fives);

// Lexical this
let bob = {
  _name: "Bob",
  _friends: [
    "Foo",
    "Bar",
    "Jack"
  ],
  printFriends() {
    this._friends.forEach(f =>
      console.log(`${this._name} knows ${f}`));
  }
};
bob.printFriends();


// User code of Array subclass
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }

  getSecond() {
    return this[1];
  }
}

let arr = new MyArray();
arr.push("foo");
arr.push(12);
console.log(arr.length == 2);
console.log(arr.getSecond());
console.log(arr instanceof MyArray); // true
console.log(arr instanceof Array); // true WAAT
