// 원의 넓이
function circle(r) {
    return decideError(Math.PI*Math.pow(r,2));
}
console.log(circle(2));

// 사각형의 넓이
function rectangle(width, height){
    return decideError(width*height);
}
console.log(rectangle(3,4));

// 사다리꼴의 넓이
function trapezoid(upperSide, baseSide, height) {
    return decideError((upperSide+baseSide)*height/2);
}
console.log(trapezoid(8, 12, 6));

// 원기둥의 넓이
function cylinder(r, height) {
    return decideError(2*Math.PI*r*(r + height));
}
console.log(cylinder(5,8));
console.log(cylinder(5));
console.log(cylinder(5,'s'));


//숫자 아니거나 인자갯수 부족시 에러 반환
function decideError(value){
    if(isNaN(value)){
        return console.error('error');
    }
    return console.log(`도형의 넓이: ${value}`);
}