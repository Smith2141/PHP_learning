function testErrorFunc(a, func) {         
    try {
        func(a);
    } catch (ex) {
        return ex.name;
    }
}
