const { createServer } = require('http');
const fs = require('fs');

const DBName = process.argv.length > 2 ? process.argv[2] : '';

function countStudents(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .trim()
          .split('\n');
        const responseReport = [];
        const fields = {};
        const csvHeader = fileLines[0].split(',');
        const studentHeader = csvHeader.slice(0, csvHeader.length - 1);
        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropeties = studentRecord
            .slice(0, studentRecord.length - 1);
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
        responseReport.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(fields)) {
          responseReport.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(responseReport.join('\n'));
      }
    });
  });
}

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/' && req.method === 'GET') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students' && req.method === 'GET') {
    const responseParts = ['This is the list of our students'];
    countStudents(DBName)
      .then((report) => {
        responseParts.push(report);
        res.end(responseParts.join('\n'));
      })
      .catch((err) => {
        responseParts.push(err instanceof Error ? err.message : err.toString());
        res.end(responseParts.join('\n'));
      });
  }
});
app.listen(1245);
module.exports = app;
