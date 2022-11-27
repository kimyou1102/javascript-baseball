const Referee = require('../src/Referee');

describe("테스트", () => {
  test("사용자 입력값과 컴퓨터 값 비교 테스트", () => {
    const input = "1,2";

    expect(new Referee().compare([7,1,3], '173')).toEqual({ball: 1, strike: 2});
  });
});
