export default function getStudentsByLocation(objArray, city) {
  // returns an array of objects who are located in a specific city

  if (!Array.isArray(objArray)) {
    return [];
  }
  const filterdArray = objArray.filter((item) => item.location === city);
  return filterdArray;
}
