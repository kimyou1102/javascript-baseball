const Referee = require('../src/Referee');
const Validate = require('../src/Validate');

describe("테스트", () => {
  test("사용자 입력값과 컴퓨터 값 비교 테스트 - 낫싱", () => {
    expect(new Referee().compare([1,3,5], '246')).toEqual({ball: 0, strike: 0, nothing:true});
  });

  test("사용자 입력값과 컴퓨터 값 비교 테스트 - 3스트라이크", () => {
    expect(new Referee().compare([1,3,5], '135')).toEqual({ball: 0, strike: 3, nothing:false});
  });

  test("사용자 입력값과 컴퓨터 값 비교 테스트 - 2볼 1스트라이크", () => {
    expect(new Referee().compare([1,3,5], '153')).toEqual({ball: 2, strike: 1, nothing:false});
  });

  test.each([["12"], ["1234"], ["1"]])("3자리 숫자를 입력하지 않은 경우에 대한 예외처리", (input) => {
    expect(() => {
      Validate.validateInputNumbers(input)
    }).toThrow();
  });

  test.each([["122"], ["112"], ["333"]])("중복된 숫자를 입력한 경우에 대한 예외처리", (input) => {
    expect(() => {
      Validate.validateInputNumbers(input)
    }).toThrow();
  });

  test.each([["012"], ["000"], ["190"]])("입력한 숫자의 범위가 틀린 경우에 대한 예외처리", (input) => {
    expect(() => {
      Validate.validateInputNumbers(input)
    }).toThrow();
  });

  test.each([["2ㅇp"], ["12 "], ["   "]])("숫자가 아닌 값을 입력한 경우에 대한 예외처리", (input) => {
    expect(() => {
      Validate.validateInputNumbers(input)
    }).toThrow();
  });


});
