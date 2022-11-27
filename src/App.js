const Computer = require('./Computer');
const OutputView = require('./OutputView')
const Player = require('./Player');
const Validate = require('./Validate');


class App {
  #computerNumbers;
  constructor() {
    OutputView.printStart();
    this.computer = new Computer();
    this.player = new Player();
    this.#computerNumbers = this.computer.selectNumber();
  }

  play() {
    this.player.inputUserNumber((numbers) => {
      Validate.validateInputNumbers(numbers);
    })
  }
}

const app = new App();
app.play();

module.exports = App;
