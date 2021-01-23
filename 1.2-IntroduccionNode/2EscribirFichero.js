const fs = require('fs');

const text = 'Lorem ipsum';

const createText = {
  originalContent: text,
  changedContent: 'LOREM IPSUM',
  textLenght: 11,
};

const handleWriteText = (err) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('OK');
  }
};

fs.writeFile('./2create.txt', JSON.stringify(createText), handleWriteText);
