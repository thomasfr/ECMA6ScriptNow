'use strict';

import Piece from './Piece';

export default class MasterPiece extends Piece {
  constructor(bar) {
    super();
    this.bar = bar.toString();
    this.foo = `Hi
multiline yay.
got arg: ${this.bar}`;
  }
}
