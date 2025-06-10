import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }

      const lines = data.split('\n');
      const students = lines.slice(1).filter((line) => line.trim() !== '');

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

      resolve(fields);
    });
  });
}

module.exports = readDatabase;
