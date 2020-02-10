// function testMath(a, b, c, d) {
    //     let arr = [a, b, c, d];
    //     return Math.floor(Math.max(...arr) / Math.min(...arr));
    // }
    
const testMath =(a, b, c, d) => {
    return Math.floor(Math.max(a, b, c, d) / Math.min(a, b, c, d));
};


console.log(testMath(1, 4, 8, 8));