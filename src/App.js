const Computer = require('./Computer');
const OutputView = require('./OutputView')
const InputView = require('./InputView');
const Validate = require('./Validate');
const Referee = require('./Referee');
const { Console } = require("@woowacourse/mission-utils");

class App {
  #computerNumbers;

  static #END = {
    condition: '3스트라이크',
    number: 2,
  }

  constructor() {
    OutputView.printStart();
    this.computer = new Computer();
    this.referee = new Referee();
    this.hint;
  }

  play() {
    this.#computerNumbers = this.computer.selectNumber();
    this.inputUserNumber();
  }

  inputUserNumber() {
    InputView.inputUserNumber((numbers) => {
      Validate.validateInputNumbers(numbers);
      const resultArray = this.referee.compare(this.#computerNumbers, numbers);
      this.hint = OutputView.printHint(resultArray);
      this.judgeRepeat();
    })
  }

  judgeRepeat() {
    if(this.hint === App.#END.condition) {
      OutputView.printSuccess();
      this.selectEnd();
      return;
    }
    this.inputUserNumber();
    return;
  }

  selectEnd() {
    InputView.inputEndOrRetry((number) => {
      if(Number(number) === App.#END.number) {
        Console.close();
        return;
      }
      this.play();
    })
  }

}

const app = new App();
app.play();

module.exports = App;
