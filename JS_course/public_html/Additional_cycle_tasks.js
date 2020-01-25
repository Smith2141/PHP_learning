function testCycle(n) {
    var result = "";
    var s = 0;
    var itr = 0;
    function square(i) {
        if (i == 0) {
            [s, itr] = [itr,s]
            itr = 0;
            return s;
        } else {
            itr += 2 * i - 1;
            return square(--i);
        }
    }
    
    for (let j=1; j<=n-1; ++j) {
        result += square(j) + " ";
    }
    result+=square(n)
    return result;
}

document.write(testCycle(8));
