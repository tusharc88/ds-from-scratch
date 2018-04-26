class SudokuSolver {
  constructor() {
    this.grid = {};
  }

  initializeSudoku() {}
  getNextEmptyValue(row, col) {}
  isRowValid(val, row) {}
  isColumnValid(val, col) {}
  isBoxValid(val, row, col) {}

  isValid(val, row, col) {
    return (
      isRowValid(val, row) &&
      isColumnValid(val, col) &&
      isBoxValid(val, row, col)
    );
  }

  solveSudoku(row, col) {
    const emptyCell = getNextEmptyValue(row, col);
    const row = emptyCell[0];
    const col = emptyCell[1];

    // no empty values left, end case
    if (row === -1) {
      return true;
    }

    for (let val = 1; val <= 9; val++) {
      if (isValid(val, row, col)) {
        if (solveSudoku(row, col)) return true;
        this.grid[row][col] = 0;
      }
    }

    return false;
  }
}
