class Referee {
  compare(computerNumbers, userNumbers) {
    const matchCount = computerNumbers.filter(computerNumber => userNumbers.includes(computerNumber)).length;
    const strike = computerNumbers.filter((computerNumber, index) => computerNumber === Number(userNumbers[index])).length;
    const ball = matchCount - strike;
    return {ball: ball, strike: strike};
  }
}

module.exports = Referee;
