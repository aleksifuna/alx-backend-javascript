export default function cleanSet(set, startString) {
  // returns a string of all set values that start with specific startString
  const result = [];
  if (startString === '') {
    return '';
  }

  for (const elem of set) {
    if (elem.startsWith(startString)) {
      result.push(elem.substring(startString.length));
    }
  }
  return result.join('-');
}
