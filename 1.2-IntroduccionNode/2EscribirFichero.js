const fs = require('fs');

const text = 'Lorem ipsum';

const createText = {
  originalContent: text,
  changedContent: text.toUpperCase(),
  textLenght: text.length,
};

const handleWriteText = (err) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log(createText);
    console.log('OK');
  }
};

fs.writeFile('./2create.txt', JSON.stringify(createText), handleWriteText);
