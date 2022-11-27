class Referee {
  compare(computerNumbers, userNumbers) {
    const matchCount = computerNumbers.filter(computerNumber => userNumbers.includes(computerNumber)).length;
    const ball = computerNumbers.filter((computerNumber, index) => computerNumber === Number(userNumbers[index])).length;
    const strike = matchCount - ball;
    return {ball: ball, strike: strike};
  }
}

module.exports = Referee;
