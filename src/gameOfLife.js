export default class gameOfLife {

  constructor(inputBoard, table, nextButton, playButton, stopButton) {
    this.inputBoard = inputBoard;
    this.nextButton = nextButton;
    this.playButton = playButton;
    this.stopButton = stopButton;
    this.table = table;
    this.interval = null;

    this.nextButton.addEventListener('click', this.getNextStateBoard.bind(this));
    this.playButton.addEventListener('click', this.startAutoplay.bind(this));
    this.stopButton.addEventListener('click', this.stopAutoplay.bind(this));
  }

  renderBoard(){
    var rows = [];
    for (let i = 0; i < this.inputBoard.length; i++) {
      rows.push('<tr>');
      for (let j = 0; j < this.inputBoard[i].length; j++) {
        var status = '';
        if(this.inputBoard[i][j] == '1'){
          var status = 'alive';
        }
        rows.push('<td class="'+status+'">&nbsp;</td>');
      }
      rows.push('</tr>');
    }
		rows = rows.join('');
		this.table.innerHTML = rows;
  }

  getNextStateBoard() {
    const newBoard = [];
    for (let i = 0; i < this.inputBoard.length; i++) {
      newBoard[i] = [];
      for (let j = 0; j < this.inputBoard[i].length; j++) {
        let liveNeighbour = this.countLiveNeighbour(this.inputBoard, i, j);
        if (this.inputBoard[i][j] == '1' && liveNeighbour < 2) {
          newBoard[i][j] = '0';
        } else if (this.inputBoard[i][j] === '1' && (liveNeighbour === 2 || liveNeighbour === 3)) {
          newBoard[i][j] = '1';
        } else if (this.inputBoard[i][j] === '1' && liveNeighbour > 3) {
          newBoard[i][j] = '0';
        } else if (this.inputBoard[i][j] === '0' && liveNeighbour === 3) {
          newBoard[i][j] = '1';
        } else {
          newBoard[i][j] = '0';
        }
      }
    }
    this.inputBoard = newBoard;
    this.renderBoard();
  }

  startAutoplay(){
    var _this = this;
    this.interval = setInterval(function(){
      _this.getNextStateBoard();
    }, 500);
    this.playButton.setAttribute('disabled', true);
    this.stopButton.removeAttribute('disabled');
  }

  stopAutoplay(){
    clearInterval(this.interval);
    this.stopButton.setAttribute('disabled', true);
    this.playButton.removeAttribute('disabled');
  }

  countLiveNeighbour(board, x, y) {
    let count = 0;
    for (let i = x - 1; i <= x + 1; i++) {
      if (i < 0 || i > board.length - 1) {
        continue;
      }
      for (let j = y - 1; j <= y + 1; j++) {
        if (j < 0 || j > board[i].length - 1) {
          continue;
        }
        if (board[i][j] === '1' && !(y === j && x === i)) {
          count++;
        }
      }
    }
    return count;
  }
}
