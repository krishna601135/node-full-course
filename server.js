const app =  require('./app.js');

const port = 4000;

app.listen(port, () => {
console.log(`server is running at http://localhost:4000`);
});







// custom middleware
//const logger = function (req, res, next) {
//   console.log('custom middleware called');
//   next();
//}

//app.use(morgan('tiny'));
//app.use(logger);





//const os = require('os')
// console.log(global)
// console.log(os.type())
// console.log(os.version())
// console.log(os.cpus().length)
// console.log(os.homedir())
// console.log(__dirname)
// console.log(__filename)
//const path = require('path')
//console.log(path.parse(__filename))
