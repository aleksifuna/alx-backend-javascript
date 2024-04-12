export default function createIteratorObject(report) {
  // returns an iterator to go through every employee in every department
  const returnList = [];
  const employees = report.allEmployees;
  Object.keys(employees).forEach((key) => returnList.push(...employees[key]));

  return returnList;
}
