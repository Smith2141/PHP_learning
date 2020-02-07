function testArray(a, b) {
    let result = ((String(a)).split('')).concat(String(b).split(''));
    result.unshift("Иванов");
    return (result.reverse()).join('');
}

console.log(testArray(4326, 297515));
