export default function concatArrays(array1, array2, string) {
  const results = [...array1, ...array2, ...string];
  return results;
}
