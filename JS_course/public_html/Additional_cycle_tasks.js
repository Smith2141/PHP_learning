/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function testCycle(a, b) {
    var x = "";
    if (a > b) {
        while (b < a) {
            x += b++ + " ";
        }
        x += a;
    } else {
        while (a < b) {
            x += a++ + " ";
        }
        x += b;
    }
    return x;
}
