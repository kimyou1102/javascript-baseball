const Validate = {
  validateInputNumbers(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error(
        "중복된 값이 있습니다. 서로 다른 3자리의 수를 입력해주세요."
      );
    }

    if (numbers.length !== 3) {
      throw new Error(
        "3자리 수를 입력해주세요."
      );
    }
  },
};

module.exports = Validate;
