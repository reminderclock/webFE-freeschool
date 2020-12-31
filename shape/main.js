// 원의 넓이
function circle(r) {
    return (Math.PI*Math.pow(r,2));
}
console.log(circle(2));

// 사각형의 넓이
function rectangle(width, height){
    return (width*height);
}
console.log(rectangle(3,4));

// 사다리꼴의 넓이
function trapezoid(upperSide, baseSide, height) {
    return ((upperSide+baseSide)*height/2);
}
console.log(trapezoid(8, 12, 6));

// 원기둥의 넓이
function cylinder(r, height) {
    return (2*Math.PI*r*(r + height));
}
console.log(cylinder(5,8));