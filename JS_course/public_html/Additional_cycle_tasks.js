var result = "";

function testCycle(n) {
    for (i=1; i<=n; ++i) {
        let x = 0;
        function square(i) {
            if (i == n) {
                return x;
            } else {
                x += 2 * n - 1;
                return square(++i);
            }
    }return += x + " ";
    
    }