function testRegExp(s, sub_s) {
    // expression = s.match((new RegExp(sub_s, 'g')));
    // return expression.join(',');
    return s.match((new RegExp(sub_s, 'g'))).join(',');
}

console.log(testRegExp('Extremitiyasiifbrieakfaistagreement', 'i'));
