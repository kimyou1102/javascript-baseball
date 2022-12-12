const Validate = {
  Warning: {
    duplicateValue: "중복된 값이 있습니다. 서로 다른 3자리의 수를 입력해주세요.",
    length: "3자리 수를 입력해주세요.",
    range: "각 자릿수에 1이상의 숫자를 입력해주세요.",
    onlyNumber: "숫자만 입력할 수 있습니다. 각 자릿수에 1에서9사이의 값을 입력해주세요."
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

    if(numbers.includes(0)) {
      throw new Error(this.Warning.range);
    }

    numbers.split('').forEach((number) => {
      if(isNaN(Number(number)) || number === " ") {        
        throw new Error(this.Warning.onlyNumber);
      }
    })
  },
};

module.exports = Validate;
