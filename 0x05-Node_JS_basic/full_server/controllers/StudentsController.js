const readDatabase = require('../utils');

const validMajors = ['CS', 'SWE'];
class StudentsController {
  static getAllStudents(request, response) {
    const DBName = process.argv.length > 2 ? process.argv[2] : '';
    const responseParts = ['This is the list of our students'];
    readDatabase(DBName)
      .then((report) => {
        responseParts.push(report);
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        responseParts.push(err instanceof Error ? err.message : err.toString());
        response.status(500).send(responseParts.join('\n'));
      });
  }

  static getAllStudentsByMajor(request, response) {
    const DBName = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;
    if (!validMajors.includes(major)) {
      response.status(500).send('Major  parameter must be CS or SWE');
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
