const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const msg = 'This is the list of our students\n';
    countStudents('database.csv').then((data) => {
      res.end(msg + data);
    }).catch(() => res.end());
  }
});

app.listen(1245);

module.exports = app;
