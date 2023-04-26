const fs = require('fs');

// Write to a file
fs.writeFile('welcome.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('File created!');
});

// Read from a file
fs.readFile('welcome.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
