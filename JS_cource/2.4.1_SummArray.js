function testArray(a, b) {
    return (a.concat(b)).reduce((sum, current) => sum + current);
}

console.log(testArray([1, 2], [3, 4]));
