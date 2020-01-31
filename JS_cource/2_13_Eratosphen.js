function testCycle(n) {
  var result = ' ';
  let i = 2;
  for (; i < n; i++) {
    if (i!==2 && i%2==0){
      continue;
    }
    else if (i!==3 && i%3==0){
      continue;
    }
    else if (i!==5 && i%5==0){
      continue;
    }
    else if (i!==7 && i%7==0){
      continue;
    }
    result += i + ' ';
  }
  return result;
}

document.write(testCycle(30));
