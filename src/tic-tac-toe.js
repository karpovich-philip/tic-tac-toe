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

    sym === 'x' ? this.state.symbol = 'o' : this.state.symbol = 'x'

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
          return false;
        }
      }
    }
    this.state.isFinished = true;
    return true;
  }

  isDraw() {
    return (this.state.isFinished === true && this.state.winner !== true)
  }

  getFieldValue(rowIndex, colIndex) {
    var value = this.state.field[rowIndex][colIndex];
    return value === "" ? null : value
  }

  checkWin(sym) {
    var fld = this.state.field;

    if (fld[0][0]===sym && fld[0][1]===sym && fld[0][2]===sym ||
      fld[1][0]===sym && fld[1][1]===sym && fld[1][2]===sym ||
      fld[2][0]===sym && fld[2][1]===sym && fld[2][2]===sym ||
      fld[0][0]===sym && fld[1][0]===sym && fld[2][0]===sym ||
      fld[0][1]===sym && fld[1][1]===sym && fld[2][1]===sym ||
      fld[0][2]===sym && fld[1][2]===sym && fld[2][2]===sym ||
      fld[0][0]===sym && fld[1][1]===sym && fld[2][2]===sym ||
      fld[0][2]===sym && fld[1][1]===sym && fld[2][0]===sym) {
      this.state.symWin = sym;
      this.state.isFinished = true;
      this.state.winner = true;
    }
  }
}

module.exports = TicTacToe;
