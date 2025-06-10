import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    const DB = process.argv[2];

    return readDatabase(DB)
      .then((fields) => {
        const message = ['This is the list of our students'];
        const sortedFields = Object.keys(fields)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        for (const field of sortedFields) {
          const list = fields[field].join(', ');
          message.push(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
        }
        response.status(200).send(message.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static async getAllStudentsByMajor(request, response) {
    const DB = process.argv[2];
    const { major } = request.params;

    if ((major === undefined) || ((major !== 'CS') && (major !== 'SWE'))) {
      response.status(500).send('Major parameter must be CS or SWE');
    }

    return readDatabase(DB)
      .then((fields) => {
        const list = fields[major];
        if (!list) {
          response.status(200).send('List: ');
          return;
        }
        response.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
