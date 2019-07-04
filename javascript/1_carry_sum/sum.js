function sumIni() {
  var argsum = 0;
  function sum(...args) {
    if (args.length > 0) {
      argsum += args[0];
      return sum;
    } else {
      console.log(argsum);
    }
  }

  return sum;
}

sum = sumIni();

sum();
sum(1)(2);
sum(5)(6)();
sum(9);
sum();
sum(14)();
