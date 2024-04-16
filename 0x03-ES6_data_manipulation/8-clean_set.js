export default function cleanSet(set, startString) {
  // returns a string of all set values that start with specific startString
  const result = [];
  if (startString === '') {
    return '';
  }

  for (const elem of set) {
    if (elem.startsWith(startString)) {
      const subStr = elem.substring(startString.length);
      if (subStr && subStr !== elem) {
        result.push(subStr);
      }
    }
  }
  return result.join('-');
}
