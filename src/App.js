const Computer = require('./Computer');
const OutputView = require('./OutputView')
const InputView = require('./InputView');
const Validate = require('./Validate');
const Referee = require('./Referee');
const { Console } = require("@woowacourse/mission-utils");

class App {
  #computerNumbers;

  static #END = {
    condition: 3,
    number: 2,
  }

  constructor() {
    OutputView.printStart();
    this.computer = new Computer();
    this.referee = new Referee();
  }

  play() {
    this.#computerNumbers = this.computer.selectNumber();
    this.inputUserNumber();
  }

  inputUserNumber() {
    InputView.inputUserNumber((numbers) => {
      Validate.validateInputNumbers(numbers);
      this.compareValue(numbers);
    })
  }

  compareValue(numbers) {
    const resultArray = this.referee.compare(this.#computerNumbers, numbers);
    OutputView.printHint(resultArray);
    this.judgeRepeat(resultArray.strike);
  }

  judgeRepeat(strike) {
    if(strike === App.#END.condition) {
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
