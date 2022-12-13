const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  MESSAGE: {
    startGame: '숫자 야구 게임을 시작합니다.',
    successGame: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    selectGameEnd: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  },

  UNIT: {
    ball: '볼',
    strike: '스트라이크',
    allWrong: '낫싱'
  },

  printStart() {
    Console.print(this.MESSAGE.startGame);
  },

  printHint(result) {
    let hint = '';
    const { ball, strike, nothing } = result;

    if(nothing) {
      Console.print(this.UNIT.allWrong);
      return;
    }

    if(ball > 0) hint += `${ball}${this.UNIT.ball} `;
    if(strike > 0) hint += `${strike}${this.UNIT.strike}`;

    Console.print(hint.trim());
  },

  printSuccess() {
    Console.print(this.MESSAGE.successGame);
  },

  printSelect() {
    Console.print(this.MESSAGE.selectGameEnd);
  },
};

module.exports = OutputView;
