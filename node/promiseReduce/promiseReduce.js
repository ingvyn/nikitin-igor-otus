var fn1 = () => {
  console.log('fn1');
  return Promise.resolve(1);
};

var fn2 = () =>
  new Promise(resolve => {
    console.log('fn2');
    setTimeout(() => resolve(2), 1000);
  });

function promiseReduce(asyncFunctions, reduce, initialValue) {
  let memo = initialValue;
  let isResolved = [];
  for (var i = 0; i < asyncFunctions.length; i++) {
    isResolved[i] = asyncFunctions[i]().then(result => {
      memo = reduce(memo, result);
      return Promise.resolve(null);
    });
  }
  return Promise.all(isResolved).then(result => memo);
}

promiseReduce(
  [fn1, fn2],
  function(memo, value) {
    console.log('reduce');
    return memo * value;
  },
  1
).then(console.log);
