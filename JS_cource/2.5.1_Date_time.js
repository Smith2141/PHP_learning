function testDateTime(a, b) {
    let d1 = new Date(a);
    let d2 = new Date(b);
    if (d1 > d2) {
        [d1, d2] = [d2, d1];
    }
    // res = new Date(d2);
    return d2.getFullYear();
}

console.log(testDateTime("19 October 1911 10:27", "28 March 1910 00:59"));
