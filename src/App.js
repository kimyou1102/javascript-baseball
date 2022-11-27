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
  }

  play() {
    this.player.inputUserNumber((numbers) => {
      Validate.validateInputNumbers(numbers);
      const resultArray = this.referee.compare(this.#computerNumbers, numbers);
    })
  }
}

const app = new App();
app.play();

module.exports = App;
