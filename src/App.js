const Computer = require('./Computer');
class App {
  #computerNumbers;
  constructor() {
    this.computer = new Computer();
    this.#computerNumbers = this.computer.selectNumber();
  }

  play() {
  }
}

const app = new App();
app.play();

module.exports = App;
