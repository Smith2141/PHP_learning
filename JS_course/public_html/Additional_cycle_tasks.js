/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function testCycle(a, b) {
    min = Math.min(a, b);
    max = Math.max(a, b);
    var x = max;
    for (i = max - 1; i >= min; i--)
        x += " " + i;
    return x;
}


function testCycle(a, b) {
    if (a < b)
        [a, b] = [b, a];
    let result = 0;
    do {
        result += a * a;
        a--;
    } while (a >= b);
    return result;
}


   1---2---3---4---5
5: 1 + 3 + 5 + 7 + 9

function testCycle(n) {
    var result = 0;
    function calculating_an_element(num) {
        return 2*n-1
    }
    return x;
}