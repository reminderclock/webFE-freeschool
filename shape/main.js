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
    return decideError((upperSide+baseSide)*height/2);
}
console.log(trapezoid(8, 12, 6));