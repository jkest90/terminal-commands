const fs = require('fs');

module.exports.ls = () => {
   fs.readdir('./', (err,files) => {
      const filesToString = files.reduce((acc, file) => {
         return `${acc} ${file}`;
      }, '');

      console.log(filesToString);
   });
};


module.exports.touch = () => {
   fs.writeFile('mynewfile.txt', 'Hello World!', (err) => {
      if (err) throw err;
      console.log('File saved!');
   });
}


module.exports.mkdir = () => {
   fs.mkdir('newDir', (err) => {
      if (err) {
         console.log(err.message);
      } else {
         console.log('Directory Created.');
      }
   });
}
