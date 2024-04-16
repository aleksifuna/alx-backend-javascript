export default function getStudentIdsSum(objArray) {
  // computes and returns a sum of all object ids
  if (!Array.isArray(objArray)) {
    throw new TypeError('objArray must be an array object');
  }
  const isSum = objArray.reduce((accumilator, currentObj) => accumilator + currentObj.id, 0);
  return isSum;
}
