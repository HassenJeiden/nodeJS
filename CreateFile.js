const fs = require('fs');

const content = 'Hello Node';
const fileName = 'welcome.txt';

fs.writeFile(fileName, content, (err) => {
  if (err) {
    console.error('Error creating the file:', err);
  } else {
    console.log(`The file ${fileName} has been created successfully.`);
  }
});
