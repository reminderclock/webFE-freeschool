function getArea(shape, a, b, c) {
    // let sum = 0;
    if(shape==='circle'){
        if(a===b){
            return Math.PI;
        }
        return Math.PI*Math.pow(b,2) + getArea('circle', a, (b-1));
    }
     if(shape === 'rect'){
        return a*b;
    }
    else if(shape === 'trapezoid'){
        return (a+b)*(c/2);
    }
}
console.log(getArea('circle', 10));
// 원의 넓이 값출력

console.log(getArea('rect', 10,15));
// 사각형의 넓이값출력

console.log(getArea('trapezoid', 10,15,12));
// 사다리꼴의 넓이값출력

getArea('circle', 1, 1);
// 반지름이 1부터 n까지 1씩 증가하면서, n개까지의 원의 넓이의 모든 합을 출력. (재귀적인 해결책을 제시한다)