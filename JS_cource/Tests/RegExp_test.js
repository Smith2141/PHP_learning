var myPattern = /is/g;
function RE_t(a) {
    return a.replace(myPattern);
    // return myPattern.test(a);
}

console.log(RE_t("This is just test string"));
