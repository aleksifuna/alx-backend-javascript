const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .trim()
          .split('\n');
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
        resolve(fields);
      }
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
