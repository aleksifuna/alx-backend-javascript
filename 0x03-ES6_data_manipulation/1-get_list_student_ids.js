export default function getListStudentIds(arrayObject) {
  // returns an array of ids from a list of objects.

  if (!Array.isArray(arrayObject)) {
    return [];
  }
  const idArray = arrayObject.map((item) => item.id);
  return idArray;
}
