const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
  },

  printHint(hintObj) {
    const result = [];
    const { ball, strike } = hintObj;
;
    if (ball + strike === 0) {
      Console.print('낫싱');
      return "낫싱";
    }

    if (ball > 0) result.push(`${ball}볼`);
    if (strike > 0) result.push(`${strike}스트라이크`);

    Console.print(result.join(" "));
    return result.join(" ");
  },

  printSuccess() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  },

  printSelect() {
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
  },
};

module.exports = OutputView;
