const passwordGenerator = require('generate-password');

const password = passwordGenerator.generate({
  length: 10,
  numbers: true
});

console.log(password);
