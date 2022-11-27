const Referee = require('../src/Referee');
const OutputView = require('../src/OutputView');

describe("테스트", () => {
  test("사용자 입력값과 컴퓨터 값 비교 테스트", () => {
    expect(new Referee().compare([7,1,3], '173')).toEqual({ball: 1, strike: 2});
  });

  test("힌트 출력 테스트", () => {

    expect(OutputView.printHint({ ball: 0, strike: 2 })).toEqual('2스트라이크');
  });
});
