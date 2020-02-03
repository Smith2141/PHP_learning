function testCycle(n) {
  var fib_1 = 1;
  var fib_2 = 1;
  var fib_i;
  for (let i = 3; i <= n; ++i) {
    fib_i = fib_2 + fib_1;
    [fib_1, fib_2] = [fib_2, fib_i];
  }
  return fib_i;
}

console.log(testCycle(7));
