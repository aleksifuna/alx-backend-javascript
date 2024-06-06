// accepts three arguments round them then return the calculation based on type

function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    if (b === 0) {
      return 'Error';
    }
    return Math.round(a) / Math.round(b);
  }
  return 'Error';
}

module.exports = calculateNumber;
