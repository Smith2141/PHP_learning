function testCycle(n) {
  var result = 2 + ' ';
  let i = 3;
  for (i; i <= n; i++) {
    if (i!==2 && i%2!==0 && i%3!==0 && i%5!==0 && i%7!==0 && i%7!==0)
      result += i + ' ';
    }
    return result;
  }

document.write(testCycle(27));
