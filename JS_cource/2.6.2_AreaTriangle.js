function testMath(a, b, c) {
    the_sin_angle = Math.sin(c * Math.PI / 180);
    the_area_triangle = (a * b * the_sin_angle)/2;
    return the_area_triangle;
}

console.log(testMath(2, 10, 16));
