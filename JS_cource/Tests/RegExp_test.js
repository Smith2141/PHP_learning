var myPattern = /q$/;
function RE_t(a) {
    // return a.search(myPattern);
    return myPattern.test(a);
}

console.log(RE_t('wrewterq'));
