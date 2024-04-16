export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  // returns an array of students for a specific city with new grades

  const filteredList = studentsList.filter((item) => item.location === city);
  const returnList = filteredList.map((item) => {
    const gradeObj = newGrades.find((data) => data.studentId === item.id);
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...item, grade };
  });
  return returnList;
}
