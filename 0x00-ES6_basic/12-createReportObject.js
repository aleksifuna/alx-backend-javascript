export default function createReportObject(employeesList) {
  const employeeObject = {
    allEmployees: employeesList,
    getNumberOfDepartments(dictObj) {
      return Object.keys(dictObj).length;
    },
  };
  return employeeObject;
}
