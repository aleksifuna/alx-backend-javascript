const readDatabase = require('../utils');

const validMajors = ['CS', 'SWE'];
class StudentsController {
  static getAllStudents(request, response) {
    const DBName = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(DBName)
      .then((report) => {
        const responseParts = ['This is the list of our students'];
        function compareFxn(a, b) {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        }
        for (const [field, group] of Object.entries(report).sort(compareFxn)) {
          responseParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const DBName = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;
    if (!validMajors.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(DBName)
      .then((fields) => {
        let responseText = '';
        if (Object.keys(fields).includes(major)) {
          const group = fields[major];
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
