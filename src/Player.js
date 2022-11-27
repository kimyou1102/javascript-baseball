const { Console } = require("@woowacourse/mission-utils");

class Player {
  inputUserNumber(callback) {
    Console.readLine("숫자를 입력해주세요 : ", callback);
  }
}

module.exports = Player;
