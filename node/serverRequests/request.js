
let http = require('http');
let program = require('commander');
program
  .option('-l, --limit <requestLimit>', 'Define number of requests')
  .option('-t, --type <requestType>', 'Define type of requests: serial or parallel')
  .parse(process.argv);

let requestOptions = {
  host:'127.0.0.1',
  port: 3000,
  path:'/'
}
const serialRequests = (counter) => {
  if (counter) {
    http.request(requestOptions, res => {
        console.log(res.statusCode);
        serialRequests(--counter);
      }
    ).end();
  } else return;
}

const parallelRequests = (counter) => {
  for (var i=0; i < counter; i++) {
    http.request(requestOptions, res => {
        console.log(res.statusCode);
        }
    ).end();
  }
 }
 
 const init = (requestLimit, requestType) => {
  if  (!/^\d+$/.test(requestLimit))
    throw new TypeError ('Limit of request must be defined as number');
  if (requestType === "parallel") {
    parallelRequests (requestLimit)
  }
    else if (requestType === "serial") {
      serialRequests (requestLimit)
    }
      else throw new TypeError ('Type of request must be "serial" or "parallel"');
}

init(program.limit, program.type);




