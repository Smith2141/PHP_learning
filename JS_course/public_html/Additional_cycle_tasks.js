function testCycle(n) {
    var x = 'Простое число';
    var i = 2;
    var j = 0;
    while (i*i <= n && j !== 1) {
        if (n % i === 0) {
            j = 1;
        }
        i += 1;
    }
    if (j === 1) x = 'Составное число';
    return x;
}

document.write(testCycle(151));