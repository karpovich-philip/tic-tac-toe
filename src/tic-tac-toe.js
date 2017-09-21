class TicTacToe {
  constructor() {

    this.state = {
      symbol:     'x',
      isFinished: false,
      noTurns:    false,
      winner:     false,
      draw:       false,
      symWin:     '',
      field:      [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]
    }
  }

  getCurrentPlayerSymbol() {
    return this.state.symbol;
  }

  nextTurn(rowIndex, columnIndex) {
    var sym = this.state.symbol;
    var pos = this.state.field[rowIndex][columnIndex];

    if (pos === 'x' || pos === 'o') {
      return
    }

    if (this.state.symbol === 'x') {
      this.state.symbol = 'o';
    } else this.state.symbol = 'x'

    this.state.field[rowIndex][columnIndex] = sym;

    this.checkWin(sym);
    this.noMoreTurns();
  }

  isFinished() {
    return this.state.isFinished ? this.state.isFinished : false
  }

  getWinner() {
    return this.state.winner ? this.state.symWin : null
  }

  noMoreTurns() {
    for (var i = 0; i < this.state.field.length; i++) {
      for (var j = 0; j < this.state.field[i].length; j++) {
        if (this.state.field[i][j] === '') {
          this.state.noTurns = false;
          return false;
        }
      }
    }
    this.state.noTurns = true;
    this.state.isFinished = true;
    return true;
  }

  isDraw() {
    if (this.state.isFinished === false) {
      this.state.draw = false;
      return false
    } else if (this.state.winner === true) {
      this.state.draw = false;
      return false
    }
    return true
  }

  getFieldValue(rowIndex, colIndex) {
    var value = this.state.field[rowIndex][colIndex];
    return value === "" ? null : value
  }

  checkWin(sym) {
    if (this.state.field[0][0] === sym && this.state.field[0][1] === sym && this.state.field[0][2] === sym) {
      this.state.symWin = sym;
      this.state.isFinished = true;
      this.state.winner = true;
      return
    } else if (this.state.field[1][0] === sym && this.state.field[1][1] === sym && this.state.field[1][2] === sym) {
      this.state.symWin = sym;
      this.state.isFinished = true;
      this.state.winner = true;
      return
    } else if (this.state.field[2][0] === sym && this.state.field[2][1] === sym && this.state.field[2][2] === sym) {
      this.state.symWin = sym;
      this.state.isFinished = true;
      this.state.winner = true;
      return
    }

    if (this.state.field[0][0] === sym && this.state.field[1][0] === sym && this.state.field[2][0] === sym) {
      this.state.symWin = sym;
      this.state.isFinished = true;
      this.state.winner = true;
      return
    } else if (this.state.field[0][1] === sym && this.state.field[1][1] === sym && this.state.field[2][1] === sym) {
      this.state.symWin = sym;
      this.state.isFinished = true;
      this.state.winner = true;
      return
    } else if (this.state.field[0][2] === sym && this.state.field[1][2] === sym && this.state.field[2][2] === sym) {
      this.state.symWin = sym;
      this.state.isFinished = true;
      this.state.winner = true;
      return
    }

    if (this.state.field[0][0] === sym && this.state.field[1][1] === sym && this.state.field[2][2] === sym) {
      this.state.symWin = sym;
      this.state.isFinished = true;
      this.state.winner = true;
    } else if (this.state.field[0][2] === sym && this.state.field[1][1] === sym && this.state.field[2][0] === sym) {
      this.state.symWin = sym;
      this.state.isFinished = true;
      this.state.winner = true;
    }
  }
}

module.exports = TicTacToe;
