const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.write('Hello Holberton School!');
  res.end();
});

app.get('/students', (req, res) => {
  const msg = 'This is the list of our students\n';
  countStudents('database.csv').then((data) => {
    res.end(msg + data);
  }).catch(() => res.statusCode(500).send());
});

app.listen(1245);

module.exports = app;
