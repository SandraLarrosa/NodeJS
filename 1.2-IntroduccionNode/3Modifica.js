const fs = require('fs');

const readFile = (fileName, callback) => {
  fs.readFile(fileName, 'utf8', (err, text) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      callback(text);
    }
  });
};

const writeFile = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      callback();
    }
  });
};

readFile('./3input.txt', (fileContent) => {
  const objectData = {
    originalContent: fileContent,
    changedContent: fileContent.toUpperCase(),
    textLenght: fileContent.length,
  };
  writeFile('./output-file.json', JSON.stringify(objectData), () => {
    console.log('Se ha copiado en el nuevo archivo');
  });
});
