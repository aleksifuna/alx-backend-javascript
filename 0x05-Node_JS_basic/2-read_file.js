/**
 * countStudents - counts the number of students in various fields and group them
 * @file: csv database file
 */

const fs = require('fs');

function countStudents(file) {
  if (!fs.existsSync(file)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(file).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(file, 'utf-8')
    .trim()
    .split('\n');
  const fields = {};
  const csvHeader = fileLines[0].split(',');
  const studentHeader = csvHeader.slice(0, csvHeader.length - 1);
  for (const row of fileLines.slice(1)) {
    const studentRecord = row.split(',');
    const studentPropeties = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(fields).includes(field)) {
      fields[field] = [];
    }
    const studentEntry = studentHeader
      .map((fieldName, idx) => [fieldName, studentPropeties[idx]]);
    fields[field].push(Object.fromEntries(studentEntry));
  }
  const totalStudents = Object
    .values(fields)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(fields)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
}
module.exports = countStudents;
