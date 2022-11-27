const Computer = require('./Computer');
const OutputView = require('./OutputView')

class App {
  constructor() {
    OutputView.printStart();
    this.computer = new Computer();
  }

  play() {
  }
}

const app = new App();
app.play();

module.exports = App;
