const { Random } = require("@woowacourse/mission-utils");

class Computer {
  static #RANGE = {
    min: 1,
    max: 9,
    digits: 3
  }

  selectNumber() {
    const computer = [];
    while (computer.length < Computer.#RANGE.digits) {
      const number = Random.pickNumberInRange(Computer.#RANGE.min, Computer.#RANGE.max);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

module.exports = Computer;
