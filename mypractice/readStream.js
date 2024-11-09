const fs = require('fs');
const path = require('path');


const sourceFile = path.join(__dirname, 'readStream.txt');
const readStream = fs.createReadStream(sourceFile);

readStream.on('data', (chunk) => {
  console.log(chunk.toString());
});

readStream.on('end', () => {
  console.log('Finished Reading the File');
});

readStream.on('error', (error) => {
 console.log('Error in Reading File', error.message);
});

