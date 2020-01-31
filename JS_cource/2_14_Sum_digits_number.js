function testCycle(n) {
    var result = 0;
    var d_str = n.toString()
    for (i in d_str) {
    result += Number(d_str[i]);
    }
    return result;
}

document.write(testCycle(124567))