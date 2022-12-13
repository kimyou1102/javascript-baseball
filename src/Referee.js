class Referee {
  compare(computerNumbers, userNumbers) {
    const matchCount = computerNumbers.filter(computerNumber => userNumbers.includes(computerNumber)).length;
    const strike = computerNumbers.filter((computerNumber, index) => computerNumber === Number(userNumbers[index])).length;
    const ball = matchCount - strike;
    let nothing = false;
    if(ball === 0 && strike === 0) {
      nothing = true;
    }
    return {ball: ball, strike: strike, nothing: nothing};
  }
}

module.exports = Referee;
