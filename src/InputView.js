const { Console } = require("@woowacourse/mission-utils");

const InputView = {

  MESSAGE: {
    numberInputMessage: '숫자를 입력해주세요 : ',
    endInputSelectMessage: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
  },

  inputUserNumber(callback) {
    Console.readLine(this.MESSAGE.numberInputMessage, callback);
  },

  inputEndOrRetry(callback) {
    Console.readLine(this.MESSAGE.endInputSelectMessage, callback);
  }
}

module.exports = InputView;
