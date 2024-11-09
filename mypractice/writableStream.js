const fs = require('fs');
const path = require('path');

const destinationFile = path.join(__dirname, '/example/example.txt');
const writeableStream = fs.createWriteStream(destinationFile);

writeableStream.write('Hello this is example of writable Stream.\n');

writeableStream.end();

writeableStream.on('finish', () => {
  console.log('File Writing completed..');
});

writeableStream.on('error', (error) => {
  console.log('Error in writing to the file', error.message);
})
