const Validate = {
  Warning: {
    duplicateValue: "중복된 값이 있습니다. 서로 다른 3자리의 수를 입력해주세요.",
    length: "3자리 수를 입력해주세요.",
  },

  validateInputNumbers(numbers) {
    const DIGITS = 3;
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error(this.Warning.duplicateValue);
    }

    if (numbers.length !== DIGITS) {
      throw new Error(this.Warning.length);
    }
  },
};

module.exports = Validate;
