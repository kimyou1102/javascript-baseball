const Computer = require('./Computer');
const OutputView = require('./OutputView')
const Player = require('./Player');
const Validate = require('./Validate');
const Referee = require('./Referee');

class App {
  #computerNumbers;
  constructor() {
    OutputView.printStart();
    this.computer = new Computer();
    this.player = new Player();
    this.referee = new Referee();
    this.#computerNumbers = this.computer.selectNumber();
    this.hint;
  }

  play() {
    this.inputUserNumber();
  }

  inputUserNumber() {
    this.player.inputUserNumber((numbers) => {
      Validate.validateInputNumbers(numbers);
      const resultArray = this.referee.compare(this.#computerNumbers, numbers);
      this.hint = OutputView.printHint(resultArray);
      this.judgeRepeat();
      console.log(this.#computerNumbers);
    })
  }

  judgeRepeat() {
    if(this.hint === '3스트라이크') {
      OutputView.printSuccess();
      this.selectEnd();
      return;
    }
    this.inputUserNumber();
    return;
  }

  selectEnd() {
  }

}

const app = new App();
app.play();

module.exports = App;
