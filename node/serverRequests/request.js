
let http = require('http');

let requestLimit = (process.argv[2] === undefined) ? 0 : process.argv[2];
let requestType = process.argv[3];
if (requestType === "parallel") {
  parallelRequests (requestLimit)
}
  else if (requestType === "serial") {
    serialRequests (requestLimit)
  }
    else throw new ReferenceError ('Second argument must be of type "serial" or "parallel"');

function serialRequests(counter) {
  if (counter) {
    http.request({
      host:'127.0.0.1',
      port: 3000,
      path:'/'
      }, res => {
        console.log(res.statusCode);
        serialRequests(--counter);
      }
    ).end();
  } else return;
}

function parallelRequests (counter) {
  for (var i=0; i < counter; i++) {
    http.request({
        host:'127.0.0.1',
        port: 3000,
        path:'/'
    }, res => {
        console.log(res.statusCode);
        }
    ).end();
  }
 }
