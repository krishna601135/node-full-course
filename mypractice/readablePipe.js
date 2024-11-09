const fs = require('fs');
const path = require('path');


const sourceFile = path.join(__dirname, 'readStream.txt');
const destinationFile = path.join(__dirname, '/example/example2.txt');

const readStream = fs.createReadStream(sourceFile);
const writeStream = fs.createWriteStream(destinationFile);

readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('Finished writing to the Destination file');
});

writeStream.on('error', (error) => {
  console.log('Error in writing to the File', error.message);
});
