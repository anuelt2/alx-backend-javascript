const { createServer } = require('node:http');
const fs = require('node:fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n');
      const students = lines.slice(1).filter((line) => line.trim() !== '');

      let message = `Number of students: ${students.length}`;

      const fields = {};

      for (const line of students) {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[parts.length - 1];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      for (const field of Object.keys(fields)) {
        const list = fields[field].join(', ');
        message += `\nNumber of students in ${field}: ${fields[field].length}. List: ${list}`;
      }

      resolve(message);
    });
  });
}

const DB = process.argv[2];

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    countStudents(DB)
      .then((output) => {
        res.end(`This is the list of our students\n${output}`);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(port, hostname);

module.exports = app;
