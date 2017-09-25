class TicTacToe {
  constructor() {
    this.state = {
      symbol:     'x',
      isFinished: false,
      noTurns:    false,
      winner:     false,
      draw:       false,
      symWin:     null,
      field:      [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ]
    }
  }

  getCurrentPlayerSymbol() {
    return this.state.symbol;
  }

  nextTurn(rowIndex, columnIndex) {
    let sym = this.state.symbol;
    let pos = this.state.field[rowIndex][columnIndex];
    if (!pos) {
      if (sym === 'x') {
        this.state.symbol = 'o';
      } else this.state.symbol = 'x';
      this.state.field[rowIndex][columnIndex] = sym;
      this.checkWin(sym);
      this.noMoreTurns();
    }
  }

  isFinished() {
    return this.state.isFinished;
  }

  getWinner() {
    return this.state.winner ? this.state.symWin : null;
  }

  noMoreTurns() {
    let field = this.state.field;
    for (let i = 0; i < field.length; i++) {
      for (let j = 0; j < field[i].length; j++) {
        if (field[i][j] === null) {
          return false;
        }
      }
    }
    this.state.isFinished = true;
    return true;
  }

  isDraw() {
    return (this.state.isFinished && !this.state.winner);
  }

  getFieldValue(rowIndex, colIndex) {
    let value = this.state.field[rowIndex][colIndex];
    return value === null ? null : value;
  }

  checkWin(sym) {
    let fld = this.state.field;
    if (fld[0][0] === sym && fld[0][1] === sym && fld[0][2] === sym ||
      fld[1][0] === sym && fld[1][1] === sym && fld[1][2] === sym ||
      fld[2][0] === sym && fld[2][1] === sym && fld[2][2] === sym ||
      fld[0][0] === sym && fld[1][0] === sym && fld[2][0] === sym ||
      fld[0][1] === sym && fld[1][1] === sym && fld[2][1] === sym ||
      fld[0][2] === sym && fld[1][2] === sym && fld[2][2] === sym ||
      fld[0][0] === sym && fld[1][1] === sym && fld[2][2] === sym ||
      fld[0][2] === sym && fld[1][1] === sym && fld[2][0] === sym) {
      this.state.symWin = sym;
      this.state.isFinished = true;
      this.state.winner = true;
    }
  }
}

module.exports = TicTacToe;
