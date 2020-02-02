function testCycle(n) {
  var result = '*';
  // var incomplete_private = parseInt(n / 2);
  // var remainder_of_division = n % 2;
  var i = 0;
  // while (parseInt(n / 2) > 0) {
  //   if (i == 20) {
    //     break;
  //   }
  //   result = n + '>>' + n % 2 + '|' + result;
  //   n = parseInt(n / 2);
  do {
    if (i == 20) {
      break;
    }
    result = n + '>>' + n % 2 + '|' + result;
    n = parseInt(n / 2);
    ++i;
  }
  while (parseInt(n / 2) >= 0 || n % 2 !== 0);
  // }
  return result;
}


console.log(testCycle(75));
