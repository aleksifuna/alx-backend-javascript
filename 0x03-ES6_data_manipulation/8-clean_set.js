export default function cleanSet(set, startString) {
  // returns a string of all set values that start with specific startString
  let result = '';
  if (startString === '') {
    return '';
  }

  for (const elem of set) {
    if (elem.startsWith(startString)) {
      result += `${elem.substring(startString.length)}-`;
    }
  }
  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }
  return result;
}