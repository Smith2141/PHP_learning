function testCycle(n) {
  var result = '';
  while (parseInt(n / 2) >= 0) {
    result = n % 2 + result;
    n = parseInt(n / 2);
    if (n == 0) {
      break;
    }
  }
  return result;
}

console.log(testCycle(75));
